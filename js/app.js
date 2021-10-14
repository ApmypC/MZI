import * as config from './config.js';

import * as tasks from './tasks.mjs';

var app = new Vue({
  el: '#app',

  data: {
    pages: config.navs,
    activePage: 1,

    continuedFraction: {
      n: null,
      d: null,
      output: null,
    },

    convergents: {
      f: null,
      k: null,
      output: null,
    },

    primeNumber: {
      n: null,
      output: null,
    },

    eulerFunction: {
      n: null,
      output: null,
    },

    congruence: {
      a: null,
      b: null,
      m: null,
      output: null,
    },

    codes: config.codes,
  },

  methods: {
    primeNumberButton: function () {
      this.primeNumber.output = tasks.isPrimeNumber(this.primeNumber.n)
        ? 'Простое'
        : 'Составное';
    },

    eulerFunctionButton: function () {
      this.eulerFunction.output = tasks.eulerFunction(this.eulerFunction.n);
    },

    continuedFractionButton: function () {
      if (this.continuedFraction.d == 0)
        this.continuedFraction.output = 'Неверные данные';
      else
        this.continuedFraction.output = tasks
          .continuedFraction(this.continuedFraction.n, this.continuedFraction.d)
          .join(' ');
    },

    convergentsButton: function () {
      let arrayF = this.convergents.f.split(' ');
      arrayF = arrayF.map(f => new Number(f));

      if (arrayF.length < this.convergents.k)
        this.convergents.output = `Максимальное значение коэф. ${arrayF.length}`;
      else {
        let result = tasks.convergents(arrayF, this.convergents.k);
        this.convergents.output =
          isNaN(result.n) || isNaN(result.d)
            ? `Неверные данные`
            : `${result.n} / ${result.d}`;
      }
    },

    congruenceButton: function () {
      let a = new Number(this.congruence.a);
      let b = new Number(this.congruence.b);
      let m = new Number(this.congruence.m);

      let k = tasks.congruence(a, b, m).join(', ');
      this.congruence.output =
        k.length == 1
          ? `x = ${k} (mod ${m})`
          : `x = k (mod ${m}), k = { ${k} }`;
    },
  },
});
