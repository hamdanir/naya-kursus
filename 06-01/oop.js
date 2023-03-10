// class lingkaran {

//     jariJari;

//     luas = () => this.jariJari ** 2 * 3.14;
//     keliling = () => 3.14 * (this.jariJari + this.jariJari);

// };

// const bunder = new lingkaran();
// bunder.jariJari = 6;
// console.log('luas =', bunder.luas());
// console.log('keliling =', bunder.keliling());


// class persegi {
//     panjang;
//     lebar;

//     luas = () => this.panjang * this.lebar;
//     keliling = () => (this.panjang + this.lebar) * 2;

// };

// const adudu = new persegi();
// adudu.panjang = 2;
// adudu.lebar = 4;
// console.log('luas =', adudu.luas());
// console.log('keliling =', adudu.keliling());


// penambahan cunstructor
class lingkaran {
    constructor(jariJari) {
        this.r = jariJari;
    }



    luas = () => this.r ** 2 * 3.14;
    keliling = () => 3.14 * (this.r + this.r);
};
const bunder = new lingkaran(3);
console.log('luas lingkaran =', bunder.luas());
console.log('keliling lingkaran=', bunder.keliling());

class persegi {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas = () => this.panjang * this.lebar;
    keliling = () => (this.panjang + this.lebar) * 2;
};
const adudu = new persegi(2, 2);
console.log('luas persegi =', adudu.luas());
console.log('keliling persegi =', adudu.keliling());

// Tugas 3 : fungsi extends
console.group('Tugas Extends');

class tabung extends lingkaran {
    constructor(jariJari, tinggi) {
        super(jariJari);
        this.tinggi = tinggi;
    }

    volume = () => 3.14 * (this.jariJari ** 2) * this.tinggi
};

const kaleng = new tabung(2, 3);
console.log('volume tabung =', kaleng.volume());

class balok extends persegi {
    constructor(panjang, lebar, tinggi) {
        super(panjang, lebar);
        this.tinggi = tinggi;
    }

    volume = () => this.panjang * this.lebar * this.tinggi

};

const kubus = new balok(2, 2, 5);
console.log('volume balok =', kubus.volume());

console.groupEnd();