"use strict"

//svoystva-aksessori get set

const person = {
    name: "John",
    age: 28,

    get userAge() {
        return this.age;
    },
    set userAge(num){
        this.age = num;
    }
};

//svoystva! poetomu obrawaemsua bez skobok, imenno kak k svoystva, a ne k metodu
console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);

//inkapulyacia

function User (name, age){
    this.name = name;
    this.age = age;

    this.say = function (){
        console.log(`Имя пользователя : ${this.name}, возраст ${this.age}`);
    };
}

const john = new User ('John', 22);
john.age = 30;
console.log(john.name);
console.log(john.age);
john.say();

//c inkapsylyaciyey

function User2 (name, age) {
    this.name = name;
    let userAge = age;

    this.say = function(){
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };
}

const ann = new User2 ('Ann', 22);

console.log(ann.name);
console.log(ann.userAge);
ann.say();

////////////////////////////////////////////////


function User3 (name, age) {
    this.name = name;
    let userAge = age;

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    }
    this.setAge = function(age){
        if(typeof age === 'number' && age > 0 && age <100) {
            userAge = age;
        }else{
            console.log('недопустимое значение!')
        }
    }
}

const kirill = new User3('Kirill', 25);

console.log(kirill.name);
console.log(kirill.userAge);
console.log(kirill.getAge());
kirill.setAge(33);
kirill.setAge(333);
kirill.setAge('fwefwe');
kirill.say();

/////////////////////////////
//inkapsylyaciya . klass


class Author {
    constructor (name,age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Maal'; //private pole

    say = () => {
        console.log(`Имя пользователя: ${this.name}, ${this.#surname} возраст ${this._age}`);
    }

    get age(){
        return this._age;
    }
    set age(age) {
        if (typeof age === 'number' && age > 0 && age <100){
            this._age = age;
        }else{
            console.log('недопустимое значение !')

        }
    }
}

const ivan = new Author ('Ivan', 25);

console.log(ivan.name);
ivan.age = 99;
console.log(ivan.age);

ivan.say();

//////////////222222222222222222222

"use strict";

const num = 1;

(function(){
    let num = 2;
    console.log(num);
    console.log(num + 1 );
}());

console.log(num);

const user = (function(){
    const privat = function () {
        console.log('I am privat');
    };

    return {
        sayHello: privat // exportiruem naruzu local svoystvo
    }
}());

user.sayHello();


//rab variant 3 error
console.log("Запрос данных...");
const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("подготовка данных...");

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);
    },2000);
});

req.then((product)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            product.status = 'order';
            //resolve(product);
            reject();
        }, 2000);
    });
}).then(data=>{
    data.modify = 'true';
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console.error('ERROR!')
}
);

//rabo4iy variant 4 finanly
console.log ("запрос данных...");
const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Подготовка данных...");

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);
    },2000);
});

req.then((product)=>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            product.status = 'order';
            resolve(product);
            reject();
        },2000);
    });
}).then(data=>{
    data.modify = 'true';
    return data;
}).then (data=> {
    console.log(data);
}).catch(()=>{
    console.error('ERROR!')
}).finally(()=>{
    console.log("Все действия выполнены !");
});

//------------------------------------------------
const test  = time => {
    return new Promise ( resolve => {
        setTimeout (()=> resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(4000),  test (1000)]).then (()=>{
    console.log('All');
});

////////////////////FETCH API  

"use strict";

//https://jsonplaceholder.typicode.com/  API

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json ())
.then(json => console.log (json));

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST" ,
    body: JSON.stringify({name: "Alex"}),
    headers: {
        'Content-type': 'application/json'
    }
})
.then(response => response.json())
.then(json => console.log(json));
