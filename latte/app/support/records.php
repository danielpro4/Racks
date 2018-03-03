<?php 
class productBase extends DataRecord{
	public $idproduct, $sku, $name, $price, $unit, $image, $active, $created;
	public static function all($t = "product"){ return array("$t.idproduct AS '$t.idproduct'", "$t.sku AS '$t.sku'", "$t.name AS '$t.name'", "$t.price AS '$t.price'", "$t.unit AS '$t.unit'", "$t.image AS '$t.image'", "$t.active AS '$t.active'", "$t.created AS '$t.created'"); }
	public static function gettable(){ return "product"; }
	public function getAutoKey(){ return array( "idproduct" => $this->idproduct ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "sku" => $this->sku, "name" => $this->name, "price" => $this->price, "unit" => $this->unit, "image" => $this->image, "active" => $this->active, "created" => $this->created ); }
	public function getModule(){ return 'app'; }
	public function isInserted(){ return isset($this->idproduct); }
}
class locationBase extends DataRecord{
	public $idlocation, $idlevel, $idproduct, $quantity, $created;
	public static function all($t = "location"){ return array("$t.idlocation AS '$t.idlocation'", "$t.idlevel AS '$t.idlevel'", "$t.idproduct AS '$t.idproduct'", "$t.quantity AS '$t.quantity'", "$t.created AS '$t.created'"); }
	public static function gettable(){ return "location"; }
	public function getAutoKey(){ return array( "idlocation" => $this->idlocation ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "idlevel" => $this->idlevel, "idproduct" => $this->idproduct, "quantity" => $this->quantity, "created" => $this->created ); }
	public function getModule(){ return 'app'; }
	public function isInserted(){ return isset($this->idlocation); }
}
class rackBase extends DataRecord{
	public $idrack, $name, $created;
	public static function all($t = "rack"){ return array("$t.idrack AS '$t.idrack'", "$t.name AS '$t.name'", "$t.created AS '$t.created'"); }
	public static function gettable(){ return "rack"; }
	public function getAutoKey(){ return array( "idrack" => $this->idrack ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "name" => $this->name, "created" => $this->created ); }
	public function getModule(){ return 'app'; }
	public function isInserted(){ return isset($this->idrack); }
}
class levelBase extends DataRecord{
	public $idlevel, $idrack, $created;
	public static function all($t = "level"){ return array("$t.idlevel AS '$t.idlevel'", "$t.idrack AS '$t.idrack'", "$t.created AS '$t.created'"); }
	public static function gettable(){ return "level"; }
	public function getAutoKey(){ return array( "idlevel" => $this->idlevel ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "idrack" => $this->idrack, "created" => $this->created ); }
	public function getModule(){ return 'app'; }
	public function isInserted(){ return isset($this->idlevel); }
}