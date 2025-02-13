function addArray(){
    const n =parseInt(window.prompt("Enter number of elements in array: "));
    const arr=[];
    let sum=0;
    for(i=0;i<n;i++){
        arr[i]=parseInt(window.prompt(`Enter ${i+1} element value: `));
        sum+=arr[i];
    }
    alert(`The total sum: ${sum}`);
};

function stringRev(){
    let str = window.prompt('Enter a string: ');
    let rev ="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i];
    }
    alert(`New string: ${rev}`);
}

function firstNPrimes(){
    let num = parseInt(window.prompt('Enter a number: '));
    let arr = [];
    while(num){
        let i;
        for(i=2;i<num;i++){
            if(num%i==0){
                break;
            }
        }
        if(i===num){
            arr.push(num);
        }
        num--;
    }
    alert(`Prime Numbers: ${arr}`);
}

function changeTheme(theme){
    let bodyref=document.querySelector('body');
     if('black'===theme || theme===' '){
        
        bodyref.style.backgroundColor="white";
        bodyref.style.color="black";
        theme='white';
     }
     else{
        bodyref.style.backgroundColor="black";
        bodyref.style.color="white";
        theme='black';
     }
}

function groupPeopleByAge(){
    const age = parseInt(window.prompt('Enter your age: '));
    if(age<=12){
        alert(`You belong to child division!`);
    }
    else if(age<=19){
        alert(`You belong to teenage division!`);
    }
    else if(age<=30){
        alert(`You belong to young division!`);
    }
    else{
        alert(`You belong to senior citizen division!`);
    }
}

function calculator(){
    let r=document.querySelector('#num1');
    num1=r.value;
    r=document.querySelector('#opp');
    num1+=r.value; 
    r=document.querySelector('#num2');
    num1+=r.value;
    alert(`Answer: ${eval(num1)}`)
}