function vacation(people, type, day) {
    let price = 0;

    if (type === "Students") {
        if (day === "Friday") {
            price = 8.45;
        } else if (day === "Saturday") {
            price = 9.8;
        } else if (day === "Sunday") {
            price = 10.46;
        }

        if (people >= 30) {
            price *= 0.85;
        }
    } else if (type === "Business") {
        if (day === "Friday") {
            price = 10.9;
        } else if (day === "Saturday") {
            price = 15.6;
        } else if (day === "Sunday") {
            price = 16;
        }

        if (people >= 100) {
            people -= 10;
        }
    } else if (type === "Regular") {
        if (day === "Friday") {
            price = 15;
        } else if (day === "Saturday") {
            price = 20;
        } else if (day === "Sunday") {
            price = 22.5;
        }

        if (people >= 10 && people <= 20) {
            price *= 0.95;
        }
    }

    let totalPrice = people * price;

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");