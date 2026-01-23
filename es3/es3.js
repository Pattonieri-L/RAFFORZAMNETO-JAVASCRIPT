let counter = 0;
let casella = document.getElementById("numero");
counter = casella.innerText;
counter = Number(counter);

function somma() {
    counter++;
    casella.innerText = counter;
    if (counter > 0)
    h1.style.color = "green";
}if (counter ==0){
     h1.style.color = "black";
    
}
function sottrazione() {
    counter--;
    casella.innerText = counter;
    if (counter < 0)
    h1.style.color = "red";
}if (counter ==0){
     h1.style.color = "black";
}

