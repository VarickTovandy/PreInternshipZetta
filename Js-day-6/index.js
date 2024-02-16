function purchaseBook(bookTitle, author, price, discountPercentage, taxPercentage, stock, amountPurchased, creditDurationMonths) {
    const discountFactor = discountPercentage / 100;
    const taxFactor = taxPercentage / 100;

    let remainingStock = stock;
    let totalAmount = 0;
    let actualPurchased = 0;

    const purchaseDetails = [];

    for (let i = 0; i < amountPurchased; i++) {
        if (remainingStock > 0) {
            const discountAmount = price * discountFactor;
            const priceAfterDiscount = price - discountAmount;
            const taxAmount = priceAfterDiscount * taxFactor;
            const priceAfterTax = priceAfterDiscount + taxAmount;

            totalAmount += priceAfterTax;

            remainingStock--;

            actualPurchased++;
        } else {
            console.log(`Sorry, the stock is not enough to purchase ${amountPurchased} books.`);
            break;
        }
    }

    console.log("\nPurchase Summary:");
    console.log("Book Title:", bookTitle);
    console.log("Author:", author);
    console.log("Original Price: Rp.", price);
    console.log("Discount Percentage: ", discountPercentage, "%");
    console.log("Tax Percentage: ", taxPercentage, "%");
    console.log("Requested Amount to Purchase:", amountPurchased);
    console.log("Actual Quantity Purchased:", actualPurchased);

    console.log("\nBook Price Details:");
    console.log("Total Price for Purchased Books: Rp.", totalAmount);
    console.log("Remaining Stock after Purchase:", remainingStock);

    if (remainingStock > 0) {
        console.log("You can purchase more books.");
    } else {
        console.log("Sorry, the stock is out. No more purchases allowed.");
    }

    const paymentDuePerMonth = totalAmount / creditDurationMonths;

    for (let month = 2; month <= creditDurationMonths + 1; month++) {
        const formattedDueDate = `${month}/1`;
        purchaseDetails.push(`Month ${month - 1}: Due on ${formattedDueDate}, Payment Due: Rp. ${paymentDuePerMonth.toFixed(2)}`);
    }

    console.log("\nBook Credit Details:");
    console.log(purchaseDetails.join("\n"));
}

purchaseBook("Blue Lock", "Kaneshiro Muneyuki", 35000, 10, 8, 4, 3, 6);