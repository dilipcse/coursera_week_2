(function(){

	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buy=this;
		buy.full=false;
		buy.full2=true;
		 buy.products=ShoppingListCheckOffService.getItem();
		 buy.purchase=function(loc){

		 var item=ShoppingListCheckOffService.remove(loc);
		 ShoppingListCheckOffService.add(item);
		 if(buy.products.length==0)
		 	buy.full=true;
		 	buy.full2=false;
		 };
	}
	
	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought=this;

		 bought.buyproducts=ShoppingListCheckOffService.getItem2();
		 
	}

	function ShoppingListCheckOffService(){
		var service=this;
		var buyproduct=[];
		var product=[
						{name:"cookie", quantity:"10"},
						{name:"biscuits", quantity:"20"},
						{name:"strawberry", quantity:"20"},
						{name:"mango", quantity:"20"},
						{name:"banana", quantity:"20"}

					];

		service.getItem=function(){
			
			return product;
		};
		 service.getItem2=function(){
		 	return buyproduct;
	 	};

	 	service.remove=function(location){
	 		var item={name:product[location].name,
	 					quantity:product[location].quantity
	 					};
	 		 product.splice(location,1);
	 		 return item;
	 	};

	 	service.add=function(it){
	 	//	service.indicator=true;
	 		return buyproduct.push(it);
	 	};
	}

})();