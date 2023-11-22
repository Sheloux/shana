function noise(x) {
    const X = Math.floor(x) & 255;
    x -= Math.floor(x);
    const u = fade(x);
    const A = p[X];
    const B = p[X + 1];
  
    return lerp(u, grad(p[A], x), grad(p[B], x - 1));
  }
  
  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  
  function lerp(t, a, b) {
    return a + t * (b - a);
  }
  
  function grad(hash, x) {
    const h = hash & 15;
    const u = h < 8 ? x : 0;
    return ((h & 1) === 0 ? u : -u);
  }
  
  const p = new Array(512);
  for (let i = 0; i < 512; i++) {
    p[i] = Math.floor(Math.random() * 255);
  }
  
  // You can use the noise() function like this:
//   const value = noise(x);
  