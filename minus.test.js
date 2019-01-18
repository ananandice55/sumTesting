const minus = require('./minus')

test('7-5 เท่ากับ 2',() => {
    expect(minus(7,5)).toBe(2);
});

test(' 100 - 50 เท่ากับ',() => {
    expect(minus(100,50)).toBe(50);
});

test('65 - 25 เท่ากับ 40',() => {
    expect(minus(65,25)).toBe(40);
});
test('80-10 เท่ากับ 70',() => {
    expect(minus(80,10)).toBe(70);
});
test('50 - 50 เท่ากับ ',() => {
    expect(minus(50,50)).toBe(0);
});