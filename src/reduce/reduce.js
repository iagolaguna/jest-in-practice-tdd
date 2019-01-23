const reduce = (arr, func, acc) => {
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i], i, arr)
    }
    return acc
}
export default reduce