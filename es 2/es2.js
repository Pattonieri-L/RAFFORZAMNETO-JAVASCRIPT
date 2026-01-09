document.getElementById('confronta').addEventListener('click', function() {
   
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    
    let quadrato1 = document.getElementById('quadrato1');
    let quadrato2 = document.getElementById('quadrato2');
    

    if (numero1 > numero2) {
        quadrato1.style.backgroundColor = 'green'; 
        quadrato2.style.backgroundColor = 'gray';  
    } else if (numero1 < numero2) {
        quadrato1.style.backgroundColor = 'gray';  
        quadrato2.style.backgroundColor = 'green'; 
    } else {
        quadrato1.style.backgroundColor = 'yellow'; 
        quadrato2.style.backgroundColor = 'yellow'; 
    }
});