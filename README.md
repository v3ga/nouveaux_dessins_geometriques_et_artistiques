# Nouveaux dessins géométriques et artistiques avec votre micro-ordinateur

👉 [https://editor.p5js.org/v3ga/collections/ALPCSgG3E](https://editor.p5js.org/v3ga/collections/Q6wJic-1k)

This repository presents programs written by french mathematician and computer scientist [Jean-Paul Delahaye](https://fr.wikipedia.org/wiki/Jean-Paul_Delahaye) in the book *"Nouveaux dessins géométriques et artistiques avec votre micro-ordinateur"* published in 1985 for the [Eyrolles](https://www.eyrolles.com/) french publishing house.<br />

The programs were originally programmed with Microsoft Basic for [Canon X-07](https://en.wikipedia.org/wiki/Canon_X-07) computer, outputs were drawn on a [Canon X710 plotter](http://pocket.free.fr/html/canon/x-710_f.html). They were recoded with [p5.js](https://p5js.org/), the online collection can be found [here](https://editor.p5js.org/v3ga/collections/ALPCSgG3E). You can click on each thumb to jump to the corresponding sketch. Be sure to edit the *DESSIN* variable in the program header.

I contacted Jean-Paul Delahaye who gave me access to links for downloading scans of the two editions of “Dessins géométriques”. He kindly allowed me to share them.<br />
👉 [Dessins géométriques et artistiques avec votre micro-ordinateur](https://nextcloud.univ-lille.fr/index.php/s/R4PgSRWGyHEbDgG)<br />
👉 [Nouveaux dessins géométriques et artistiques avec votre micro-ordinateur](https://nextcloud.univ-lille.fr/index.php/s/cwXAAokbbeaykW6)

👉 You can find the recoded sketches of the first book *"Dessins géométriques et artistiques avec votre micro-ordinateur"* here : https://github.com/v3ga/dessins_geometriques_et_artistiques

## Library
I tried to be as close as possible as the original syntax, thus I developed a parser that interprets the string generated by *LPRINT* commands.<br />The [library](https://www.v3ga.net/dessins_geometriques/init_trace.js) contains the following command : 
| Command | Description |
| --- | --- |
| `INIT` | set up the canvas with an initial size of 500x500 pixels, accepts `{svg:true}` as parameter to export to vector format  |
| `INIT2(height)` | set up the canvas with the width equal to 500 pixels and a custom height, accepts `{svg:true}` as parameter to export to vector format |
| `INIT_WH(width,height)` | set up the canvas with custom width and height, accepts `{svg:true}` as parameter to export to vector format |
| `LPRINT(s)` | concatenates `s` to the `OUTPUT` global variable used by `TRACE()`for drawing  |
| `TRACE()` | draw the output using [beginShape](https://p5js.org/reference/#/p5/beginShape) / [vertex](https://p5js.org/reference/#/p5/vertex) / [endShape](https://p5js.org/reference/#/p5/beginShape) commands by interpretating the string generated by `LPRINT` calls|
| `TRACE2()` | draw the output, [endShape](https://p5js.org/reference/#/p5/beginShape) is not used with [CLOSE](https://p5js.org/reference/#/p5/CLOSE) parameter  |
| `PALETTE(which)` | sets the palette, use `RED`,`YELLOW` or `GREEN` as parameter. Defaults otherwise to grey background and black stroke   |

Some sketches were added a [translate](https://p5js.org/reference/#/p5/translate) command to center the drawing as it happened sometimes it was out of canvas bounds.

### Example
```js
let DESSIN = 30;
let NP=480,PI=Math.PI;
let N=400;

function setup() 
{
  INIT();
  
  for (let I = 0; I < N; I++) {
    let X = R*cos(A), Y= R*sin(A);
    let X_ = int(NP/2*(1+X)), Y_ = int(NP/2*(1+Y));
    if (I == 0) LPRINT(`M${X_},${Y_}`);
    if (I > 0) LPRINT(`D${X_},${Y_}`);
  }

  TRACE2();
}
```
## Summary
- [3. Courbes en coordonnées polaires](#3-courbes-en-coordonnées-polaires)
- [4. Von Koch, Cantor et Tapis fractals](#4-vonkoch-cantor-et-tapis-fractals)
  - [Le programme FLOCONS DE VON KOCH](#le-programme-flocons-de-von-koch)    
  - [Le programme CANTOR](#le-programme-cantor)    
  - [Le programme TAPIS FRACTALS](#le-programme-tapis-fractals)    
- [5. Champs](#5-champs)
  - [Le programme AIGUILLES DANS UN CHAMP](#le-programme-aiguilles-dans-un-champ)    
  - [Le programme FILS DANS UN CHAMP](#le-programme-fils-dans-un-champ)    
  - [Le programme FILS RÉGULIERS DANS UN CHAMP](#le-programme-fils-réguliers-dans-un-champ)    
- [6. Transformations](#6-transformations)
  - [Le programme « PREMIÈRES TRANSFORMATIONS »](#le-programme-premieres-transformations)    
  - [Le programme « SECONDES TRANSFORMATIONS »](#le-programme-secondes-transformations)    
- [7. Fractales générales](#7-fractales-générales)
  - [Le programme « FRACTALES GÉNÉRALES »](#le-programme-fractales-générales)    
  - [Le programme « FRACTALES GÉNÉRALES ARRONDIES »](#le-programme-fractales-générales-arrondies)   

## 3. Courbes en coordonnées polaires
<a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_30.png" width="200" title="NOUVEAU DESSIN 30" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_31.png" width="200" title="NOUVEAU DESSIN 31" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_32.png" width="200" title="NOUVEAU DESSIN 32" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_33.png" width="200" title="NOUVEAU DESSIN 33" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_34.png" width="200" title="NOUVEAU DESSIN 34" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_35.png" width="200" title="NOUVEAU DESSIN 35" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_36.png" width="200" title="NOUVEAU DESSIN 36" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_37.png" width="200" title="NOUVEAU DESSIN 37" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_38.png" width="200" title="NOUVEAU DESSIN 38" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_39.png" width="200" title="NOUVEAU DESSIN 39" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_40.png" width="200" title="NOUVEAU DESSIN 40" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_41.png" width="200" title="NOUVEAU DESSIN 41" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_42.png" width="200" title="NOUVEAU DESSIN 42" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_43.png" width="200" title="NOUVEAU DESSIN 43" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_44.png" width="200" title="NOUVEAU DESSIN 44" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_45.png" width="200" title="NOUVEAU DESSIN 45" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_46.png" width="200" title="NOUVEAU DESSIN 46" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_47.png" width="200" title="NOUVEAU DESSIN 47" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_48.png" width="200" title="NOUVEAU DESSIN 48" /><a href="https://editor.p5js.org/v3ga/sketches/ALNyaOZ8q" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_49.png" width="200" title="NOUVEAU DESSIN 49" />

## 4. Von Koch, Cantor et Tapis fractals
### Le programme FLOCONS DE VON KOCH
<a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_60.png" width="200" title="NOUVEAU DESSIN 60" /><a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_61.png" width="200" title="NOUVEAU DESSIN 61" /><a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_62.png" width="200" title="NOUVEAU DESSIN 62" /><a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_63.png" width="200" title="NOUVEAU DESSIN 63" /><a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_64.png" width="200" title="NOUVEAU DESSIN 64" /><a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_65.png" width="200" title="NOUVEAU DESSIN 65" /><a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_66.png" width="200" title="NOUVEAU DESSIN 66" /><a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_68.png" width="200" title="NOUVEAU DESSIN 68" /><a href="https://editor.p5js.org/v3ga/sketches/bljIUcL92" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_69.png" width="200" title="NOUVEAU DESSIN 69" />
### Le programme « CANTOR »
<a href="https://editor.p5js.org/v3ga/sketches/jFD6cSM1E" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_70.png" width="200" title="NOUVEAU DESSIN 70" /><a href="https://editor.p5js.org/v3ga/sketches/jFD6cSM1E" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_71.png" width="200" title="NOUVEAU DESSIN 71" /><a href="https://editor.p5js.org/v3ga/sketches/jFD6cSM1E" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_72.png" width="200" title="NOUVEAU DESSIN 72" /><a href="https://editor.p5js.org/v3ga/sketches/jFD6cSM1E" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_73.png" width="200" title="NOUVEAU DESSIN 73" />
### Le programme TAPIS FRACTALS
<a href="https://editor.p5js.org/v3ga/sketches/hAImX9JQ6" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_74.png" width="200" title="NOUVEAU DESSIN 74" /><a href="https://editor.p5js.org/v3ga/sketches/hAImX9JQ6" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_75.png" width="200" title="NOUVEAU DESSIN 75" /><a href="https://editor.p5js.org/v3ga/sketches/hAImX9JQ6" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_76.png" width="200" title="NOUVEAU DESSIN 76" />
## 5. Champs
### Le programme AIGUILLES DANS UN CHAMP
<a href="https://editor.p5js.org/v3ga/sketches/iw_IYjWQF" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_78.png" width="200" title="NOUVEAU DESSIN 78" /><a href="https://editor.p5js.org/v3ga/sketches/iw_IYjWQF" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_79.png" width="200" title="NOUVEAU DESSIN 79" /><a href="https://editor.p5js.org/v3ga/sketches/iw_IYjWQF" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_80.png" width="200" title="NOUVEAU DESSIN 80" /><a href="https://editor.p5js.org/v3ga/sketches/iw_IYjWQF" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_81.png" width="200" title="NOUVEAU DESSIN 81" /><a href="https://editor.p5js.org/v3ga/sketches/iw_IYjWQF" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_82.png" width="200" title="NOUVEAU DESSIN 82" /><a href="https://editor.p5js.org/v3ga/sketches/iw_IYjWQF" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_83.png" width="200" title="NOUVEAU DESSIN 83" /><a href="https://editor.p5js.org/v3ga/sketches/iw_IYjWQF" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_84.png" width="200" title="NOUVEAU DESSIN 84" />
### Le programme FILS DANS UN CHAMP
<a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_85.png" width="200" title="NOUVEAU DESSIN 85" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_86.png" width="200" title="NOUVEAU DESSIN 86" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_87.png" width="200" title="NOUVEAU DESSIN 87" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_88.png" width="200" title="NOUVEAU DESSIN 88" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_89.png" width="200" title="NOUVEAU DESSIN 89" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_90.png" width="200" title="NOUVEAU DESSIN 90" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_92.png" width="200" title="NOUVEAU DESSIN 92" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_93.png" width="200" title="NOUVEAU DESSIN 93" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_94.png" width="200" title="NOUVEAU DESSIN 94" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_95.png" width="200" title="NOUVEAU DESSIN 95" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_96.png" width="200" title="NOUVEAU DESSIN 96" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_97.png" width="200" title="NOUVEAU DESSIN 97" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_98.png" width="200" title="NOUVEAU DESSIN 98" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_99.png" width="200" title="NOUVEAU DESSIN 99" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_100.png" width="200" title="NOUVEAU DESSIN 100" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_101.png" width="200" title="NOUVEAU DESSIN 101" /><a href="https://editor.p5js.org/v3ga/sketches/i_Iv9lC9l" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_102.png" width="200" title="NOUVEAU DESSIN 102" />
### Le programme FILS RÉGULIERS DANS UN CHAMP
<a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_103.png" width="200" title="NOUVEAU DESSIN 103" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_104.png" width="200" title="NOUVEAU DESSIN 104" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_105.png" width="200" title="NOUVEAU DESSIN 105" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_106.png" width="200" title="NOUVEAU DESSIN 106" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_107.png" width="200" title="NOUVEAU DESSIN 107" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_108.png" width="200" title="NOUVEAU DESSIN 108" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_109.png" width="200" title="NOUVEAU DESSIN 109" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_110.png" width="200" title="NOUVEAU DESSIN 110" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_111.png" width="200" title="NOUVEAU DESSIN 111" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_112.png" width="200" title="NOUVEAU DESSIN 112" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_113.png" width="200" title="NOUVEAU DESSIN 113" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_114.png" width="200" title="NOUVEAU DESSIN 114" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_115.png" width="200" title="NOUVEAU DESSIN 115" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_116.png" width="200" title="NOUVEAU DESSIN 116" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_117.png" width="200" title="NOUVEAU DESSIN 117" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_118.png" width="200" title="NOUVEAU DESSIN 118" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_119.png" width="200" title="NOUVEAU DESSIN 119" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_120.png" width="200" title="NOUVEAU DESSIN 120" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_121.png" width="200" title="NOUVEAU DESSIN 121" /><a href="https://editor.p5js.org/v3ga/sketches/F-XyiX9UM" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_122.png" width="200" title="NOUVEAU DESSIN 122" />
## 6. Transformations
### Le programme « PREMIÈRES TRANSFORMATIONS »
<a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_123.png" width="200" title="NOUVEAU DESSIN 123" /><a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_124.png" width="200" title="NOUVEAU DESSIN 124" /><a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_125.png" width="200" title="NOUVEAU DESSIN 125" /><a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_126.png" width="200" title="NOUVEAU DESSIN 126" /><a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_127.png" width="200" title="NOUVEAU DESSIN 127" /><a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_128.png" width="200" title="NOUVEAU DESSIN 128" /><a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_129.png" width="200" title="NOUVEAU DESSIN 129" /><a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_131.png" width="200" title="NOUVEAU DESSIN 131" /><a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_132.png" width="200" title="NOUVEAU DESSIN 132" /><br />
<a href="https://editor.p5js.org/v3ga/sketches/-3YT2-00R" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_130.png" width="200" title="NOUVEAU DESSIN 130" />
### Le programme « SECONDES TRANSFORMATIONS »
<a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_133.png" width="200" title="NOUVEAU DESSIN 133" /><a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_134.png" width="200" title="NOUVEAU DESSIN 134" /><a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_136.png" width="200" title="NOUVEAU DESSIN 136" /><a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_138.png" width="200" title="NOUVEAU DESSIN 138" /><a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_139.png" width="200" title="NOUVEAU DESSIN 139" /><a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_140.png" width="200" title="NOUVEAU DESSIN 140" /><a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_141.png" width="200" title="NOUVEAU DESSIN 141" /><br />
<a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_135.png" width="200" title="NOUVEAU DESSIN 135" /><a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_137.png" width="200" title="NOUVEAU DESSIN 137" /><a href="https://editor.p5js.org/v3ga/sketches/_md0nJWKK" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_142.png" width="200" title="NOUVEAU DESSIN 142" />
## 7. Fractales générales
### Le programme « FRACTALES GÉNÉRALES »
<a href="https://editor.p5js.org/v3ga/sketches/8TKRttNC3" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_143.png" width="200" title="NOUVEAU DESSIN 143" /><a href="https://editor.p5js.org/v3ga/sketches/8TKRttNC3" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_144.png" width="200" title="NOUVEAU DESSIN 144" /><a href="https://editor.p5js.org/v3ga/sketches/8TKRttNC3" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_145.png" width="200" title="NOUVEAU DESSIN 145" /><a href="https://editor.p5js.org/v3ga/sketches/8TKRttNC3" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_146.png" width="200" title="NOUVEAU DESSIN 146" /><br /><a href="https://editor.p5js.org/v3ga/sketches/fC0A4j1Fh" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_147.png" width="200" title="NOUVEAU DESSIN 147" /><a href="https://editor.p5js.org/v3ga/sketches/fC0A4j1Fh" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_148.png" width="200" title="NOUVEAU DESSIN 148" /><a href="https://editor.p5js.org/v3ga/sketches/fC0A4j1Fh" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_149.png" width="200" title="NOUVEAU DESSIN 149" /><a href="https://editor.p5js.org/v3ga/sketches/fC0A4j1Fh" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_150.png" width="200" title="NOUVEAU DESSIN 150" /><a href="https://editor.p5js.org/v3ga/sketches/fC0A4j1Fh" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_151.png" width="200" title="NOUVEAU DESSIN 151" /><a href="https://editor.p5js.org/v3ga/sketches/fC0A4j1Fh" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_152.png" width="200" title="NOUVEAU DESSIN 152" /><br /><a href="https://editor.p5js.org/v3ga/sketches/asI38WOfm" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_153.png" width="200" title="NOUVEAU DESSIN 153" /><a href="https://editor.p5js.org/v3ga/sketches/asI38WOfm" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_154.png" width="200" title="NOUVEAU DESSIN 154" /><a href="https://editor.p5js.org/v3ga/sketches/asI38WOfm" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_155.png" width="200" title="NOUVEAU DESSIN 155" /><a href="https://editor.p5js.org/v3ga/sketches/asI38WOfm" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_156.png" width="200" title="NOUVEAU DESSIN 156" /><br /><a href="https://editor.p5js.org/v3ga/sketches/3u8gW2Ln0" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_157.png" width="200" title="NOUVEAU DESSIN 157" /><a href="https://editor.p5js.org/v3ga/sketches/3u8gW2Ln0" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_158.png" width="200" title="NOUVEAU DESSIN 158" /><a href="https://editor.p5js.org/v3ga/sketches/3u8gW2Ln0" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_159.png" width="200" title="NOUVEAU DESSIN 159" /><a href="https://editor.p5js.org/v3ga/sketches/3u8gW2Ln0" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_160.png" width="200" title="NOUVEAU DESSIN 160" /><a href="https://editor.p5js.org/v3ga/sketches/3u8gW2Ln0" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_161.png" width="200" title="NOUVEAU DESSIN 161" /><br /><a href="https://editor.p5js.org/v3ga/sketches/qQoOi-g7D" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_162.png" width="200" title="NOUVEAU DESSIN 162" /><a href="https://editor.p5js.org/v3ga/sketches/qQoOi-g7D" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_163.png" width="200" title="NOUVEAU DESSIN 163" /><a href="https://editor.p5js.org/v3ga/sketches/qQoOi-g7D" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_164.png" width="200" title="NOUVEAU DESSIN 164" /><a href="https://editor.p5js.org/v3ga/sketches/qQoOi-g7D" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_165.png" width="200" title="NOUVEAU DESSIN 165" /><a href="https://editor.p5js.org/v3ga/sketches/qQoOi-g7D" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_166.png" width="200" title="NOUVEAU DESSIN 166" /><a href="https://editor.p5js.org/v3ga/sketches/qQoOi-g7D" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_167.png" width="200" title="NOUVEAU DESSIN 167" /><a href="https://editor.p5js.org/v3ga/sketches/qQoOi-g7D" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_168.png" width="200" title="NOUVEAU DESSIN 168" /><a href="https://editor.p5js.org/v3ga/sketches/qQoOi-g7D" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_169.png" width="200" title="NOUVEAU DESSIN 169" /><br /><a href="https://editor.p5js.org/v3ga/sketches/Ha8cseqz-" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_170.png" width="200" title="NOUVEAU DESSIN 170" /><a href="https://editor.p5js.org/v3ga/sketches/Ha8cseqz-" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_171.png" width="200" title="NOUVEAU DESSIN 171" /><a href="https://editor.p5js.org/v3ga/sketches/Ha8cseqz-" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_172.png" width="200" title="NOUVEAU DESSIN 172" /><a href="https://editor.p5js.org/v3ga/sketches/Ha8cseqz-" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_173.png" width="200" title="NOUVEAU DESSIN 173" /><a href="https://editor.p5js.org/v3ga/sketches/Ha8cseqz-" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_174.png" width="200" title="NOUVEAU DESSIN 174" /><br /><a href="https://editor.p5js.org/v3ga/sketches/Pt0hDim_r" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_175.png" width="200" title="NOUVEAU DESSIN 175" /><a href="https://editor.p5js.org/v3ga/sketches/Pt0hDim_r" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_176.png" width="200" title="NOUVEAU DESSIN 176" /><a href="https://editor.p5js.org/v3ga/sketches/Pt0hDim_r" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_177.png" width="200" title="NOUVEAU DESSIN 177" /><br /><a href="https://editor.p5js.org/v3ga/sketches/BgVbcJ96U" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_178.png" width="200" title="NOUVEAU DESSIN 178" /><a href="https://editor.p5js.org/v3ga/sketches/BgVbcJ96U" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_179.png" width="200" title="NOUVEAU DESSIN 179" /><br /><a href="https://editor.p5js.org/v3ga/sketches/GSGz4chi7" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_180.png" width="200" title="NOUVEAU DESSIN 180" /><a href="https://editor.p5js.org/v3ga/sketches/GSGz4chi7" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_181.png" width="200" title="NOUVEAU DESSIN 181" /><a href="https://editor.p5js.org/v3ga/sketches/GSGz4chi7" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_182.png" width="200" title="NOUVEAU DESSIN 182" />
### Le programme « FRACTALES GÉNÉRALES ARRONDIES »
<a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_183.png" width="200" title="NOUVEAU DESSIN 183" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_184.png" width="200" title="NOUVEAU DESSIN 184" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_185.png" width="200" title="NOUVEAU DESSIN 185" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_186.png" width="200" title="NOUVEAU DESSIN 186" /><br /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_187.png" width="200" title="NOUVEAU DESSIN 187" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_188.png" width="200" title="NOUVEAU DESSIN 188" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_189.png" width="200" title="NOUVEAU DESSIN 189" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_190.png" width="200" title="NOUVEAU DESSIN 190" /><br /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_191.png" width="200" title="NOUVEAU DESSIN 191" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_192.png" width="200" title="NOUVEAU DESSIN 192" /><br /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_193.png" width="200" title="NOUVEAU DESSIN 193" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_194.png" width="200" title="NOUVEAU DESSIN 194" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_195.png" width="200" title="NOUVEAU DESSIN 195" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_196.png" width="200" title="NOUVEAU DESSIN 196" /><br /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_197.png" width="200" title="NOUVEAU DESSIN 197" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_198.png" width="200" title="NOUVEAU DESSIN 198" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_199.png" width="200" title="NOUVEAU DESSIN 199" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_200.png" width="200" title="NOUVEAU DESSIN 200" /><br /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_201.png" width="200" title="NOUVEAU DESSIN 201" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_202.png" width="200" title="NOUVEAU DESSIN 202" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_203.png" width="200" title="NOUVEAU DESSIN 203" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_204.png" width="200" title="NOUVEAU DESSIN 204" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_205.png" width="200" title="NOUVEAU DESSIN 205" /><br /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_206.png" width="200" title="NOUVEAU DESSIN 206" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_207.png" width="200" title="NOUVEAU DESSIN 207" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_208.png" width="200" title="NOUVEAU DESSIN 208" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_209.png" width="200" title="NOUVEAU DESSIN 209" /><br /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_210.png" width="200" title="NOUVEAU DESSIN 210" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_211.png" width="200" title="NOUVEAU DESSIN 211" /><a href="https://editor.p5js.org/v3ga/sketches/lvFbun0TE" target="_blank"/><img src="img/NOUVEAU_DESSIN_GEOMETRIQUE_212.png" width="200" title="NOUVEAU DESSIN 212" />



