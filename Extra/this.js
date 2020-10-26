var oggetto = {
    metodointerno: function(){
        console.log(this === oggetto);
        // Il 'this' è l'oggetto,
        // non la funzione
    }
};

oggetto.metodointerno(); // true

function funzione(){
    console.log(this);
}

funzione() // window
new funzione() // literalFunction

// Modifichiamo Object.prototype
Object.prototype.bar = 1;
var foo = {goo: undefined};

console.log(foo.bar);
console.log('bar' in foo); // true

console.log(foo.hasOwnProperty('bar')); // false
console.log(foo.hasOwnProperty('goo')); // true
