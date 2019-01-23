const reverse = (arr) => {
    const newArr = [];
    while (arr.length) {
        newArr.push(arr.pop())
    }
    return newArr
}

export default reverse