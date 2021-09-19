const person = {name: 'Jack William', age: 17, job:'facebooker', gfName:'Ema Watson', address: 'Kocho Khet', phone: '01717112211', friends: ['Tom hancks', 'tom cruise', 'Tom yarn']};

const { phone, gfName, address, salary } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(phone);

const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriend, nextFriend, ...restFriend] = friends;
console.log(restFriend);

