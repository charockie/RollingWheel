<?php

class Registry
{
    private static $container = [];

    public static function set($key, $value)
    {
        if(!isset(self::$container[$key]))
            self::$container[$key] = $value;
        else
            trigger_error('Variable ' . $key . ' already defined', E_USER_WARNING);
    }
    
    public static function get($key)
    {
        return self::$container[$key];
    }
    
    public static function showContainer()
    {
        return self::$container;
    }
}