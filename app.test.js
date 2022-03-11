const {sum,subs,divis}= require('./app');


test("Addts to number", () => {
    expect(sum(10,5)).toBe(sum(10,5))    
});


test('sayıları çıkarması lazım ', () => {
    expect(subs(6,2)).toBe(4)
});


test('bölmesi lazım', () => {
    expect(divis(10,5)).toBe(2)
    expect(divis(0,10)).toBe(0)
    expect(divis(10,0)).toBe('BÖLEMEZSİN')
});
