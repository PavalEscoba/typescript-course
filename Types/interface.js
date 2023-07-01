var _this = this;
var pavel = {
    id: 124,
    name: 'Pavel',
    lastName: 'Miatlitski',
    nickName: 'Miatla',
    sayHi: function () { return 'Hello!'; },
};
// doesn't work because TS compoles this into _this
var shoes = {
    name: 'New Balance',
    price: 100,
    applyDiscount: function (amount) {
        console.log('this', _this);
        return _this.price * (1 - amount);
    },
};
console.log('shoes price with discount', shoes.applyDiscount(0.3));
var bible = {
    name: 'Bible',
    date: '1200 BC - 120 AD',
    author: 'actually God',
    read: function () {
        return "I'm reading it everyday";
    },
};
var nationalGeografic = {
    name: 'National Geografic',
    author: 'National Geographic Partners',
    date: '1888',
    color: 'color',
    topic: 'geography',
    read: function () {
        return 'Have never read it';
    },
};
