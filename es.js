 function saluta() {
          
            let nome = document.getElementById('nome').value;
            let genere = document.getElementById('genere').value;
            let messaggio = document.getElementById('messaggio');
            let inputNome = document.getElementById('nome');
            messaggio.innerHTML = "";

            if (nome === "") {
                messaggio.innerHTML = "Per favore, inserisci il tuo nome!";
                inputNome.style.border = "2px solid red"; 
            } else {
                if (genere === "uomo") {
                    messaggio.innerHTML = "Ciao " + nome + ", benvenuto!";
                    inputNome.style.border = "2px solid blue"; 

                } else if (genere === "donna") {
                    messaggio.innerHTML = "Ciao " + nome + ", benvenuta!";
                    inputNome.style.border = "2px solid pink"; 
            }
        }
    }