import * as config from "./config.js";

import * as task3 from "./tasks/task3.js";
import * as task1 from "./tasks/task1.js";

var app = new Vue({
  el: "#app",

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

    codes: config.codes
  },

  methods: {
    primeNumberButton: function () {
      this.primeNumber.output = task1.isPrimeNumber(this.primeNumber.n)
        ? "Простое"
        : "Составное";
    },

    continuedFractionButton: function () {
      if (this.continuedFraction.d == 0)
        this.continuedFraction.output = "Неверные данные";
      else
        this.continuedFraction.output = task3
          .continuedFraction(this.continuedFraction.n, this.continuedFraction.d)
          .join(" ");
    },

    convergentsButton: function () {
      let arrayF = this.convergents.f.split(" ");
      arrayF = arrayF.map((f) => new Number(f));

      if (arrayF.length < this.convergents.k)
        this.convergents.output = `Максимальное значение коэф. ${arrayF.length}`;
      else {
        let result = task3.convergents(arrayF, this.convergents.k);
        this.convergents.output =
          isNaN(result.n) || isNaN(result.d)
            ? `Неверные данные`
            : `${result.n} / ${result.d}`;
      }
    },
  },
});
