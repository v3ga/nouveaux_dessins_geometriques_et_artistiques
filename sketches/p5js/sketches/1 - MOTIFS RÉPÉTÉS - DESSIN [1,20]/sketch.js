// DESSIN 9   : added a scale / translate for the pattern to fit
// DESSIN 13  : same

// ----------------------------------------------------
let DESSIN = 7;

// ----------------------------------------------------
let NP = 480,
  PI = Math.PI;
let K = 5,
  M = 2,
  R = 1;
let T = Array(),
  V = Array(),
  X1 = Array(),
  Y1 = Array(),
  X2 = Array(),
  Y2 = Array(),
  Z,
  H = 0;
let INIT_PARAMS, TRANSFORME;

// ----------------------------------------------------
if (DESSIN == 1) {
  INIT_PARAMS = (_) => {
    (X1 = [0.1, 0.15, 0]), (Y1 = [0, 0.2, 0.15]), (T = [2, 2, 4, 3, 3]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return [(1 - 2 * E) * XX, YY];
    },
    (XX, YY, E) => {
      return [XX, (1 - 2 * E) * YY];
    },
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 8);
    },
    (XX, YY, E) => {
      return [XX + (E - 1) / 2, YY];
    },
    (XX, YY, E) => {
      return [XX, YY + (E - 1) / 2];
    },
  ];
} else if (DESSIN == 2) {
  INIT_PARAMS = (_) => {
    (K = 6), (M = 2);
    (X1 = [0.1, 0.15, 0]), (Y1 = [0, 0.2, 0.15]), (T = [2, 2, 4, 7, 7, 2]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return [(1 - 2 * E) * XX, YY];
    },
    (XX, YY, E) => {
      return [XX, (1 - 2 * E) * YY];
    },
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 8);
    },
    (XX, YY, E) => {
      return [XX / 2 + (E - 3) / 4, YY / 2];
    },
    (XX, YY, E) => {
      return [XX, YY + (E - 3) / 4];
    },
    (XX, YY, E) => {
      return [XX + E / 8, YY + E / 8];
    },
  ];
} else if (DESSIN == 3) {
  INIT_PARAMS = (_) => {
    (K = 6), (M = 2);
    (X1 = [0.1, 0.15, 0]), (Y1 = [0, 0.2, 0.15]), (T = [2, 2, 4, 5, 5, 4]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return [(1 - 2 * E) * XX, YY];
    },
    (XX, YY, E) => {
      return [XX, (1 - 2 * E) * YY];
    },
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 8);
    },
    (XX, YY, E) => {
      return [XX / 2 + (E - 2) / 4, YY / 2];
    },
    (XX, YY, E) => {
      return [XX, YY + (E - 2) / 4];
    },
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 8);
    },
  ];
} else if (DESSIN == 4) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 4), (R = SQR(3) / 2);
    (X1 = [0, -R, 0, R, 0]), (Y1 = [0, 0.5, 1, 0.5, 0]), (T = [3, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 3);
    },
    (XX, YY, E) => {
      return [(E - 2) * R + XX, (E - 2) * 1.5 + YY];
    },
    (XX, YY, E) => {
      return [
        (-(E - 2) * R + XX) / 6 + 0.001,
        ((E - 2) * 1.5 + YY) / 6 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 5) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 3);
    (X1 = [-1, -1, 0, 1, 0]), (Y1 = [1, 3, 0, 3, 0]), (T = [4, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 4);
    },
    (XX, YY, E) => {
      return [(E - 2) * 4 + XX, (E - 2) * 2 + YY];
    },
    (XX, YY, E) => {
      return [
        (-2 * (E - 2) + XX) / 16 + 0.001,
        (4 * (E - 2) + YY) / 16 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 6) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 5);
    (X1 = [0, -1, -1, 1, 1, 0]), (Y1 = [0, 1, 3, 3, 1, 0]), (T = [4, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 4);
    },
    (XX, YY, E) => {
      return [(E - 2) * 4 + XX, (E - 2) * 2 + YY];
    },
    (XX, YY, E) => {
      return [
        (-2 * (E - 2) + XX) / 16 + 0.001,
        (4 * (E - 2) + YY) / 16 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 7) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 5), (R = SQR(3));
    (X1 = [0, 2, 2.5, 2, 1, 0]),
      (Y1 = [0, 0, R / 2, R, R, 0]),
      (T = [64, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 6);
    },
    (XX, YY, E) => {
      return [(E - 2) * 4.5 + XX, (-(E - 2) * R) / 2 + YY];
    },
    (XX, YY, E) => {
      return [
        (-(E - 2) * 1.5 + XX) / 16 + 0.001,
        ((E - 2) * R * 2.5 + YY) / 16 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 8) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 1);
    (X1 = [-1, 2]), (Y1 = [3, 0]), (T = [4, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 4);
    },
    (XX, YY, E) => {
      return [(E - 2) * 4 + XX, (E - 2) * 2 + YY];
    },
    (XX, YY, E) => {
      return [
        (-2 * (E - 2) * 1.5 + XX) / 16 + 0.001,
        (4 * (E - 2) + YY) / 16 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 9) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 2), (R = SQR(3) / 2);
    (X1 = [-R, 0, 0]), (Y1 = [0.5, 0.5, 0]), (T = [6, 9, 9]);
    INIT_PARAMS_COMMUN();
    translate(0, 48);
    scale(1, 0.8);
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 6);
    },
    (XX, YY, E) => {
      return [(E - 4) * R + XX, (E - 4) * 1.5 + YY];
    },
    (XX, YY, E) => {
      return [(-(E - 4) * R + XX) / 9 + 0.001, (E - 4 + YY) / 9 + 0.001];
    },
  ];
} else if (DESSIN == 10) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 8), (R = SQR(3));
    for (let I = 0; I <= M; I++) {
      let W = (2 * I * PI) / M;
      X1[I] = cos(W);
      Y1[I] = 0.2 + sin(W) / 3;
    }
    T = [12, 7, 7];
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 12);
    },
    (XX, YY, E) => {
      return [(E - 3) / 6 + XX / 12, YY / 12];
    },
    (XX, YY, E) => {
      return [1.3 * ((E % 2) / 12 + XX), 1.3 * ((R * (E - 2)) / 12 + YY)];
    },
  ];
} else if (DESSIN == 11) {
  INIT_PARAMS = (_) => {
    (K = 4), (M = 2);
    (X1 = [-1, 0, 2]), (Y1 = [2, 3, 0]), (T = [2, 4, 7, 7]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return [(1 - 2 * E) * XX, YY];
    },
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 4);
    },
    (XX, YY, E) => {
      return [(E - 3) * 4 + XX, YY];
    },
    (XX, YY, E) => {
      return [XX / 15 + 0.001, ((E - 3) * 4 + YY) / 15 + 0.001];
    },
  ];
} else if (DESSIN == 12) {
  INIT_PARAMS = (_) => {
    (K = 4), (M = 2), (R = SQR(3) / 2);
    (X1 = [-1, -R / 3, 2 * R]), (Y1 = [0, 2 / 3, 2]), (T = [6, 2, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 6);
    },
    (XX, YY, E) => {
      return [XX, 1 - (1 - 2 * E) * (1 - YY)];
    },
    (XX, YY, E) => {
      return [(E - 2) * R * 2 + XX, (E - 2) * 3 + YY];
    },
    (XX, YY, E) => {
      return [
        (-(E - 2) * R * 2 + XX) / 10 + 0.001,
        ((E - 2) * 3 + YY) / 10 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 13) {
  INIT_PARAMS = (_) => {
    (K = 4), (M = 4), (R = SQR(3) / 2);
    (X1 = [0, -R, 0, R, 0]), (Y1 = [0, 0.5, 0.25, 0.5, 0]), (T = [3, 2, 5, 5]);
    INIT_PARAMS_COMMUN();
    translate(0, 60);
    scale(1, 0.8);
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 3);
    },
    (XX, YY, E) => {
      return [XX, 1 / 2 - (1 - 2 * E) * (1 / 2 - YY)];
    },
    (XX, YY, E) => {
      return [(E - 2) * R + XX, (E - 2) * 1.5 + YY];
    },
    (XX, YY, E) => {
      return [
        (-(E - 2) * R + XX) / 6 + 0.001,
        ((E - 2) * 1.5 + YY) / 6 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 14) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 4), (R = SQR(3) / 2);
    (X1 = [0, -0.5, 0, 0.5, 0]), (Y1 = [0, 0.5, 1, 0.5, 0]), (T = [3, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 3);
    },
    (XX, YY, E) => {
      return [(E - 2) * R + XX, (E - 2) * 1.5 + YY];
    },
    (XX, YY, E) => {
      return [
        (-(E - 2) * R + XX) / 5 + 0.001,
        ((E - 2) * 1.5 + YY) / 5 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 15) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 16), (R = SQR(3));
    for (let I = 0; I <= M; I++) {
      let W = (2 * I * PI) / M / 5;
      X1[I] = cos(W * 5);
      Y1[I] = 1 + sin(3 * W) / 2;
    }
    T = [6, 7, 7];
    INIT_PARAMS_COMMUN();
    Z[0] = 1;
    Z[4] = 1;
    Z[9] = 1;
    Z[12] = 1;
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 6);
    },
    (XX, YY, E) => {
      return [(E - 3) / 6 + XX / 12, YY / 12];
    },
    (XX, YY, E) => {
      return [1.3 * ((E % 2) / 12 + XX), 1.3 * ((R * (E - 2)) / 12 + YY)];
    },
  ];
} else if (DESSIN == 16) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 16), (R = SQR(3));
    for (let I = 0; I <= M; I++) {
      let W = (2 * I * PI) / M / 10;
      X1[I] = cos(W * 5);
      Y1[I] = 1 + sin(3 * W);
    }
    T = [6, 7, 7];
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 6);
    },
    (XX, YY, E) => {
      return [(E - 3) / 6 + XX / 12, YY / 12];
    },
    (XX, YY, E) => {
      return [1.3 * ((E % 2) / 12 + XX), 1.3 * ((R * (E - 2)) / 12 + YY)];
    },
  ];
} else if (DESSIN == 17) {
  INIT_PARAMS = (_) => {
    (K = 3), (M = 4);
    (X1 = [0, 0, 3, 2, 0]), (Y1 = [0, 2, 3, 0, 0]), (T = [4, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 4);
    },
    (XX, YY, E) => {
      return [(E - 2) * 4 + XX, (E - 2) * 2 + YY];
    },
    (XX, YY, E) => {
      return [
        (-2 * (E - 2) + XX) / 16 + 0.001,
        (4 * (E - 2) + YY) / 16 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 18) {
  INIT_PARAMS = (_) => {
    (K = 4), (M = 3), (R = SQR(3) / 2);
    (X1 = [-R, 0, 0, R, 0]),
      (Y1 = [0.5, 0.75, 0.25, 0.5, 0]),
      (T = [3, 2, 7, 7]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 3);
    },
    (XX, YY, E) => {
      return [XX, 1 / 2 - (1 - 2 * E) + (1 / 2 - YY)];
    },
    (XX, YY, E) => {
      return [(E - 3) * R + XX, (E - 3) * 1.5 + YY];
    },
    (XX, YY, E) => {
      return [
        (-(E - 3) * R + XX) / 6 + 0.001,
        ((E - 3) * 1.5 + YY) / 6 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 19) {
  INIT_PARAMS = (_) => {
    (K = 4), (M = 1), (R = SQR(3) / 2);
    (X1 = [-R / 2, R, 0]), (Y1 = [-0.25, 1.25, 0]), (T = [3, 2, 5, 5]);
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return ROTATE(XX, YY, (2 * E * PI) / 3);
    },
    (XX, YY, E) => {
      return [XX, 1 - (1 - 2 * E) * (1 - YY)];
    },
    (XX, YY, E) => {
      return [(E - 2) * R * 2 + XX, (E - 2) * 3 + YY];
    },
    (XX, YY, E) => {
      return [
        (-(E - 2) * R * 2 + XX) / 10 + 0.001,
        ((E - 2) * 3 + YY) / 10 + 0.001,
      ];
    },
  ];
} else if (DESSIN == 20) {
  INIT_PARAMS = (_) => {
    (K = 4), (M = 12);
    for (let I = 0; I <= M; I++) {
      let W = (2 * I * PI) / M;
      X1[I] = cos(W);
      Y1[I] = sin(W);
    }
    T = [6, 6, 6, 6];
    INIT_PARAMS_COMMUN();
  };
  TRANSFORME = [
    (XX, YY, E) => {
      return [-1 + pow(0.5, E) * (1 + XX), YY * pow(0.5, E)];
    },
    (XX, YY, E) => {
      return [1 + pow(0.5, E) * (-1 + XX), YY * pow(0.5, E)];
    },
    (XX, YY, E) => {
      return [pow(0.5, E) * XX, -1 + pow(0.5, E) * (1 + YY)];
    },
    (XX, YY, E) => {
      return [pow(0.5, E) * XX, 1 + pow(0.5, E) * (-1 + YY)];
    },
  ];
}

// ----------------------------------------------------
function setup() {
  INIT();
  INIT_PARAMS();

  while (H != 0 || V[0] != T[0]) {
    if (V[H] == T[H]) {
      V[H] = 0;
      H -= 1;
      V[H] += 1;
    } else {
      if (H != K) {
        H += 1;
        V[H] = 0;
      } else {
        for (let I = 0; I <= M; I++) {
          X2[I] = X1[I];
          Y2[I] = Y1[I];
        }
        for (let I = 1; I <= K; I++) {
          let E = V[K - I];
          for (let L = 0; L <= M; L++)
            [X2[L], Y2[L]] = TRANSFORME[I - 1](X2[L], Y2[L], E);
        }
        DESSINE();
        H -= 1;
        V[H] += 1;
      }
    }
  }
  TRACE2();
}

// ----------------------------------------------------
function ROTATE(XX, YY, V) {
  let CO = cos(V),
    SI = sin(V);
  return [CO * XX - SI * YY, CO * YY + SI * XX];
}

// ----------------------------------------------------
function INIT_PARAMS_COMMUN() {
  Z = Array(M + 1).fill(0);
  Z[0] = 1;
  for (let I = 0; I <= K; I++) V[I] = T[I];
  for (let I = 0; I <= K; I++) {
    T[K - 1 - I] = V[I];
    V[I] = 0;
  }
  T[K] = 1;
}

// ----------------------------------------------------
function DESSINE() {
  for (let L = 0; L <= M; L++) {
    let X_ = floor((NP * (X2[L] + 1)) / 2);
    let Y_ = floor((NP * (Y2[L] + 1)) / 2);
    if (Z[L] == 1) LPRINT(`M${X_},${Y_}`);
    if (Z[L] == 0) LPRINT(`D${X_},${Y_}`);
  }
}
