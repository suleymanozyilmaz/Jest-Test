 const cloneArr = require('./cloneArray')

test('Aynı arrayi dönmesi lazımdır', () => {
    const array = [1, 2, 3]
    expect(cloneArr(array)).toEqual(array)
    expect(cloneArr(array)).not.toBe(array)
})