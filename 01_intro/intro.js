// function expect(value){
//     return{
//         toBe: exp => {
//             if (value === exp){
//                 console.log("success")
//             }else{
//                 console.error(`Value is ${value}, but expectation is ${exp}`)
//             }
//         }
//     }
// }

const sum = (a, b) => a + b

const nativeNull = () => null

// expect(sum(41, 1)).toBe(42)

// console.log(sum(4,55))

module.exports = {sum, nativeNull}