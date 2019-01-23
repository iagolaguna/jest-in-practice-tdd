const reverse = (arr) => {
    return (function reverseInternal (result, counter) {
        return counter ? reverseInternal([...result, arr[counter - 1]], counter - 1) : result
    })([], arr.length)
}

export default reverse