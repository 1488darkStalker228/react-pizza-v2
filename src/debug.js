/*  const categories = [
  { title: 'Все', categoryId: 0 },
  { title: 'Мясные', categoryId: 1 },
  { title: 'Вегетарианская', categoryId: 2 },
  { title: 'Гриль', categoryId: 3 },
  { title: 'Острые', categoryId: 4 },
  { title: 'Закрытые', categoryId: 5 },
]*/

const obj = { a: 1, b: 2 }
const l = 228

function f({ a, b }, api) {
  console.log(`${a} Это парамсы`)
  console.log(`${b} Это апи`)
}

function f1(obj, api) {
  console.log(obj)
  console.log(api)
}

f1(obj, l)

// Деструктуризация параметров идёт при объявлении функции;
// При вызове функции и пробросу туда объекта, объект прокидывается вот так f(obj);
