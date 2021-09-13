const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ  kibria',
    treatDey: function (expense, a, vat) {

        this.money = this.money - expense - a - vat;
        console.log(this)
        return this.money;


    }
}

const beroBalam = {
    id: 102,
    money: 5000,
    name: 'Hero Balam'
}
const Normalalam = {
    id: 102,
    money: 50,
    name: 'normal Balam'
}

// kibria.treatDey(1000)

// const heroTreatDey = kibria.treatDey.bind(Normalalam);
// heroTreatDey(500)

// kibria.treatDey.call(Normalalam, 50,2,4)

kibria.treatDey.apply(beroBalam, [500, 100, 50])