let alas = 5;
let tinggi = 10;

function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

function jenis(x) {
    return x % 2 === 0 ? 'genap' : 'ganjil';
    // if (x % 2 === 0) {
    //     return 'genap';
    // }
    // else {
    //     return 'ganjil';
    // }
}

function grade(x) {
    if (x == 0) {
        return 'F';
    }
    if (x >= 1 && x <= 30) {
        return 'E';
    }
    if (x >= 31 && x <= 50) {
        return 'D';
    }
    if (x >= 51 && x <= 70) {
        return 'C';
    }
    if (x >= 71 && x <= 80) {
        return 'B';
    }
    if (x >= 81 && x <= 100) {
        return 'A';
    }
}

console.log(luasSegitiga(alas, tinggi));
console.log(jenis(luasSegitiga(alas, tinggi)));
console.log(grade(luasSegitiga(alas, tinggi)));

// Perulangan
console.log("perulangan angka genap dengan For");
for (var i = luasSegitiga(alas, tinggi); i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

console.log("perulangan angka Ganjil dengan While");
var i = -10;
while (i <= luasSegitiga(alas, tinggi)) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}