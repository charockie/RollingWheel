<?php

class query
{
    protected $pdo;

    public function __construct()
    {
        $this->pdo = Registry::get('db')->pdo;
    }

    public function selectAll()
    {
        $data = $this->pdo->query('SELECT * FROM '.$this->table);
        $data->execute();
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function create(array $data = null)
    {
        
    }

    public function update(array $data = null)
    {

    }

    public function delete($id = null)
    {
        $sql = 'DELETE FROM '.$this->table.' WHERE id =  :id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
    }
}