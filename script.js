// 1. Создать два усложненых объекта
// 2. Соеденить в один новый объект Не мутируя старые
// 3. Получить все ключи в новую переменную ключи
// 4. Получить все значени в новую переменную значения
// 5. Отфильтровать все данные по их типу строки в строки цифры в цифры



// 1. Создать два усложненых объекта
let boy = {
  name: "Daniil",
  age: 5,
  year: 2019,
};

let girl = {
  name: "Darina",
  age: 2,
  year: 2023,
};


// 2. Соеденить в один новый объект Не мутируя старые
let child = {
  boy: { ...boy },
  girl: { ...girl },
};
console.log(child);


// 3. Получить все ключи в новую переменную ключи

let keys = Object.keys(child.boy).concat(Object.keys(child.girl));
console.log(keys);


// 4. Получить все значени в новую переменную значения

let values = Object.values(child.boy).concat(Object.values(child.girl));
console.log(values)


// 5. Отфильтровать все данные по их типу строки в строки цифры в цифры

let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
};
console.log(types);

// console.log(
//     // Object.assign({}, {boy, girl}),
//     Object.entries(child),
//     Object.keys(child),
//     Object.values(child.boy).concat(Object.keys(child.girl)),
// );