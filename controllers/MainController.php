<?php
require __DIR__ . '/../models/countries.php';

class MainController extends Controller
{

    public function actionIndex()
    {
        $countries = new countries();
        $data = $countries->selectAll();
            
        $this->view->render('index.php', $data);
    }
    
}