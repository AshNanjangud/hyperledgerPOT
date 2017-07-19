/**
* Track the lease of a car from dealer to leasing company
* @param {org.acme.mynetwork.TransfertoLeasingCo } transfertoLeasingCo - the transfer to be processed
* @transaction
*/
function transferCartoLeasingCo(transfertoLeasingCo) {
transfertoLeasingCo.car.carOwner = transfertoLeasingCo.leasingCo;
return getAssetRegistry('org.acme.mynetwork.Car')
.then(function (assetRegistry) {
return assetRegistry.update(transfertoLeasingCo.car);
});
}

/**
* Track the lease of a car from manufacturer to dealer
* @param {org.acme.mynetwork.TransfertoDealer } transfertoDealer - the transfer to be processed
* @transaction
*/
function transferCar(transfertoDealer) {
  
transfertoDealer.car.carOwner = transfertoDealer.dealer;
return getAssetRegistry('org.acme.mynetwork.Car')
.then(function (assetRegistry) {
return assetRegistry.update(transfertoDealer.car);
  
});
}

/**
* Track the lease of a car from Leasing company to leasee
* @param {org.acme.mynetwork.TransfertoLeasee } transfertoLeasee - the transfer to be processed
* @transaction
*/
function transferCarToLeasee(transfertoLeasee) {
transfertoLeasee.car.carOwner = transfertoLeasee.leasee;
return getAssetRegistry('org.acme.mynetwork.Car')
.then(function (assetRegistry) {
return assetRegistry.update(transfertoLeasee.car);
});
}

/**
* Track the lease of a car from Leasee to Scrap Merchant
* @param {org.acme.mynetwork.TransfertoScrapMerchant } transfertoScrapMerchant - the transfer to be processed
* @transaction
*/
function transferCartoScrapMerchant(transfertoScrapMerchant) {
 
	transfertoScrapMerchant.car.carOwner = transfertoScrapMerchant.scrapMerchant;
	return getAssetRegistry('org.acme.mynetwork.Car')
		.then(function (assetRegistry) {
			return assetRegistry.update(transfertoScrapMerchant.car);
		});
  
}

/**
* Track the Car blueprint from Regulator to Manufacturer
* @param {org.acme.mynetwork.TransferBluePrint } transferBluePrint - the transfer to be processed
* @transaction
*/
function transferBluePrint(transferBluePrint) {
  
  transferBluePrint.carBlueprint.prototypeOwner = transferBluePrint.manufacturer;
	
  return getAssetRegistry('org.acme.mynetwork.CarBlueprint')
         .then(function (assetRegistry) {
               return assetRegistry.update(transferBluePrint.carBlueprint);
               });
 
}


/**
* Track the lease of a car from dealer to leasing company
* @param {org.acme.mynetwork.TransferCarFromLeaseeToLeasingCo } transferCarFromLeaseeToLeasingCo - the transfer to be processed
* @transaction
*/
function transferCarFromLeaseetoLeasingCo(transferCarFromLeaseeToLeasingCo) {
  alert(transferCarFromLeaseeToLeasingCo.car.carOwner);
  transferCarFromLeaseeToLeasingCo.car.carOwner = transferCarFromLeaseeToLeasingCo.newOwner;
		return getAssetRegistry('org.acme.mynetwork.Car')
			.then(function (assetRegistry) {
				return assetRegistry.update(transferCarFromLeaseeToLeasingCo.car);
			});
  
}
/**
 * New script file
 */
