function solve(tickets) {
    tickets = tickets[0].split(/,/g);

    for (let ticket of tickets) {

        ticket = ticket.trim();
        
        if (ticket.length === 20) {

            let leftSide = ticket.substring(0, 10);
            let rightSide = ticket.substring(10, 20);
            let pattern = /(@|#|\$|\^){1}\1{5,9}/g;
            let leftMatch = leftSide.match(pattern);
            let rightMatch = rightSide.match(pattern);

            if (leftMatch !== null && rightMatch !== null && 
                leftMatch[0].length >= 6 && 
                rightMatch[0].length >= 6) {

                let matchLength;

                if (leftMatch[0].length >= rightMatch[0].length) {

                    matchLength = rightMatch[0].length;
                } else {

                    matchLength = leftMatch[0].length;
                }

                const matchSymbol = leftMatch[0][0];

                if (matchLength === 10) {

                    console.log(`ticket "${ticket}" - ${matchLength}${matchSymbol} Jackpot!`);
                } else {

                    console.log(`ticket "${ticket}" - ${matchLength}${matchSymbol}`);
                }

            } else {
                console.log(`ticket "${ticket}" - no match`);
            }

        } else {
            console.log('invalid ticket');
        }
    }
}

solve(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@oemoo@@@@@@y']);

solve(
    ['$$$$$$$$$$$$$$$$$$$$   ,   aabb  , th@@@r@@eemo@@@@r@ey,     th@@@@@@eemo@@@@@@ey']
);