const reduce = (arr, func, acc) => {
    return (function reduceInternal (counter, acc, arrInternal) {
        const [head, ...tail] = arrInternal;
        return arrInternal.length
            ? reduceInternal(counter + 1, func(acc, head, counter, arr), tail)
            : acc
    })(0, acc, arr)
}


export default reduce