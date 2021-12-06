/**
 *  New - создание инстансов
 */

function Cat (color, name) {
    this.color = color;
    this.name = name;
}

const cat = new Cat('black', 'CAT')
console.log(cat); // Cat { color: 'black', name: 'CAT' }

function myNew(constructor, ...args){
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const kitty = myNew(Cat, 'black', 'Kitty')
console.log(kitty); // Cat { color: 'black', name: 'Kitty' }

let murzik = Cat()
console.log(murzik); //undefined
murzik = new Cat()
console.log(murzik); //Cat { color: undefined, name: undefined }
murzik = myNew(Cat)
console.log(murzik); //Cat { color: undefined, name: undefined }
