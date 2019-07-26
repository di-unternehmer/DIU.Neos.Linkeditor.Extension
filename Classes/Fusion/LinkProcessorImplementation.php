<?php
namespace DIU\Neos\LinkEditor\Fusion;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Annotations as Flow;
use Neos\Fusion\FusionObjects\AbstractFusionObject;
use Neos\Neos\Fusion\Helper\LinkHelper;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\ContentRepository\Domain\Service\ContextFactory;

class LinkProcessorImplementation extends AbstractFusionObject
{
    /**
     * @Flow\Inject
     * @var LinkHelper
     */
    protected $linkingHelper;

    /**
     * @Flow\Inject
     * @var ContextFactory
     */
    protected $contextFactory;

    /**
     * @return string
     * @throws \Exception
     */
    public function evaluate()
    {
        $text = $this->fusionValue('value');

        if ($text === '' || $text === null) {
            return '';
        }

        if (!is_string($text)) {
            throw new \Exception(sprintf('Only strings can be processed by this Fusion object, given: "%s".', gettype($text)), 1382624080);
        }


        return preg_replace_callback(
            "/(<a.+?href=\")(.+?)\"/i",
            function($m) {
                $nodeContext = $this->fusionValue('node');
                $href = $m[2];

                // get english URL path segment for nodes
                $originNode = $this->linkingHelper->convertUriToObject($href,$nodeContext);
                if ($originNode && $originNode instanceof NodeInterface) {
                    //Create an english context
                    $enContext = $this->contextFactory->create([
                        'dimensions' => [
                            'language' => ['en'],
                            'country' => ['int']
                        ],
                        'targetDimensions' => [
                            'language' => 'en',
                            'country' => 'int'
                        ]
                    ]);

                    $query = new FlowQuery([$enContext->getCurrentSiteNode()]);
                    /** @var NodeInterface $enNode */
                    $enNode = $query->find($originNode)->get(0);
                    $enUriPathSegment = $enNode->getProperty('uriPathSegment');
                }
                // apply pregReplace to external URLs
                else if(is_null($originNode)){
                    $pattern = '/(\.)|(:\/\/)|(\/)|(#)/';
                    $string = explode('?', $href,2)[0];
                    $enUriPathSegment =  preg_replace($pattern, '_', $string);

                }


                if (!is_string($enUriPathSegment)) {
                    throw new \Exception(sprintf('Only strings can be processed by this Fusion object, given: "%s".', gettype($enUriPathSegment)), 1382624080);
                }

                return $m[1] . $m[2] . '" data-enuripathsegment="' . $enUriPathSegment . '" ';
            },
            $text
        );

    }
}
