<?php

class db {

    public $serverName;
    public $dbName;
    public $userName;
    public $password;

    public $pdo;
    
    protected static $_instance;
    
    public static function getInstance($conf = [])
    {
        if (self::$_instance === null) {
            self::$_instance = new self($conf);
        }
        return self::$_instance;
    }

    protected function __construct($conf = [])
    {
        foreach ($conf as $key => $value) {
            $this->$key = $value;
        }
        $this->connect();
    }

    protected function connect() {
        try {
            $this->pdo = new PDO("mysql:host=".$this->serverName.";dbname=".$this->dbName,
                $this->userName,
                $this->password);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
    
    private function __clone()
    {
    }
    
    private function __wakeup()
    {
    }
}
