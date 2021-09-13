const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ  kibria',
    treatDey: function (expense) {

        this.money = this.money - expense;
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

const heroTreatDey = kibria.treatDey.bind(Normalalam);
heroTreatDey(500)

