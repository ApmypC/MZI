function gcd(a, b) {
  while (a != b) {
    if (a < b) {
      let tmp = a;
      a = b;
      b = tmp;
    }

    a -= b;
  }

  return a;
}

/*****************************************************/

// 1
export function isPrimeNumber(num) {
  for (let i = 2; i < Math.sqrt(num); i++)
    if (num % i == 0) return false;
  return true;
}

// 2
export function eulerFunction(n) {
  var result = n;

  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i == 0) {
      while (n % i == 0) n /= i;
      result -= result / i;
    }

  if (n > 1) result -= result / n;

  return result;
}

// 3
export function congruence(a, b, m) {
  let d = gcd(a, b);
  let x = new Array();

  if (b % d === 0) {
    if (d === 1) {
      a %= m;
      b %= m;

      x.push((Math.pow(a, eulerFunction(m) - 1) * b) % m);
    } else {
      if (d != 1) {
        a /= d;
        b /= d;
        m /= d;
      }

      while (d > 0) {
        x.push((m * --d) + a);
      }
    }
  }

  return x;
}

// 6
export function continuedFraction(n, d) {
  let output = new Array();

  while (d != 0) {
    let r = n % d;
    output.push((n - r) / d);
    n = d;
    d = r;
  }

  return output;
}

// 6
export function convergents(f, k) {
  let n = f[k - 1];
  let d = 1;

  while (k > 1) {
    let r = d;
    
    d = n;
    k--;
    n = f[k - 1] * n + r;
  }

  return { n, d };
}
