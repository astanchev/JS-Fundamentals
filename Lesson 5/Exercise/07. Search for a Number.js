function searchNumber(array, searchAssist) {
    let [elTake, elDelete, searchNum] = searchAssist;

    let result = array.slice(0, elTake);

    result.splice(0, elDelete);

    let count = result.filter(el => el === searchNum).length;

    console.log(`Number ${searchNum} occurs ${count} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);