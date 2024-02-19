function processDataCombination(combineData) {
    var combinedSentence = '';
    combineData.forEach(function (item) {
        combinedSentence += " " + item;
    });
    return combinedSentence;
}
function processDataTypes(dataArray) {
    if (dataArray.every(function (item) { return typeof item === 'number'; })) {
        var numSum_1 = 0;
        dataArray.forEach(function (item) {
            numSum_1 += item;
        });
        return numSum_1;
    }
    else if (dataArray.every(function (item) { return typeof item === 'string'; })) {
        var stringSum_1 = '';
        dataArray.forEach(function (item) {
            stringSum_1 += " " + item;
        });
        return stringSum_1;
    }
    else {
        return 'invalid input';
    }
}
function processDrinkData(drink) {
    var name = drink.name, vendor = drink.vendor, quantity = drink.quantity, inStock = drink.inStock, price = drink.price;
    var buyable = quantity <= inStock;
    var totalPrice = buyable ? quantity * price : undefined;
    var result = {
        name: name,
        buyable: buyable
    };
    if (buyable) {
        result.totalPrice = totalPrice;
    }
    return result;
}
console.log(processDataCombination([1, 'data', '3', 'result']));
console.log(processDataTypes([1, 2, 3, "4"]));
var drinkData = {
    name: 'Coca Cola',
    vendor: 'Coca Cola Company',
    quantity: 7,
    inStock: 6,
    price: 5000
};
var drinkReturn = processDrinkData(drinkData);
console.log("Name: " + drinkReturn.name);
console.log("Buyable: " + drinkReturn.buyable);
if (drinkReturn.totalPrice) {
    console.log("Total Price: " + drinkReturn.totalPrice);
}
