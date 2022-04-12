const Lodash = require("./sync")

let _ = new Lodash()
describe("Lodash: Compact", () => {
    ///////////////////////////////////////////////////////////////
    // beforeEach --- amen testy lineluc kanchvuma
    // beforeAll  --- amenaskzbic ylnuma miangamic saxi hamar
    // afterEach --- amen testy prcneluc lineluc kanchvuma
    // afterAll  --- sax testery prcneluc heto
    ////////////////////////////////////////////////////////////////
    let array
    beforeEach(() => {
        // amen testy aneluc mer array-y noric galisa hin tesqin vortev karogha ban poxac linenq
        array = [false, 0, 15, null, true, "", "hello"]
    })
    afterAll(() => {
        _ = new Lodash()
    })
    test("should be defined", () => {
        expect(_.compact).toBeDefined()
        // expect(_.compact).not.toBeUndefined()
    })
    test("change Array example", () => {
        array.push("one")
        expect(array).toContain("one")
    })
    test("should remove falsy values from array", () => {
        const expectedResult = [15, true, "hello"]
        // toEqual for Objects,,,, toBe for primitive data types
        expect(_.compact(array)).toEqual(expectedResult)
    })


    test("should be defined", () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain("")
        expect(_.compact(array)).not.toContain(null)
    })
})