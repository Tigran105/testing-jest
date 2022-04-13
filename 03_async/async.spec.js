const Ajax = require("./async")
const axios = require("axios");

jest.mock("axios")

describe("Ajax: echo", () => {
    //////    async
    test("should return value async", async () => {
        const result = await Ajax.echo("example data")
        expect(result).toBe("example data")
    })

    test("should return value async", async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe("Error")
        }
    })
    /////    promise

    test("should return value with promise", () => {
        return Ajax.echo("example data").then(data => {
            expect(data).toBe("example data")
        })
    })
    test("should catch error with promise", () => {
        return Ajax.echo("example data").catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
})

///   axios
describe("Ajax: GET", () => {
    let response
    let todos
    beforeEach(() => {
        todos = [
            {id: 1, title: "Todo 1", completed: false}
        ]

        response = {
            data: {
                todos
            }
        }
    })
    test("should return data from backend", async () => {
        axios.get.mockReturnValue(response)

        const result = await Ajax.get()
        expect(result.todos).toEqual(todos)
    })
})