const every = (arr, func) => {
    return (function everyInternal (counter = 0) {
        return counter >= arr.length
            ? true
            : (!func(arr[counter], counter, arr) ? false : everyInternal(counter + 1))
    })();

}

export default every