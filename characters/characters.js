function getRandomStat() {
    return Math.floor(Math.random() * (20 - 3) + 3);
}

function calcModifier(stat) {
    var mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
        mod = "+" + mod;
    }
    return mod;
}

function getCharacterName() {
    var name = document.getElementById("char-name").value;
    document.getElementById("name").innerHTML = name;
}

document.getElementById("enter-name").addEventListener("click", getCharacterName);

function getStrMod() {
    var strength = document.getElementById("strength").value;
    var modifier = Math.floor((strength - 10) / 2);
    if (modifier > 0) {
        modifier = "+" + modifier;
    }
    document.getElementById("str-mod").innerHTML = modifier;
}

document.getElementById("enter-str").addEventListener('click',getStrMod);

function getDexMod() {
    var dexterity = document.getElementById("dexterity").value;
    var modifier = Math.floor((dexterity - 10) / 2);
    if (modifier > 0) {
        modifier = "+" + modifier;
    }
    document.getElementById("dex-mod").innerHTML = modifier;
}

document.getElementById("enter-dex").addEventListener('click',getDexMod);

function getConMod() {
    var constitution = document.getElementById("constitution").value;
    var modifier = Math.floor((constitution - 10) / 2);
    if (modifier > 0) {
        modifier = "+" + modifier;
    }
    document.getElementById("con-mod").innerHTML = modifier;
}

document.getElementById("enter-con").addEventListener('click',getConMod);

function getIntMod() {
    var intelligence = document.getElementById("intelligence").value;
    var modifier = Math.floor((intelligence - 10) / 2);
    if (modifier > 0) {
        modifier = "+" + modifier;
    }
    document.getElementById("int-mod").innerHTML = modifier;
}

document.getElementById("enter-int").addEventListener('click',getIntMod);

function getWisMod() {
    var wisdom = document.getElementById("wisdom").value;
    var modifier = Math.floor((wisdom - 10) / 2);
    if (modifier > 0) {
        modifier = "+" + modifier;
    }
    document.getElementById("wis-mod").innerHTML = modifier;
}

document.getElementById("enter-wis").addEventListener('click',getWisMod);

function getChrMod() {
    var charisma = document.getElementById("charisma").value;
    var modifier = Math.floor((charisma - 10) / 2);
    if (modifier > 0) {
        modifier = "+" + modifier;
    }
    document.getElementById("chr-mod").innerHTML = modifier;
}

document.getElementById("enter-chr").addEventListener('click',getChrMod);

function getRandomCharacter() {
    var randomNames = ["Jim", "Overlord of the Underworld", "Speffen", 
    "Trevor", "Varis Omen", "Salazar Dalen", "Kevin", "Ryder Throckmorton", "Damocles"];
    var randomIndex = Math.floor(Math.random() * (randomNames.length-1) + 1);
    var name = randomNames[randomIndex];
    var str = calcModifier(getRandomStat());  
    var dex = calcModifier(getRandomStat()); 
    var con = calcModifier(getRandomStat()); 
    var int = calcModifier(getRandomStat());  
    var wis = calcModifier(getRandomStat()); 
    var chr = calcModifier(getRandomStat()); 
    document.getElementById("name").innerHTML = name;
    document.getElementById("str-mod").innerHTML = str;
    document.getElementById("dex-mod").innerHTML = dex;
    document.getElementById("con-mod").innerHTML = con;
    document.getElementById("int-mod").innerHTML = int;
    document.getElementById("wis-mod").innerHTML = wis;
    document.getElementById("chr-mod").innerHTML = chr;
}

document.getElementById("random").addEventListener("click",getRandomCharacter);
