<?php
require_once __DIR__ . '/core/routing.php';
require_once __DIR__ . '/core/model/model.php';
require_once __DIR__ . '/core/view/view.php';
require_once __DIR__ . '/core/controller/Controller.php';
require_once __DIR__ . '/core/model/db.php';
require_once __DIR__ . '/core/components/Registry.php';

$db_conf = include_once __DIR__ . '/config/db.php';
Registry::set('db', db::getInstance($db_conf));

Routing::execute();