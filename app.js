const inp = document.querySelector(".inp");
const inp2 = document.querySelector("#monsterName");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".subment");
const select = document.querySelector("#monsterType");
const select2 = document.querySelector("#monsterColor");
const select3 = document.querySelector("#antalOgon");
const select4 = document.querySelector("#antalArm");
const span = document.querySelector("span");
const ul = document.querySelector("ul");
const bluImg = document.querySelector(".blu");
const gronImg = document.querySelector(".gron");
const svartImg = document.querySelector(".svart");
const gulImg = document.querySelector(".gul");
const rodImg = document.querySelector(".rod");
let monsterLista = [];

const monsterType = ["Spuke", "Djur", "Människa"];
const monsterColor = ["Rod", "Blu", "Gron", "Svart", "Gul"];
const monsterAntalOgon = [1, 2, 3, 4, 5];

// Select type option----------------------------
for (type of monsterType) {
  const getType = document.createElement("option");
  getType.innerHTML = type;
  getType.value = type;
  select.appendChild(getType);
}
//  Select color option------------------------
for (color of monsterColor) {
  const getColor = document.createElement("option");
  getColor.innerHTML = color;
  getColor.value = color;
  select2.appendChild(getColor);
  /*  monsterLista.push(color) */
}
let listNum = 1;
let listColor = "";
monsterColor.forEach((color) => {
  listColor += `\n${listNum++}-${color}`;
});

//  Select antal ogon optionn------------------------
for (ogonAntal of monsterAntalOgon) {
  const getAntalOgon = document.createElement("option");
  getAntalOgon.innerHTML = ogonAntal;
  getAntalOgon.value = ogonAntal;
  select3.appendChild(getAntalOgon);
}
//  Select antal arm optionn------------------------
for (antalArm of monsterAntalOgon) {
  const getAntalArm = document.createElement("option");
  getAntalArm.innerHTML = antalArm;
  getAntalArm.value = antalArm;
  select4.appendChild(getAntalArm);
}

// Lista for Monster input-----------------
let ListaLenght = 0;
const skapaMonster = () => {
  ListaLenght++;
  let li = document.createElement("li");
  li.innerHTML = `<br><br>Name: ${inp2.value}<br><br>Type: ${select.value}<br><br>Color: ${select2.value}
  <br><br>antalOgon: ${select3.value}<br><br>antalArm: ${select4.value}`;
  ul.appendChild(li);
  if (ListaLenght > 1) {
    ul.removeChild(li);
    alert("Play agian");
    window.location.reload();
  }
  /* Option for backgrund color */
  if (select2.value === "Rod") {
    ul.classList.add("bakgrundRod");
  }
  if (select2.value === "Blu") {
    ul.classList.add("bakgrundBlu");
  }
  if (select2.value === "Gul") {
    ul.classList.add("bakgrundGul");
  }
  if (select2.value === "Svart") {
    li.classList.add("bakgrundSvart");
  }
  if (select2.value === "Gron") {
    ul.classList.add("bakgrundGron");
  }
  inp2.value = "";
};

const sökaMonster = () => {
  if (inp.value === "Rod") {
    rodImg.classList.remove("rod");
  }
  if (inp.value === "Svart") {
    svartImg.classList.remove("svart");
  }
  if (inp.value === "Gul") {
    gulImg.classList.remove("gul");
  }
  if (inp.value === "Blu") {
    bluImg.classList.remove("blu");
  }
  if (inp.value === "Gron") {
    gronImg.classList.remove("gron");
  }
  if (inp.value === "Gron") {
    ul.classList.remove("gron");
  } if(listColor.includes(inp.value) !== true) {
    alert(`Only choose monster by color:- ${listColor}`);
  }
  inp.value = "";
};
/* result fuction which output result */
function sökaMonsterResult(e) {
  if (inp.value.length > 0) {
    e.preventDefault();
    sökaMonster();
  }
}
/* result fuction which output result */
function skapaMonsterResult(e) {
  if (inp2.value.length > 0) {
    e.preventDefault();
    skapaMonster();
  }
}
/* Search output result */
btn.addEventListener("click", sökaMonsterResult);
btn2.addEventListener("click", skapaMonsterResult);
