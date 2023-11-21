var jogos = ["Counter Strike", "Battlefield", "The Sims", "Overwatch", "PAYDAY", "Stardew Valley", "The Walking Dead", "Rainbow Six", "The Witcher", "Hollow Knight", "Grand Chase", "Minecraft", "Dark Souls", "Black Desert", "Assassin's Creed"];

function pesquisar() {
    let input = document.getElementById("searchBar").value;
    input = input.toLowerCase();   
   
    for (i = 0; i < jogos.length; i++){
        if (jogos[i].toLowerCase().includes(input)){
            alert(jogos[i]);
        }
    }
}



    
    
