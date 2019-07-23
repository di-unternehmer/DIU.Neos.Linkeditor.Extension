<?php
namespace DIU\Neos\LinkEditor\Fusion;

use Neos\Flow\Annotations as Flow;
use Neos\Fusion\FusionObjects\AbstractFusionObject;

class LinkProcessorImplementation extends AbstractFusionObject
{
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
                $href = str_replace("://", "_", $href);
                $href = str_replace(":", "_", $href);
                $href = str_replace("/", "_", $href);
                $res = $m[1] . $m[2] . '" data-enuripathsegment="' . $href . '" ';
                return $res;
            },
            $text
        );
    }
}
