let promise = new Promise((resolve, reject) => resolve('done'))
/*
promise.then(console.log, console.log)
promise.then(console.log, null)

promise.then(console.log) 성공했을때 
promise.catch(console.log)실패했을때 


*/
//과제ㅣ 1초뒤에 resolce하도록한다.
promise = new Promise
((resolve, reject) => {setTimeout(() => resolve('done'), 1000)})

promise.then(console.log, console.log)


//
promise = new Promise((resolve, reject) => {
    setTimeout(()=> reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result),
    error => console.log(error))

    //
new Promise((resolve, reject) => 
    setTimeout(()=> reject(new Error('미완성')), 3000))
    .then(console.log)
    .finally(() => console.log('promise가 생성되었습니다.'))