
const filter = (arr, func) => {
    return filterInternal(arr, func, 0, []);
}
const filterInternal = (arr, func, counter, result) => {
    if (counter >= arr.length) {
        return result
    }

    func(arr[counter], counter, arr) && result.push(arr[counter])
    
    return filterInternal(arr, func, ++counter, result)
}
export default filter;