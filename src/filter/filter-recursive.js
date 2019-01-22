
const filter = (arr, func) => {
    return (function filterInternal (counter = 0, result = []) {
        return counter >= arr.length
            ? result
            : filterInternal(counter + 1, func(arr[counter], counter, arr) ? [...result, arr[counter]] : result)
    })()
}
export default filter;