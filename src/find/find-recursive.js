const find = (arr, func) => {
    return (function findInternal (counter) {
        return arr.length === counter
            ? undefined
            : func(arr[counter], counter, arr) ? arr[counter] : findInternal(counter + 1)
    })(0)
}

export default find