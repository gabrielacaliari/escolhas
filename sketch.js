let suaidade;
let corpo;
let gênero;
let  título = "Bungee Shade";
let ação;
let aventura;
let RPG;
let jogos = {
  menor10:{
    ação: "Minecraft",
    aventura: "Freddi Fish Series",
    RPG: "Pokemon Let's Go"
  },
  entre10e14:{
    ação: "Fortnite",
    aventura: "Zelda",
    RPG: "Final Fantasy VII Remake"
  },
  entre14e16:{
    ação: "GTA IV",
    aventura: "Assassin's Creed Odyssey",
    RPG: "Cyberpunk 2077"
  },
  entre16e18:{
    ação: "GTA V",
    aventura: "The Sims",
    RPG: "The Witcher"
  },
  maior18:{
    ação: "Carteira de Trabalho",
    aventura: "Carpir um lote",
    RPG: "Para de ser nerdola"
  }
};

let botao;

function setup() {
  createCanvas(850, 400).position(100,100);
 título = "Bungee Outline";
  corpo =  "Amatic SC";
  gênero = "Bebas Neue";
  createSpan("Qual a sua idade? 🐣").position(580,530).addClass("esconde");
  suaidade = createInput("").position(590,585).addClass("esconde");
  ação = createCheckbox("Você gosta de jogos de ação? 🐱‍👤").position(100,600).addClass("esconde");
  RPG = createCheckbox("Você gosta de jogos de RPG? 🎀").position(100,650).addClass("esconde");
  aventura = createCheckbox("Você gosta de jogos de aventura? 🐛").position(100,700).addClass("esconde");
  
  botao = createButton("APERTA MEU BOTÃO 😳").position(width/2, 520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}

function bota(){
  selectAll('.esconde').forEach((el) => el.removeClass('esconde'));
  botao.hide();
}

function draw() {
  background("white");
  let idade = parseInt(suaidade.value());
  let checkação = ação.checked();
  let checkaventura = aventura.checked();
  let checkRPG = RPG.checked();
  let jogo = "Insira suas preferências";
  if (suaidade.value() !== ""){
  jogo = mostrajogo(idade, checkação, checkaventura, checkRPG)
}
   fill("purple");
  stroke("pink");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("Melhor Indicador de Jogos 2024", width/2, 30);
  textFont(corpo);
  
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
  textFont(título);
  
}

function mostrajogo(idade, checkação, checkaventura, checkRPG){
  if (isNaN(idade)){
  return "Idade Inválida"
  }
  if (idade < 5){
    return "Sai daqui, você é uma criança🏼🍼"
  } else
    if (idade > 120){
      return "Já morreu, enterra 💀"
    }
  if (idade >= 5 && idade < 10){
   if (checkação){
     return jogos["menor10"]["ação"];
   } 
    if (checkaventura){
     return jogos["menor10"]["aventura"];
   } 
    if (checkRPG){
     return jogos["menor10"]["RPG"];
   } 
  }
 else if (idade >= 10 && idade < 14){
   if (checkação){
     return jogos["entre10e14"]["ação"];
   } 
    if (checkaventura){
     return jogos["entre10e14"]["aventura"];
   } 
    if (checkRPG){
     return jogos["entre10e14"]["RPG"];
   } 
  }
  else if (idade >= 14 && idade < 16){
   if (checkação){
     return jogos["entre14e16"]["ação"];
   } 
    if (checkaventura){
     return jogos["entre14e16"]["aventura"];
   } 
    if (checkRPG){
     return jogos["entre14e16"]["RPG"];
   } 
  }
  else if (idade >= 16 && idade < 18){
   if (checkação){
     return jogos["entre16e18"]["ação"];
   } 
    if (checkaventura){
     return jogos["entre16e18"]["aventura"];
   } 
    if (checkRPG){
     return jogos["entre16e18"]["RPG"];
   } 
  }
 else if (idade >= 18){
   if (checkação){
     return jogos["maior18"]["ação"];
   } 
    if (checkaventura){
     return jogos["maior18"]["aventura"];
   } 
    if (checkRPG){
     return jogos["maior18"]["RPG"];
   } 
  } return "Coloca alguma coisa";
 }





