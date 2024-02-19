type unionCombination = number | string;

interface drinkInfo {
    name: string,
    vendor: string,
    quantity: number,
    inStock: number,
    price: number
}

interface drinkReturn {
    name: string,
    buyable: boolean,
    totalPrice?: number
}

function processDataCombination(combineData: unionCombination[]): string {
    let combinedSentence: string = '';

    combineData.forEach(item => {
        combinedSentence += " " + item;
    });

    return combinedSentence;
}

function processDataTypes(dataArray: unionCombination[]): number | string {
    if (dataArray.every(item => typeof item === 'number')) {
        let numSum: number = 0;

        dataArray.forEach(item => {
            numSum += item as number;
        });

        return numSum;
    } else if (dataArray.every(item => typeof item === 'string')) {
        let stringSum: string = '';

        dataArray.forEach(item => {
            stringSum += " " + item;
        });

        return stringSum;
    } else {
        return 'invalid input';
    }
}

function processDrinkData(drink: drinkInfo): drinkReturn {
    const { name, vendor, quantity, inStock, price } = drink;

    const buyable = quantity <= inStock;
    const totalPrice = buyable ? quantity * price : undefined;

    const result: drinkReturn = {
        name, buyable
    };

    if (buyable) {
        result.totalPrice = totalPrice;
    }

    return result
}

console.log(processDataCombination([1, 'data', '3', 'result']));
console.log(processDataTypes([1, 2, 3, "4"]));

const drinkData: drinkInfo = {
    name: 'Coca Cola',
    vendor: 'Coca Cola Company',
    quantity: 7,
    inStock: 6,
    price: 5000
}

const drinkReturn: drinkReturn = processDrinkData(drinkData);
console.log("Name: " + drinkReturn.name);
console.log("Buyable: " + drinkReturn.buyable);
if (drinkReturn.totalPrice) {
    console.log("Total Price: " + drinkReturn.totalPrice);
}