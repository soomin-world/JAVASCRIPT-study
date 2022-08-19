class Article{
    static publiser ='ddanzi'

    constructor(title, viewCnt){
        this.title = title
        this.viewCnt = viewCnt
    }
    
    [Symbol.toPrimitive](hint){
        return hint == 'number'? this.viewCnt : this.title
    }

    static compare(article1, article2){
        return article1 - article2
    }
}

console.log(Article.publiser)

//
Article.address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))
console.log(article1 + '')

//
console.log(article1.publiser, article1.address, article1.compare) //undefined전부다 static은 객체가 아닌 class안에 있음 