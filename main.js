/* 1. Yangi obyekt yarating. Unga "name", "age" va "location" kabi xususiyatlarni qo'shing. 
Keyin, obyektning qiymatlarini konsolda ko'rsating. */
let information = {
    name: "Sanjar",
    age: 19,
    location: "Uzb",

};
console.log(information);
/* 2. Obyekt ichida boshqa obyekt yarating. Masalan, "address" obyektini asosiy obyektda 
joylashtiring, unda "city" va "zipCode" kabi xususiyatlar bo'lsin. */
let user = {
    name: "Sanjar",
    age: 19,
    address:  {
        city: "Toshkent",
        zipCode: 1000,
    }
}
console.log(user.address);
/* 3. Biror obyektda mavjud bo'lgan xususiyatni o'zgartirish, yangi xususiyat qo'shish va 
xususiyatni o'chirish vazifasini bajaring. */
let arr = {
    name: "merc",
    color: "block",
}
arr.color = "yellow";
arr.horsePower = 3000;
delete arr.name;
console.log(arr);
/* 4.  Ushbu obyetkdan home va work qiymatlarini destructuring orqali oling.*/
let user1 = {
    name: "Toshpo'lat",
    age: 30,
    address: {
        city: "Toshkent",
        street: "Amir Temur street",
        zipCode: 10000,
    },
    contact: {
        email: "hamidulloegamberdiyev067@gmail.com",
        phone: {
            home: "123-4567",
            work: "765-4321"
        },
    },
};
let { contact: { phone: { home, work } } } = user1;
console.log(home); 
console.log(work);



