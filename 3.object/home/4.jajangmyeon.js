/*과제
~를 객체지향으로 refactoring해라.*/

function Food(taste, name){
    this.taste = taste
    this.name = name
}
//생성자의 parameter는 object의 속성
function Chef(taste){
    this.cook = foodName = new Food(taste, foodName)
}

function waiter(){
    this.order = (foodName, chef) =>chef.cook(foodName)
}

let Chef1 = new Chef('달콤한')
let Chef2 = new Chef('매운')
let waiter = new waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)