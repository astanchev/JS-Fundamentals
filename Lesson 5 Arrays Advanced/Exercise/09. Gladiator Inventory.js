function gladiatorInventory(inputArr) {

    let allItemsArr = inputArr.shift().split(' ');

    for (let commandArgs of inputArr) {

        let [command, currentItem] = commandArgs.split(' ');
        let index = allItemsArr.indexOf(currentItem);

        if (command === 'Buy' && index === -1) {

            allItemsArr.push(currentItem);

        } else if (command === 'Trash' && index !== -1) {

            allItemsArr.splice(index, 1);

        } else if (command === 'Repair' && index !== -1) {

            allItemsArr.splice(index, 1);
            allItemsArr.push(currentItem);

        } else if (command === 'Upgrade') {

            let upgradeItem = currentItem.split('-')[0];

            if (allItemsArr.includes(upgradeItem)) {

                let upgradeIndex = allItemsArr.indexOf(upgradeItem);
                allItemsArr.splice(upgradeIndex + 1, 0, currentItem.replace('-', ':'));
            }
        }
    }

    console.log(allItemsArr.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);