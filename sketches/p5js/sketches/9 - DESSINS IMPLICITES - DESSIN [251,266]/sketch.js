// ----------------------------------------------------
let DESSIN = 261; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=20,RR=1/N;
if (DESSIN==252)
  N=15,RR=3/N;
else if (DESSIN==253)
  N=20,RR=3/N;
else if (DESSIN==254)
  N=60,RR=1/N;
else if (DESSIN_EST([255,256]))
  N=50,RR=1/N;
else if (DESSIN==257)
  N=120,RR=1/N;
else if (DESSIN==258)
  N=160,RR=1/N;
else if (DESSIN==259)
  N=80,RR=1/N;
else if (DESSIN_EST([260,261]))
  N=80,RR=1/N;
else if (DESSIN_EST([262,263,264]))
  N=120,RR=1/N;
else if (DESSIN_EST([265,266]))
  N=160,RR=2/N;
let X,Y,F;

// ----------------------------------------------------
function setup() 
{
  let F=-3.2
  INIT();
  for (let I=0;I<=N;I++)
  {
    X=I/N;
    for (let J=0;J<=N;J++)
    {
      Y=J/N;
      CALCULE_F();
      DESSINE_CERCLES();
    }
    
  }
  TRACE2();
}


function CALCULE_F()
{
  let XX=2*X-1,YY=2*Y-1;
  if (DESSIN==251)
    F=ABS(XX)*ABS(YY);
  else if (DESSIN==252)
  {
    let DI=XX*XX+YY*YY;
    F=ABS(DI-1);
  }
  else if (DESSIN==253)
  {
    let Z=3*XX*YY/(1+3*SQR(XX*XX+YY*YY));
    F=Z-floor(Z);
  }
  else if (DESSIN==254)
  {
    let DI=XX*XX+YY*YY;
    if (DI!=0) XX=XX/DI;
    XX=XX-floor(XX);
    F=ABS(XX);
  }
  else if (DESSIN==255)
  {
    XX=3*X-floor(3*X),YY=3*Y-floor(3*Y);
    XX=2*XX-1,YY=2*YY-1;
    F=.5*(XX*XX+YY*YY);
  }
  else if (DESSIN==256)
  {
    let Z=3*XX-4*YY*YY;
    F=Z-floor(Z);
  }
  else if (DESSIN==257)
  {
    XX=X,YY=Y;
    let LL=0,AA=floor(2*XX),BB=floor(2*YY);
    do
    {
      LL=LL+1;
      AA=floor(2*XX),BB=floor(2*YY);
      XX=2*XX-AA,YY=2*YY-BB;
    }
    while(AA!=BB && LL<5)
    F=1-2*((XX-.5)*(XX-.5)+(YY-.5)*(YY-.5));
    F=F*F;
  }
  else if (DESSIN==258)
  {
    let Z1=10*(XX*XX+5*YY*YY), Z2=10*(5*XX*XX+YY*YY);
    F=(Z1-floor(Z1))*(Z2-floor(Z2));
  }
  else if (DESSIN==259)
  {
    let DI=XX*XX+YY*YY;
    if (DI!=0) XX=2*XX/DI,YY=2*YY/DI;
    XX=2*ABS(XX-floor(XX)-.5),YY=2*ABS(YY-floor(YY)-.5);
    F=int(1.95*SQR(XX*YY));
  }
  else if (DESSIN==260)
  {
    let Z1=5*(XX*XX+10*YY*YY), Z2=5*(10*XX*XX+YY*YY);
    F=(Z1-floor(Z1))*(Z2-floor(Z2));
  }
  else if (DESSIN==261)
  {
    XX=ABS(2*X-1),YY=ABS(2*Y-1);
    let DI=XX*XX+YY*YY;
    if (DI!=0) XX=XX/DI,YY=YY/DI;
    XX=XX-floor(XX),YY=YY-floor(YY);
    F=XX*YY;F=SQR(F);
  }  
  else if (DESSIN==262)
  {
    XX=1.5*(2*X-1),YY=2*(2*Y-1);
    let DI=XX*XX+YY*YY;
    XX=XX*DI,YY=YY*DI;
    F=(XX-floor(XX))*(YY-floor(YY));
    F=SQR(F);
  }
  else if (DESSIN==263)
  {
    let Z=4*SQR(XX*XX+YY*YY)*ABS(3*XX);
    F=Z-floor(Z);
  }  
  else if (DESSIN==264)
  {
    let Z=50*XX*YY;
    F=Z-floor(Z);
  }  
  else if (DESSIN==265)
  {
    let Z1=10*(XX*XX+10*YY*YY), Z2=10*(10*XX*XX+YY*YY);
    F=(Z1-floor(Z1))*(Z2-floor(Z2));
  }  
  else if (DESSIN==266)
  {
    let Z1=5*(XX*XX-10*YY*YY), Z2=5*(10*XX*XX-YY*YY);
    F=ABS((Z1-floor(Z1))*(Z2-floor(Z2)));
  }   
}

function DESSINE_CERCLES()
{
  let XC=NP*(RR+(1-2*RR)*X);
  let YC=NP*(RR+(1-2*RR)*Y);
  let R=int(RR*(1-2*RR)*F*NP)+1;
  for (let L=0;L<=R;L++)
  {
    let AN=2*L*PI/R;
    let XA=XC+R*cos(AN);
    let YA=YC+R*sin(AN);
    if (L==0) LPRINT(`M${int(XA)},${int(YA)}`);
    if (L>0) LPRINT(`D${int(XA)},${int(YA)}`);
  }
}



