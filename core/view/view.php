<?php

class View
{
    public function render($content, $data = null, $template=true)
    {
        if ($template === true) {
            include __DIR__ . '/../../views/template/header.php';
            include __DIR__ . '/../../views/' . $content;
            include __DIR__ . '/../../views/template/footer.php';
        } else {
            include __DIR__ . '/../../views/' . $content;
        }
    }
}