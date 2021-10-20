console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarBugun = 9.30
let dolarDun = 9.20


{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2 
// euroDun = 11 ** const ile atanan veriyi değiştiremezsin.

console.log(euroDun)

// array
// camelCasing
// array içerisinde herşey olabilir, string, number, array
// örnek : https://jsonplaceholder.typicode.com/users 

let konutKredileri = ["Konut kredisi", "Emlak konut kredisi", "Kamu konut kredisi", "Özel konut kredisi", "Emekli konut kredisi"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length;i++){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")


console.log(konutKredileri)

