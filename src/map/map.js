const map = (arr, func) => {
    return r(arr, func)
}

const r = (arr, func, index = 0, result = []) => {
    if (index >= arr.length) {
        return result
    }
    const funcResult = func(arr[index], index, arr)
    const newResult = [...result, funcResult]

    return r(arr, func, ++index, newResult)
}
export default map;