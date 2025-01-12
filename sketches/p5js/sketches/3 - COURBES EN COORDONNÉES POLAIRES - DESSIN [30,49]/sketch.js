// ----------------------------------------------------
let DESSIN = 42; // [30,...,49]

// ----------------------------------------------------
let NP = 480,
  PI = Math.PI;
let N = 400;
if (DESSIN_EST([38, 39, 41, 42, 44, 45])) N = 2000;
else if (DESSIN_EST([40])) N = 1000;
else if (DESSIN_EST([43])) N = 3000;
else if (DESSIN_EST([46, 47])) N = 6000;
else if (DESSIN_EST([48, 49])) N = 3600;

// ----------------------------------------------------
function setup() {
  INIT();

  for (let I = 0; I < N; I++) {
    let T = I / N;

    let A = 2 * PI * T;
    let R = T;
    if (DESSIN == 31) {
      A = 20 * PI * T;
      R = exp(-10 * T);
    } else if (DESSIN == 32) {
      A = 10 * PI * T;
      R = exp(-10 * T);
    } else if (DESSIN == 33) {
      A = 10 * PI * T;
      R = T;
    } else if (DESSIN == 34) {
      A = 2 * PI * (1 + cos(2 * PI * T));
      R = 0.5 * (1 + sin(2 * PI * T));
    } else if (DESSIN == 35) {
      A = PI * sin(2 * PI * T);
      R = T;
    } else if (DESSIN == 36) {
      A = PI * sin(6 * PI * T);
      R = T;
    } else if (DESSIN == 37) {
      A = PI * sin(12 * PI * T) * sin(PI * T);
      R = T;
    } else if (DESSIN == 38) {
      A = ((3 * PI) / 4) * sin(30 * PI * T) * sin(PI * T);
      R = T;
    } else if (DESSIN == 39) {
      A = ((3 * PI) / 2) * sin(50 * PI * T) * sin(PI * T);
      R = T * T;
    } else if (DESSIN == 40) {
      A = 2 * PI * T;
      R = 0.5 * (1 + sin(50 * PI * T) * sin(2 * PI * T));
    } else if (DESSIN == 41) {
      A = 2 * PI * T;
      R = 0.5 * (1 + sin(50 * PI * T) * sin(4 * PI * T));
    } else if (DESSIN == 42) {
      A = 6 * PI * T;
      R = (1 - T) * 0.5 * (1.5 + 0.5 * sin(200 * PI * T) * sin(8 * PI * T));
    } else if (DESSIN == 43) {
      A = 2 * PI * T;
      R = 0.5 * (1.2 + 0.8 * sin(200 * PI * T) * sin(6 * PI * T));
    } else if (DESSIN == 44) {
      A = 2 * PI * T;
      R = 0.5 * (0.8 + 1.2 * sin(100 * PI * T) * sin(3 * PI * T));
    } else if (DESSIN == 45) {
      A = 2 * PI * T;
      R = 0.5 * (0.6 + 1.4 * sin(100 * PI * T) * sin(8 * PI * T));
    } else if (DESSIN == 46) {
      A = 2 * PI * T;
      R =
        0.5 *
        (1.2 + 0.8 * sin(300 * PI * T) * sin(30 * PI * T) * sin(3 * PI * T));
    } else if (DESSIN == 47) {
      A = 2 * PI * T;
      R =
        0.5 *
        (1.2 + 0.8 * sin(300 * PI * T) * sin(16 * PI * T) * sin(4 * PI * T));
    } else if (DESSIN == 48) {
      A = 2 * PI * T + sin(12 * PI * T) / 3;
      R = 0.5 * (1 + sin(360 * PI * T) * sin(12 * PI * T));
    } else if (DESSIN == 49) {
      A = 2 * PI * T + sin(16 * PI * T);
      R = 0.5 * (1.1 + 0.9 * sin(360 * PI * T) * sin(8 * PI * T));
    }

    let X = R * cos(A),
      Y = R * sin(A);
    let X_ = int((NP / 2) * (1 + X)),
      Y_ = int((NP / 2) * (1 + Y));
    if (I == 0) LPRINT(`M${X_},${Y_}`);
    if (I > 0) LPRINT(`D${X_},${Y_}`);
  }
  TRACE2();
}
