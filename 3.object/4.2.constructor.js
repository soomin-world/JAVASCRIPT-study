function Gun(){
    this.fire=() =>console.log('탕탕')
}

function Shooter(name, gun){
    this.name = namethis.fire
}
//

function Food(name){
    this.name = name
}

function MIDIOutputMap(){
    this.cook = foodName => new Food(foodName)
}

function Child(){
    this.eat = food => console.log(food)
}

const mom = new Mom()
const child = new Child()

child.eat(mom.cook('짜장면'))

