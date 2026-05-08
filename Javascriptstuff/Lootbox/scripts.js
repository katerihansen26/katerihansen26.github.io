var lootBox = document.getElementById("lootbox")

var common = document.getElementById("Common")
var c_count = 0;

var uncommon = document.getElementById("Uncommon")
var u_count = 0;

var rare = document.getElementById("Rare")
var r_count = 0;

var legendary = document.getElementById("Legendary")
var l_count = 0;

var mythic = document.getElementById("Mythic")
var cm_count = 0;

function rolllootbox(){
    number = Math.floor(Math.random() * 100);

    if (number < 50) {
        lootBox.innerHTML = "COMMON";
        lootBox.style.backgroundColor = "white";
        c_count = c_count +1;
        common.innerHTML = c_count;
    }

    else if (number < 75){
        lootBox.innerHTML = "UNCOMMON";
        lootBox.style.backgroundColor = "blue";
        u_count =uc_count +1;
        uncommon.innerHTML = u_count;
    }

    else if (number < 90){
        lootBox.innerHTML = "RARE";
        lootBox.style.backgroundColor = "gold";
        r_count = r_count +1;
        rare.innerHTML = r_count;
    }

    else if (number < 99){
        lootBox.innerHTML = "LEGENDARY";
        lootBox.style.backgroundColor = "orangered";
        l_count = l_count +1;
        legendary.innerHTML = l_count;
    }

    else  {
        lootBox.innerHTML = "MYTHIC";
        lootBox.style.backgroundColor = "pink";
        m_count = m_count +1;
        mythic.innerHTML = m_count;
    }
}

document.getElementById("roll").addEventListener("click", rolllootbox);