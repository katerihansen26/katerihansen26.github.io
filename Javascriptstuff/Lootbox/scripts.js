var lootBox = document.getElementById("lootbox")

function rolllootbox(){
    number = Math.floor(Math.random() * 100);

    if (number < 50) {
        lootBox.inneHTML = "COMMON";
        lootBox.style.backgroundColor = "white:";
    }

    else if (number < 75){
        lootBox.innerHTML = "UNCOMMON";
        lootBox.style.backgroundColor = "blue";
    }

    else if (number < 90){
        lootBox.innerHTML = "RARE";
        lootBox.style.backgroundColor = "gold";
    }

    else if (number < 99){
        lootBox.innerHTML = "LEGENDARY";
        lootBox.style.backgroundColor = "orangered";
    }

    else if (number < 99){
        lootBox.innerHTML = "LEGENDARY";
        lootBox.style.backgroundColor = "orangered";
    }

    else  {
        lootBox.innerHTML = "MYTHIC";
        lootBox.style.backgroundColor = "pink";
    }
}



document.getElementById("roll").addEventListener("click", rolllootbox);
