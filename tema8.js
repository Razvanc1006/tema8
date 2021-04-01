/* ----- Exercises-part2 ----- */
// Ex.1

function tempConversion(celsius ,fahrenheit) {
    if(celsius !== 0) {
        fahrenheit = (celsius * 1.8) + 32 ;
        return fahrenheit;
    }
    else if (fahrenheit !== 0){
        celsius = (fahrenheit - 32 ) * 0.5556;
        return fahrenheit;
    }
}

console.log(`Temperatura este de ${tempConversion(0,30)} grade C`);
console.log(`Temperatura este de ${tempConversion(30,0)} grade F`);

//Ex.2 
function getDistance(point1, point2) {
    const distance = (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2;
    return Math.sqrt(distance); // square root (radacina patrata)
  }
  
  console.log(getDistance({ x: 2, y: 1 }, { x: 3, y: 5 }));

//Ex.3 
function getDistanceExtended(points) {
    let distances = [] ;
    let j = 0;
    for(let i=0;i < points.length; i++) {
        distances[j] = getDistance(points[i][0],points[i][1]);
        j++;
    }
    return distances ;
}

console.log(getDistanceExtended([
    [{x: 2, y: 3} , {x: 1, y: 4}],
    [{x: -1 , y: 2}, {x: 2, y: -3}],
    [{x: 2,y: 1}, {x:3 ,y: 5}]
]));

/* ----- Exercises part3 ----- */
//Ex.1 
function isPalindrom(number) {
    if(number < 0) return false ;
    let mirror = 0 ;
    let numberCpy = number ;
    
    while (numberCpy != 0) {
        mirror = mirror*10 + numberCpy%10;
        numberCpy = parseInt(numberCpy/10);
    }
    
    if ( number === mirror) return 1;
    else return 0;
    
    
}

const checkEx1 = 1221 ;

if (isPalindrom(checkEx1))
console.log('Este palindrom ');
else console.log('Nu este palindrom');

//Ex.2 

const sentenceCapitalize = (sentence) => {
    const words =  sentence.split(" ");
    for (let i =0 ; i < words.length; i++ ) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

console.log(sentenceCapitalize("Ana are mere"));

//Ex.3 
const countVowelsV3 = (inputString) => {
    let counter = 0;
    const vowels = "aeiou";
  
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i].toLowerCase())) counter++;
    }
  
    return counter;
  };
  
  console.log(countVowelsV3("Ana are mere"));

//Ex.4 
const isPrime = (numb) => {
  let div = 0 ;
  for (let i=2 ; i< numb/2; i++)
  {
      if(numb%i == 0)
      div++;
  }
  if(div == 0) 
    console.log('Este prim');
  else console.log('Nu este prim');

}

isPrime(71);
isPrime(2);
isPrime(14);

/* ----- Exercises-part4 ----- */
//Ex 1

function specialChar (myString) {
    const special = '~!@#$%^&*()_+{}|:"<>?';
    let specialCounter = 0;
    for(let i=0;i<myString.length;i++)
     {
         if(special.includes(myString[i]))
            specialCounter ++;
     }
    if(myString.length >= 8 && specialCounter >= 1)
        return true;
    else return false;
}

if(specialChar('ABCDEFG!hhsfa')) console.log('Conditia este indeplinita');
else console.log('Conditia nu este indeplinita');

//Ex 2
const validEmail = (checkEmail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkEmail) ;
}

console.log(validEmail('safasfa'));
console.log(validEmail('razvanc@gmail.com'));

//Ex 3

const validUser = (myUser) => {
    if(!validEmail(myUser.email)) return false;
    if(!myUser.nume) return false;
    if(!myUser.prenume) return false ;
    if(!specialChar(myUser.parola)) return false;
    
    return true;
}

const checkUser = {email: 'asfasfas' , nume : 'John' , prenume : 'Smith',parola:'abcdef!'};
const checkUser2 = {email: 'john.doe@hotmail.com', nume: 'John', prenume: 'Doe', parola: 'abcdefgh#'};

if (validUser(checkUser) === true)
    console.log('Userul este valid');
else console.log('Userul nu este valid');

if (validUser(checkUser2) === true)
    console.log('Userul este valid');
else console.log('Userul nu este valid');

//Ex 4
const checkUserList = (userList) =>{
    let validUsers = [] ;
    for(let i = 0; i< userList.length;i++) {
        if(validUser(userList[i]))
            validUsers.push(userList[i]);
    }
    return validUsers;
}

const users = [{email: 'asfasfas' , nume : 'John' , prenume : 'Smith',parola:'abcdef!'},
    {email: 'john.doe@hotmail.com', nume: 'John', prenume: 'Doe', parola: 'abcdefgh#'},
    {email: 'john.doehotmail.com', nume: 'John', prenume: 'Doe', parola: 'abcdefgh#'},
    {email: 'john.doe@hotmail.com', nume: 'John', prenume: 'Doe', parola: 'abc#'},
    {email: 'john.doe@hotmail.com', nume: 'John', prenume: 'Cena', parola: 'abcdefgh#'}

];
console.log(checkUserList(users));

/* ----- Exercises-part5 ----- */
// ex1

const triangle = (rows) => {
    let row = "";
    for (let i=1 ; i<= rows ; i++)
    {
        for (let j=1 ;j<= i;j++){
            row += "#";
        }
            row += "\n";
    }
   return row + "\n";
}
console.log(triangle(4));

// ex2 

const pyramid = (size) => {
    for(let i=1; i<= size; i++){

        let space = ' '.repeat(size-i);
    
        let row = '*'. repeat(i*2 -1)
    
     
    
        console.log(space + row + space);
    
      }
}
pyramid(5);

// ex3 

const chess = () => {
    let chessTable = "";
    for(let i=0 ;i<8;i++) {
        for(let j=0;j<8;j++){
            if((i+j)%2==0)
                chessTable += " ";
            else chessTable += "#";
        }
        chessTable += "\n";
    }
    return chessTable;
}
console.log(chess());

/* ----- Bonus ------ */

function income (phrase) {
   
    const words = phrase.split(" ");
    
    let venit = 0;
    for(let i=0;i<words.length;i++){
        if(!isNaN([words[i]]) && words[i+1]=='lei/luna')
            venit += parseInt(words[i])*12;
        else if(!isNaN([words[i]]) && words[i+1]=='lei/an')
            venit += parseInt(words[i]);
        else if(!isNaN([words[i]]) && words[i+1]=='euro/luna')
            venit += parseFloat(words[i])*12*4.8;
            else if(!isNaN([words[i]]) && words[i+1]=='euro/an')
            venit += parseFloat(words[i])*4.8;
        else if(!isNaN([words[i]]) && words[i+1]=='usd/luna')
            venit += parseFloat(words[i])*12*4.3;
            else if(!isNaN([words[i]]) && words[i+1]=='usd/an')
            venit += parseFloat(words[i])*4.3;
    }
    return venit;
}   
const phrase1 = "Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.";
const phrase2 = "John castiga 1000 euro/luna din salariu, 9000 lei/an bonus si 1000 usd/luna din freelancing.";
console.log(`Venitul total anual al lui Ion este ${income(phrase1)}`);
console.log(`Venitul total anual al lui John este ${income(phrase2)}`);