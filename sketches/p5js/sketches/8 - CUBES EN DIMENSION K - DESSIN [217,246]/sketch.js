// ----------------------------------------------------
let DESSIN = 222; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let K=3;
if (DESSIN==218) K=3;
else if (DESSIN==219) K=4;
else if (DESSIN==220) K=5;
else if (DESSIN==221) K=6;
else if (DESSIN==222) K=7;
else if (DESSIN==223) K=8;
else if (DESSIN==224) K=9;
else if (DESSIN==225) K=4;
else if (DESSIN==226) K=5;
else if (DESSIN==227) K=6;
else if (DESSIN==228) K=7;
else if (DESSIN==229) K=8;
else if (DESSIN==230) K=2;
else if (DESSIN==231) K=3;
else if (DESSIN==232) K=4;
else if (DESSIN==233) K=5;
else if (DESSIN==234) K=6;
else if (DESSIN==235) K=7;
else if (DESSIN==236) K=8;
else if (DESSIN==237) K=3;
else if (DESSIN==238) K=5;
else if (DESSIN==239) K=7;
else if (DESSIN==240) K=8;
else if (DESSIN==241) K=9;
else if (DESSIN==242) K=4;
else if (DESSIN==243) K=5;
else if (DESSIN==244) K=6;
else if (DESSIN==245) K=7;
else if (DESSIN==246) K=6;

let X=Array(9),Y=Array(9),D=Array(10);

// ----------------------------------------------------
function setup() 
{
  INIT();
  X[0]=1;Y[0]=0;X[1]=0;Y[1]=1;X[2]=1/2;Y[2]=1/2;X[3]=-1/4;Y[3]=1/4;
  X[4]=1/8;Y[4]=3/8;X[5]=-1/16;Y[5]=5/16;X[6]=3/32;Y[6]=1/32;
  X[7]=-1/64;Y[7]=7/64;X[8]=3/128;Y[8]=11/128;X[9]=-3/256;Y[9]=13/256;
  if (DESSIN_EST([220,221,222,223,224])){ translate(0,68);scale(1,0.9) }
  else if (DESSIN_EST([225,226,227,228,229]))
  {
    X[0]=1;Y[0]=0;X[1]=0;Y[1]=1;X[2]=1/2;Y[2]=1/2;X[3]=1/4;Y[3]=1/8;
    X[4]=-1/8;Y[4]=1/4;X[5]=1/16;Y[5]=3/16;X[6]=1/32;Y[6]=-1/64;
    X[7]=1/64;Y[7]=1/32;X[8]=3/128;Y[8]=1/128;
  }
  else if (DESSIN_EST([230,231,232,233,234,235,236]))
  {
    for (let I=0;I<=K-1;I++){
      let W=PI*(I+.5)/K;
      X[I]=3*cos(W)/K;
      Y[I]=3*sin(W)/K;
    }
  }
  else if (DESSIN_EST([237,238,239,240,241]))
  {
    for (let I=0;I<=K-1;I++){
      let W=PI*I/K;
      X[I]=cos(W)/(I+1);
      Y[I]=sin(W)/(I+1);
    }
  }
  else if (DESSIN_EST([242,243,244,245,246]))
  {
    for (let I=0;I<=K-1;I++){
      let W=PI*I/(K-1);
      X[I]=3*cos(W)/K;
      Y[I]=3*sin(W)/K;
    }
  }
  let N=pow(2,K)-1;
  for (let I=0;I<=N;I++)
  {
    let H=0,II=I;
    while(H<=K)
    {
      D[H]=II%2;H=H+1;II=int(II/2);
    }
    let X1=1/6,Y1=1/20;
    if (DESSIN_EST([225,226,227,228,229])){ X1=.10,Y1=.1 }
    else if (DESSIN_EST([230,231,232,233,234,235,236])){ X1=.5,Y1=0.05 }
    else if (DESSIN_EST([237,238,239,240,241])){ X1=.15,Y1=.1 }
    else if (DESSIN_EST([242,243,244,245,246])){ X1=.5,Y1=.15 }
    for (let L=0;L<=K-1;L++)
    {
      if (D[L]==1) { X1=X1+X[L]*.45; Y1=Y1+Y[L]*.45; } 
    }
    for (let Q=0;Q<=K-1;Q++)
    {
      let x=int(NP*X1), y=int(NP*Y1); 
      LPRINT(`M${int(NP*X1)},${int(NP*Y1)}`);
      if (D[Q]!=1)
      {
        let X2=X1+X[Q]*.45,Y2=Y1+Y[Q]*.45;
        LPRINT(`D${int(NP*X2)},${int(NP*Y2)}`);
      }
    }
  }
  TRACE2();
}



