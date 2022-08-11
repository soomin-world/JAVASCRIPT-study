let val = 1 + 2 * 3 / 2
console.log(val, 5, 4**2, 4**(1/2))

let i = 1
console.log(++1, i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ''+ bar)
console.log(1 + '2', '1'+ 2)

//unray plus operator
console.log(1+ + '2')

console.log(1||0, 0||1)
console.log(1&&0, 0 &&1)
console.log(1&&2, 2&&1)

//foo && do(foo)
// bar = baz || createBar()

console.log()
let c = 3 - (a = 1+2)
console.log(c)

let d= 2
d*= 2
console.log(d)

console.log()
console.log('2' >1, '01' == 1, false==0, '' == false)
console.log(true >1)

//equivalent
console.log(1 =='1', 1 != '1')
//identical
console.log(1 ==='1', 1!== '1')

console.log('z' > 'a', 'ac' > 'ab', 'bee'> 'be', 'a' >'A')

console.log(null > 0, null <0, null>=0, null ==0)
console.log(undefined > 0, undefined >=0, undefined ==0)
console.log(NaN > 0, NaN >= 0, NaN ==0)

console.log(undefined == undefined, null==null, Nan == Nan)
