"use strict";

const typeGoods = 'food'

//console.log('https://market.com/' + typeGoods );

//console.log('https://market.com/' + typeGoods + '|' + '10');

console.log(`https://market.com/${typeGoods}`);

/*
задание

Вывести в консоль с помощью интеполяции адрес 
https://market.com/games/strategy/10
сохранить в github. коммит - интеполяция 

*/

"use strict";

let number = 10;

function showMessage(text) {
    console.log(text);
    //let number = 20;
    console.log(number)
}

showMessage("Hello!!!");
console.log(number);

const server = function() {
    console.log('server start...');
}

server();

const calc = (x, y) => x+y;
// const calc = (x, y) => {
//      return x+y    
//};

//const calc = x => x+10;

console.log(calc(10,5));




"use strict"

function server(){
    setTimeout(function(){
        console.log(1);
    },1000)
}
function foo (){
            console.log(2);
    }


server();
foo();

function serverNew(host, callback){
    console.log(`Server ${host} is starting...`);
    callback();
}

//serverNew('MyServer', function (){
//  console.log('connect success!');
//   }); 

function done (){
    console.log('connect success!');
}

serverNew('MyServer', done);

//

"use strict";

//const obj = new Object (); //odin iz variantov sozdaniya objecta

//samiy 4astiy variant sozdaniya objekta 
const option = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(option.name);
console.log(option['name']); // rezhe ispolzuemiy variant notacii

//delete option.name; //udaleniye kakogo-libo svoystva iz objecta

console.log(option);

//perebrat' vse elementi objecta
for (let key in option){
    console.log(`Свойство ${key} имеет значение ${option[key]}`);
}

//perebrat' vse elementi objecta
let counter = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option [key]) {
            console.log(`свойство ${i} имеет значение ${option[key][i]}`)
            counter++;
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
        counter++;
    }
}

//koli4estvo svoystv v objecte
console.log(counter);

console.log(Object.keys(option));
console.log(Object.keys(option).length);

//dobavim povedeniye dlua objecta
const option2 = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {  //metod objecta
        console.log("Yes!");
    }
};

option2.makeTest();

//destructirizaciya objecta(vitaskivaem nuznie nam svoystva)

const {border,bg} = option2.colors;
console.log(border);


//Aaaa

"use strict";

const arr = [1,2,5,8,9];

console.log(arr);

//udalit' posledniy element iz massiva
arr.pop();
console.log(arr);

arr.push(10);  //dobavit' element v konec massiva
console.log(arr);

//perebrat' elementi
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr ) { //ne rabotaet s objecta
    console.log(value);
}

//dlina massiva ne vsegda dlina) posledniy index, plus 1
const arr2 = [1,2,5,8,9];
//arr2[99] = 0;  //tak delat' nelzua)
console.log(arr2.length);
console.log(arr2);

//metod massivov
//4asto ispolzuyetsya dlua perebora. Nedostatok v otli4ii ot obi4nih ciklov - nelzua ostanovit'
arr2.forEach (function (item, i, arr2) {  //call-back funcia
    console.log(`$ {i}: ${item} внутри массива ${arr2}`);

});

//sroku v massiv. naprimer bolwoy spisol tovarov 4erez zapyatuyu - v massiv
const str = prompt ("","");
const products = str.split(",");
console.log(products);
products.sort();  //vsegda sortiruyut kak stroki
console.log(products);
//obratnaya operaciya
console.log(products.join("; "));

//funkcia dlua sortirovki 4isle. peredayetsya v call-back
//opicanie http://algolist.ru/sort/quick_sort.php
products.sort(compareNum);
function compareNum(a,b){
    return a-b;
}
console.log(products);

//metodi ne rabotayut dlua psevdomassivov

//333

"use strict";

//pereda4a po zna4eniyu (primitivnie tipi dannih)
let a = 5;
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
}

const copy = obj;

copy.a = 10;

console.log(obj);
console.log(copy);

const newObj = Object.assign ({}, obj);
newObg.a = 15;
console.log (newObj);

const oldArray = ['a', 'x' 'y'];
const newArray = oldArray.slice();

newArray[0] = 5;
console.log(oldArray);
console.log(newArray);

const video = [ 'youtube', 'vimeo', 'facebook'],
      blogs = ['wordpress', 'twitter', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'instagram'];

console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 8];

log(...num);

const ar = [4,3,0];
const NewAr = [...ar];

const aaa = {
    first: 1,
    second: 2
};

const newA = {...aaa};