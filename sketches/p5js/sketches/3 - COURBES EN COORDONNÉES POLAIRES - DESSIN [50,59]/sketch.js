/*
QMAX : variable added to handle the loop depending on the drawing
*/

// ----------------------------------------------------
let DESSIN = 50; // [50,...,59]

// ----------------------------------------------------
let NP = 480,
  PI = Math.PI;
let N = 400;
let QMAX = 15;
if (DESSIN_DANS([50])) N = 500;
else if (DESSIN_DANS([51])) {
  N = 100;
  QMAX = 10;
} else if (DESSIN_DANS([52])) {
  N = 500;
  QMAX = 20;
} else if (DESSIN_DANS([53, 54, 55, 57])) {
  N = 300;
} else if (DESSIN_DANS([56])) {
  N = 1000;
  QMAX = 5;
} else if (DESSIN_DANS([58])) {
  N = 300;
  QMAX = 30;
} else if (DESSIN_DANS([59])) {
  N = 1000;
  QMAX = 15;
}

// ----------------------------------------------------
function setup() {
  INIT();

  for (let Q = 1; Q < QMAX; Q++) {
    for (let I = 0; I < N; I++) {
      let T = I / N;

      let A = 2 * PI * T,
        R = T;
      if (DESSIN == 50) {
        A = 2 * PI * (1 + (Q / 20) * cos(4 * PI * T));
        R = 0.5 * (1 + (Q / 20) * sin(2 * PI * T));
      } else if (DESSIN == 51) {
        A = PI * (1 + (Q / 10) * cos(2 * PI * T));
        R = 0.5 * (1 + (Q / 10) * sin(2 * PI * T));
      } else if (DESSIN == 52) {
        A = 2 * PI * (1 + (Q / 20) * cos(4 * PI * T));
        R = 0.5 * (1 + (Q / 20) * sin(4 * PI * T));
      } else if (DESSIN == 53) {
        A = 2 * PI * T + ((PI / 6) * Q) / 15;
        R =
          0.5 * (1.4 + 0.6 * cos(12 * PI * T) * cos(4 * PI * T)) * pow(0.9, Q);
      } else if (DESSIN == 54) {
        A = 2 * PI * T;
        R =
          0.5 * (1.1 + 0.9 * cos(16 * PI * T) * cos(4 * PI * T)) * pow(0.8, Q);
      } else if (DESSIN == 55) {
        A = 2 * PI * T + ((PI / 2) * Q) / 15;
        R = 0.5 * (0.5 + 1.5 * cos(16 * PI * T)) * pow(0.85, Q);
      } else if (DESSIN == 56) {
        A = 2 * PI * T;
        R =
          0.5 * (1.2 + 0.8 * cos(50 * PI * T) * cos(8 * PI * T)) * pow(0.85, Q);
      } else if (DESSIN == 57) {
        A = 2 * PI * T + ((PI / 6) * Q) / 15;
        R =
          0.5 * (1.3 + 0.7 * cos(24 * PI * T) * cos(4 * PI * T)) * pow(0.9, Q);
      } else if (DESSIN == 58) {
        A = 2 * PI * T;
        R =
          0.5 * (1.6 + 0.4 * cos(36 * PI * T) * cos(6 * PI * T)) * pow(0.95, Q);
      } else if (DESSIN == 59) {
        A = 2 * PI * T;
        R =
          0.5 *
          (1.2 + 0.8 * cos(150 * PI * T) * cos(6 * PI * T)) *
          pow(0.75, Q);
      }

      let X = R * cos(A),
        Y = R * sin(A);
      let X_ = int((NP / 2) * (1 + X)),
        Y_ = int((NP / 2) * (1 + Y));
      if (I == 0) LPRINT(`M${X_},${Y_}`);
      if (I > 0) LPRINT(`D${X_},${Y_}`);
    }
  }

  TRACE();
}
