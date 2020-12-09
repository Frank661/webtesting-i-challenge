const { success, fail, repair  } = require('./enhancer.js');
// test away!

describe('enhancer functions', () => {
    describe('repair()', () => {
        test('returns new items with durability restored to 100', () => {
            const item = repair({ itenName:'arrow', durability: 25, enhancement: 15});

            const durability = item.durability;
            expect(durability).toBe(100)
        })
    })



    describe('success()', () => {
        test('returns new items with enhancement below 20', () => {
            const item = success({ itenName:'arrow', durability: 25, enhancement: 16});
            const enhancement = item.enhancement

            expect(enhancement).toBe(17)
        })
        test('returns new items with enhancement levet @ 20', () => {
            const item = success({ itenName:'arrow', durability: 25, enhancement: 20});
            const enhancement = item.enhancement

            expect(enhancement).toBe(20)
        })
    })




    describe('fail()', () => {
        test('enhancement level is greater than 16, the enhancement level decreases by 1', () => {
            const item = fail({ itenName:'arrow', durability: 25, enhancement: 20});
            const enhancement = item.enhancement

            expect(enhancement).toBe(19)
        })
        test('enhancement is 15 or more, the durability of the item is decreased by 10', () => {
            const item = fail({ itenName:'arrow', durability: 25, enhancement: 14});
            const enhancement = item.durability

            expect(enhancement).toBe(20)
        })
        test('items enhancement is less than 15, the durability of the item is decreased by 5', () => {
            const item = fail({ itenName:'arrow', durability: 25, enhancement: 14});
            const durability = item.durability

            expect(durability).toBe(20)
        })
    })
});