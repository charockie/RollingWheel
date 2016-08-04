<?php

class Routing {

    static function execute() {

        $controllerName = 'main';
        $actionName = 'index';
        $piecesOfUrl = explode('/', $_SERVER['REQUEST_URI']);
        
        if (!empty($piecesOfUrl[1])) {
            $controllerName = $piecesOfUrl[1];
            $controllerName = ucfirst($controllerName);
        }

        if (!empty($piecesOfUrl[2])) {
            $actionName = $piecesOfUrl[2];
            $actionName = ucfirst($actionName);
        }

        $modelName = $controllerName;
        $controllerName = $controllerName.'Controller';
        $actionName = 'action' . $actionName;

        $fileWithModel = strtolower($modelName) . '.php';
        $fileWithModelPath = '../models/' . $fileWithModel;
        if (file_exists($fileWithModelPath)) {
            require_once $fileWithModel;
        }

        $fileWithController = $controllerName . '.php';
        $fileWithControllerPath = '../controllers/' . $fileWithController;

        if (file_exists($fileWithControllerPath)) {
            require_once $fileWithControllerPath;
        } else {
            Routing::ErrorPage404();
        }

        $controller = New $controllerName();
        $action = $actionName;
        if (method_exists($controller, $action)) {
            call_user_func(array($controller, $action), $piecesOfUrl);
        } else {
            Routing::ErrorPage404();
        }

    }

    protected function ErrorPage404()
    {
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('HTTP/1.1 404 Not Found');
            header('Status: 404 Not Found');
            header('Location:'.$host.'404');
    }

}