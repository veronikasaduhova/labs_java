// створення 3-х змінних використовуючи тип var - let - const
var n1 = 10;
let n2 = 20;
const n3 = 30;

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3); 

// Створення об'єкта
let student = {
    name: "Вероніка",
    age: 18,
    isStudent: true
}
// Додавання нового поля 
student.university = "КРФК КАІ"
console.log(student);

//Зміна типу змінної let 
n2 = "Javascript";
console.log(typeof n2);

//Змінити cost 
try{
    n3 = false;
} catch (error){
    console.log(Помилка при змінні const)
}