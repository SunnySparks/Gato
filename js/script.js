//Mis variables para validaciones
var x1 = false;
var x2 = false;
var x3 = false;
var x4 = false;
var x5 = false;
var x6 = false;
var x7 = false;
var x8 = false;
var x9 = false;

var o1 = false;
var o2 = false;
var o3 = false;
var o4 = false;
var o5 = false;
var o6 = false;
var o7 = false;
var o8 = false;
var o9 = false;

var gato0 = new Array(3);
gato0[0] = "";
gato0[1] = "";
gato0[2] = "";

var gato1 = new Array(3);
gato1[0] = "";
gato1[1] = "";
gato1[2] = "";

var gato2 = new Array(3);
gato2[0] = "";
gato2[1] = "";
gato2[2] = "";

var gato = new Array(3);
gato[0] = gato0;
gato[1] = gato1;
gato[2] = gato2;

//Para activar que el jugador haya ganado
if (jugadorGana == true) {
    alert("Has ganado");
}
var jugadorGana = false;
var turno = 0;
var CPUGana = false;

//Funciones para activar los clicks del usuario
var cuadro1 = document.getElementById('uno');
cuadro1.addEventListener("click", ponTache1);

//cuadro1.addEventListener("click", otraValidacion);
var cuadro2 = document.getElementById("dos");
cuadro2.addEventListener("click", ponTache2);

//cuadro2.addEventListener("click", otraValidacion);
var cuadro3 = document.getElementById("tres");
cuadro3.addEventListener("click", ponTache3);

//cuadro3.addEventListener("click", otraValidacion);
var cuadro4 = document.getElementById("cuatro");
cuadro4.addEventListener("click", ponTache4);

//cuadro4.addEventListener("click", otraValidacion);
var cuadro5 = document.getElementById("cinco");
cuadro5.addEventListener("click", ponTache5);

//cuadro5.addEventListener("click", otraValidacion);
var cuadro6 = document.getElementById("seis");
cuadro6.addEventListener("click", ponTache6);

//cuadro6.addEventListener("click", otraValidacion);
var cuadro7 = document.getElementById("siete");
cuadro7.addEventListener("click", ponTache7);

//cuadro7.addEventListener("click", otraValidacion);
var cuadro8 = document.getElementById("ocho");
cuadro8.addEventListener("click", ponTache8);

//cuadro8.addEventListener("click", otraValidacion);
var cuadro9 = document.getElementById("nueve");
cuadro9.addEventListener("click", ponTache9);

//cuadro9.addEventListener("click", otraValidacion);
//e es el objeto del evento
//this es el objeto que activó el evento (document.getElementById, en este ejemplo)

//Estas funciones van a activar el juego
function ponTache1(){
    document.getElementsByTagName("img")[0].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x1 = true;
    siGanaJ();
    siGanaCPU();
};

function ponTache2(){
    document.getElementsByTagName("img")[2].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x2 = true;
    siGanaJ();
    siGanaCPU();
};

function ponTache3(){
    document.getElementsByTagName("img")[4].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x3 = true;
    siGanaJ();
    siGanaCPU();
};

function ponTache4(){
    document.getElementsByTagName("img")[6].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x4 = true;
    siGanaJ();
    siGanaCPU();
};

function ponTache5(){
    document.getElementsByTagName("img")[8].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x5 = true;
    siGanaJ();
    siGanaCPU();
};

function ponTache6(){
    document.getElementsByTagName("img")[10].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x6 = true;
    siGanaJ();
    siGanaCPU();
};

function ponTache7(){
    document.getElementsByTagName("img")[12].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x7 = true;
    siGanaJ();
    siGanaCPU();
};

function ponTache8(){
    document.getElementsByTagName("img")[14].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x8 = true;
    siGanaJ();
    siGanaCPU();
};

function ponTache9(){
    document.getElementsByTagName("img")[16].style.display = "block";
    valid();
    circuloAleatorio();
    turno++;
    x9 = true;
    siGanaJ();
    siGanaCPU();
};

