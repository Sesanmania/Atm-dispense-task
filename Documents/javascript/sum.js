/*function showMessage() {
    let message = "welcome, adebayo";
    alert(message);
}
showMessage();*/
let userName = "John";
function showMessage() {
    userName = "sesan";
    let message = "hello,"+ userName;
   // alert(message); 
   //console.log(message);
}
//alert(userName);
showMessage();
//alert(userName);

let people = ['ade', 'sesan', 'kunle', 'joke', 'adebayo']
//console.log(people.length);
//console.log(people[2])

//to get last element in array

let lastElement = people[people.length - 1]
//console.log(lastElement);

// To get array lenght
let len = people.length;
//console.log(len);
// console.log(people[len-1]);

let fruit = ['apple', 'mango', 'orange']
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit.length);
fruit[1]= 'semo';
// console.log(fruit);
fruit.push('meat');
// console.log(fruit);
let arr = ['apple', {name: 'John'}, true, function(){alert('hello');}];
// console.log(arr[1].name);
// console.log(arr[3](''));
// console.log(fruit.at(-1));

// function student(ifMale,ifFemale){
//     if(ifMale <= 1 && ifFemale >=7);
//     return "true";
// } 
// {
//     return 'false';
// }

// console.log(student(5));
   //and operator
// function andriodPhone(isAndriod, isSamsung){
//     if(isAndriod && isSamsung){
//         return 'welcome to andriod word'
//     }
//     return 'get yourself an andriod phone'
// }
// console.log(andriodPhone(1,1));

// function userAuth(email, password){
//     if(email ==='sesanmania.com' && password === '1234'){
//         return 'you are welcome';
//     }
//     return 'sorry wrong email or password';
// }
// console.log(userAuth('sesanmania.com', '1234'));

function passangerRequest(isDriverVerified, isLicensedValid, rating){
    if(rating >5.0){
        return 'invalid rating'
    }
    if (isDriverVerified && isLicensedValid && rating > 4.0){
        return 'incomig ride request by adebayo, ACCEPT OR REJECT'

    }
    return 'connecting you with a driver, please waith'
}
console.log(passangerRequest(1,1,5.1));