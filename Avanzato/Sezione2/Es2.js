/*
 * Sostituire il % con la stringa JavaScript in "Maestro %. Corso JS su Udemy"
*/
let str = 'Maestro %. Corso JS su Udemy';

console.log('Frase originale: '+str);
let sostituisci ='Javascript';
let pos = str.indexOf('%');
console.log("Posizione del simbolo % all\'interno della frase: "+pos);

console.log('Porzione di testo dall\'indice 0 alla posizione '+pos+': "'+str.slice(0,pos)+'"');
console.log('Parola che sostituisce il simbolo %: "'+sostituisci+'"');
console.log('Resto della frase dalla posizione '+(pos+1)+': "'+str.slice(pos + 1)+'"'); // se manca il secondo argomento la stringa va fino alla fine.
str ="Frase finale: "+ str.slice(0,pos) + sostituisci + str.slice(pos + 1);
console.log(str);
