const {sum, nativeNull} = require("./intro")


describe("Sum Function", () => {
    test("should return sum of values", () => {
        expect(sum(1,3)).toBe(4)
    })

    test("should return value correctly to other values", () => {
        expect(sum(2,3)).toBeGreaterThan(4)
        expect(sum(2,3)).toBeGreaterThanOrEqual(5)
        expect(sum(2,3)).toBeLessThan(10)
        expect(sum(2,3)).toBeLessThanOrEqual(5)
    })

    test("should sum 2 float values correctly", () => {
        ////////////////erorr 0.1 + 0.2 = 0.30000000004   :D
        // expect(sum(0.1,0.2)).toBe(0.3)
        ///////////////////////////////////////////////////////////
        expect(sum(0.1,0.2)).toBeCloseTo(0.3)  // true
    })
})

describe("Native Null Function", () => {
    test("should return false value null", () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy() // undefined, null, 0, " "
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})
