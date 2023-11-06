function minimalBills (amount){
let money100 = 0;
let money20 = 0;
let money9 = 0;
let money1 = 0;
money100 = Math.floor (amount / 100);
amount %= 100;
money20 = Math.floor (amount / 20);
amount %= 20;
money9 = Math.floor (amount / 9);
amount %=9;
money1 = amount;
return [money100, money20, money9, money1];
}
const amount = 2034;
const [money100, money20, money9,money1] = minimalBills(amount);
console.log(`minimal number of 100 naira bilss: ${money100}`);
console.log(` minimal number of 20 naira bills: ${money20}`);
console.log(` minimal number of 9 naira bills: ${money9}`);
console.log(` minimal number of 1 naira bills: ${money1}`);


function theSchool (str){
    return str.replace (-_);
    function str (group){
        return group.toupperCase();

    }
}
console.log(theSchool);



