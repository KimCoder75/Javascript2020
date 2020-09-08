/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.

  Esempio:
    Output: 1 2 3 4 5 6 7 8 9 10
            11 12 13 14 15 16 17 18 19 20
            21 22 23 24 25 26 27 28 29 30
            31 32 33 34 35 36 37 38 39 40
            41 42 43 44 45 46 47 48 49 50
            51 52 53 54 55 56 57 58 59 60
            61 62 63 64 65 66 67 68 69 70
            71 72 73 74 75 76 77 78 79 80
            81 82 83 84 85 86 87 88 89 90
            91 92 93 94 95 96 97 98 99 100

  Consiglio:
  Per andare a capo usa '\n'.

  http://www.imparareaprogrammare.it
*/

for (var i = 1; i < 101; i++) {
  if (i==1 || i%10==1) {
    console.log(`${i} ${i+1} ${i+2} ${i+3} ${i+4} ${i+5} ${i+6} ${i+7} ${i+8} ${i+9}`);
  }
}

// verificare se esiste un carattere di escape che restituisce i log in orizzontale
