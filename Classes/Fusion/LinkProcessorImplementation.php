<?php
namespace DIU\Neos\LinkEditor\Fusion;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Domain\Service\Context;
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
                $href = $m[2];
                if (strpos($href, 'node://') === 0) {
                    $nodePartials = explode('node://', $href);
                    //Create an english context
                    /** @var Context $enContext */
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

                    /** @var NodeInterface $enTargetNode */
                    $enTargetNode = $enContext->getNodeByIdentifier($nodePartials[1]);

                    if ($enTargetNode === null) {
                        /** @var NodeInterface $currentNode */
                        $currentNode = $this->fusionValue('node');
                        if($currentNode !== null) {
                            $currentContext = $currentNode->getContext();
                            /** @var NodeInterface $enTargetNode */
                            $enTargetNode = $currentContext->getNodeByIdentifier($nodePartials[1]);
                        }else{
                            return $m[1] . $m[2] . '"';
                        }
                    }

                    $enUriPathSegment = $enTargetNode->getProperty('uriPathSegment');
                }
                else if(strpos($href, 'asset://') === 0){
                    $enUriPathSegment = '';
                }
                // apply pregReplace to external URLs
                else{
                    $pattern = '/(\.)|(:\/\/)|(\/)|(#)/';
                    $string = explode('?', $href,2)[0];
                    $enUriPathSegment =  preg_replace($pattern, '_', $string);

                }


                if (!is_string($enUriPathSegment)) {
                    throw new \Exception(sprintf('Only strings can be processed by this Fusion object, given: "%s".', gettype($enUriPathSegment)), 1382624080);
                }

                return $m[1] . $m[2] . '" data-enuripathsegment="' . $enUriPathSegment . '"';
            },
            $text
        );

    }
}
