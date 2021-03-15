
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return []
    return matrix.reduce((acc, element, index) => {
        if (index % 2 == 0) acc.push(...element)
        else acc.push(...element.reverse())
        return acc
    }, [])
}

