function calculate(){
    let total=0;
    let grade='';
    total+= parseInt(document.querySelector('#subject1').value);
    total+= parseInt(document.querySelector('#subject2').value);
    total+= parseInt(document.querySelector('#subject3').value)
    total+= parseInt(document.querySelector('#subject4').value)
    total+= parseInt(document.querySelector('#subject5').value)
    if(total<=250 && total>=200){
        grade='A';
    }
    else if(total<200 && total>=150){
        grade='B';
    }
    else if(total<150 && total>=100){
        grade='C';
    }
    else{
        grade='D';
    }
    document.getElementById('display').innerHTML=`Your total: ${total}<br>Grade: ${grade}`;
    
}