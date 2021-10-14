export const navs = [
  {
    name: "Простое число",
    number: 1,
  },
  {
    name: "Функция Эйлера",
    number: 2,
  },
  {
    name: "Сравнение первой степени",
    number: 3,
  },
  {
    name: "Китайская теорема об остатках",
    number: 4,
  },
  {
    name: "Символ Лежандра и Якоби",
    number: 5,
  },
  {
    name: "Цепная дробь",
    number: 6,
  },
];

export const codes = {
  task1: `
  function isPrimeNumber(num) {
    for (let i = 2; i < Math.sqrt(num); i++)
      if (num % i == 0) return false;
    return true;
  }`,

  task2: `
  function eulerFunction(n) {
    var result = n;
  
    for (let i = 2; i <= Math.sqrt(n); i++)
      if (n % i == 0) {
        while (n % i == 0) n /= i;
        result -= result / i;
      }
  
    if (n > 1) result -= result / n;
  
    return result;
  }`,

  task6: `
  function continuedFraction(n, d) {
    let output = new Array();
  
    while (d != 0) {
      let r = n % d;
      output.push((n - r) / d);
      n = d;
      d = r;
    }
  
    return output;
  }`,

  task6_2: `
  function convergents(f, k) {
    let n = f[k - 1];
    let d = 1;
  
    while (k > 1) {
      let r = d;
      
      d = n;
      k--;
      n = f[k - 1] * n + r;
    }
  
    return { n, d };
  }`,
};
