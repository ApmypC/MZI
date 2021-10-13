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