//Esta función activa el turno de la máquina
var aleatorio = "";
//Con esta se crea la imagen en la casilla aleatoria
function circuloAleatorio(){
    numeroAleatorio();
    otraValidacion();
    document.getElementsByTagName("img")[aleatorio].style.display = "block";
    oTrue();
};
//Con esta función validamos que no haya conflictos
function otraValidacion(){
while (document.getElementsByTagName("img")[aleatorio].style.display == "block" || document.getElementsByTagName("img")[aleatorio-1].style.display == "block") {
    aleatorio = "";
    numeroAleatorio();
}}
//Con esta función activamos el número que va a elegir la máquina
function numeroAleatorio(){
    aleatorio = Math.floor((Math.random() * (17-1))+1);
    if (aleatorio %2 === 0) {
        numeroAleatorio();
    }else{
        aleatorio = aleatorio;
        validacion = aleatorio;
        //console.log(aleatorio);
    }

}

//Con esta función haré la validación de la máquina
var validacion = "";


function valid() {
    if (x1 == true) {
        aleatorio = "";
        numeroAleatorio();
    }else if (x2 == true){
        aleatorio = "";
        numeroAleatorio();
    }else if (x3 == true){
        aleatorio = "";
        numeroAleatorio();
    }else if (x4 == true){
        aleatorio = "";
        numeroAleatorio();
    }else if (x5 == true){
        aleatorio = "";
        numeroAleatorio();
    }else if (x6 == true){
        aleatorio = "";
        numeroAleatorio();
    }else if (x7 == true){
        aleatorio = "";
        numeroAleatorio();
    }else if (x8 == true){
        aleatorio = "";
        numeroAleatorio();
    }else if (x9 == true){
        aleatorio = "";
        numeroAleatorio();
    }
}


if (x1 == false) {
    
}
if (x2 == false) {
    
}
if (x3 == false) {
    
}
if (x4 == false) {
    
}
if (x5 == false) {
    
}
if (x6 == false) {
    
}
if (x7 == false) {
    
}
if (x8 == false) {
    
}
if (x9 == false) {
    
}

/*var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");*/

function siGanaJ(){
if (turno >= 3) {
if (x1 == true && x2 == true && x3 == true) {
    jugadorGana = true;
}
if (x1 == true && x4 == true && x7 == true) {
    jugadorGana = true;
}

if (x1 == true && x5 == true && x9 == true) {
    jugadorGana = true;
}

if (x2 == true && x5 == true && x8 == true) {
    jugadorGana = true;
}

if (x3 == true && x6 == true && x9 == true) {
    jugadorGana = true;
}

if (x4 == true && x5 == true && x6 == true) {
    jugadorGana = true;
}

if (x7 == true && x8 == true && x9 == true) {
    jugadorGana = true;
}

if (x3 == true && x5 == true && x7 == true) {
    jugadorGana = true;
}

if (jugadorGana == true) {
    alert("Has ganado");
}
}
}
//Con esta función 
function oTrue(){
    if (aleatorio == 1) {
        o1 = true;
    }else if (aleatorio == 3) {
        o2 = true;
    }else if (aleatorio == 5) {
        o3 = true;
    }else if (aleatorio == 7) {
        o4 = true;
    }else if (aleatorio == 9) {
        o5 = true;
    }else if (aleatorio == 11) {
        o6 = true;
    }else if (aleatorio == 13) {
        o7 = true;
    }else if (aleatorio == 15) {
        o8 = true;
    }else if (aleatorio == 17) {
        o9 = true;
    }
}
function siGanaCPU(){
    if (turno >= 3) {
    if (o1 == true && o2 == true && o3 == true) {
        CPUGana = true;
    }
    if (o1 == true && o4 == true && o7 == true) {
        CPUGana = true;
    }
    
    if (o1 == true && o5 == true && o9 == true) {
        CPUGana = true;
    }
    
    if (o2 == true && o5 == true && o8 == true) {
        CPUGana = true;
    }
    
    if (o3 == true && o6 == true && o9 == true) {
        CPUGana = true;
    }
    
    if (o4 == true && o5 == true && o6 == true) {
        CPUGana = true;
    }
    
    if (o7 == true && o8 == true && o9 == true) {
        CPUGana = true;
    }
    
    if (o3 == true && o5 == true && o7 == true) {
        CPUGana = true;
    }
    
    if (jugadorGana == true) {
        CPUGana = false;
    }
    if (CPUGana == true) {
        alert("Te han ganado");
    }
    }
    }