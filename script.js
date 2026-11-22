let palavras = [

{
nome:"CPU",
linha:0,
coluna:0,
direcao:"horizontal"
},

{
nome:"RAM",
linha:2,
coluna:0,
direcao:"horizontal"
},

{
nome:"CACHE",
linha:4,
coluna:0,
direcao:"horizontal"
},

{
nome:"ROM",
linha:6,
coluna:0,
direcao:"horizontal"
},

{
nome:"DATABUS",
linha:8,
coluna:0,
direcao:"horizontal"
},

{
nome:"ADDRESSBUS",
linha:10,
coluna:0,
direcao:"horizontal"
},



{
nome:"ULA",
linha:0,
coluna:2,
direcao:"vertical"
},

{
nome:"UC",
linha:0,
coluna:5,
direcao:"vertical"
},

{
nome:"DMA",
linha:2,
coluna:7,
direcao:"vertical"
},

{
nome:"FLASH",
linha:1,
coluna:9,
direcao:"vertical"
},

{
nome:"EEPROM",
linha:3,
coluna:11,
direcao:"vertical"
},

{
nome:"REGISTRADORES",
linha:0,
coluna:12,
direcao:"vertical"
}

];



let tamanho = 13;



function criarTabuleiro(){


let tabuleiro = document.getElementById("tabuleiro");



for(let linha = 0; linha < tamanho; linha++){


    for(let coluna = 0; coluna < tamanho; coluna++){



        let input = document.createElement("input");


        input.classList.add("casa");


        input.dataset.linha = linha;

        input.dataset.coluna = coluna;



        let usado = false;



        palavras.forEach(palavra=>{


            if(palavra.direcao=="horizontal"){


                if(

                linha == palavra.linha &&

                coluna >= palavra.coluna &&

                coluna < palavra.coluna + palavra.nome.length

                ){

                    usado=true;

                }


            }



            else{


                if(

                coluna == palavra.coluna &&

                linha >= palavra.linha &&

                linha < palavra.linha + palavra.nome.length

                ){

                    usado=true;

                }

            }



        });




        if(!usado){


            input.disabled=true;

            input.classList.add("bloqueada");


        }



        tabuleiro.appendChild(input);



    }


}



}





function conferir(){



let acertos = 0;



palavras.forEach(palavra=>{


let resposta="";



for(let i=0;i<palavra.nome.length;i++){


let linha = palavra.linha;

let coluna = palavra.coluna;



if(palavra.direcao=="horizontal"){

    coluna += i;

}

else{

    linha += i;

}




let campo=document.querySelector(

`input[data-linha="${linha}"][data-coluna="${coluna}"]`

);



resposta += campo.value.toUpperCase();



}




if(resposta == palavra.nome){


acertos++;


for(let i=0;i<palavra.nome.length;i++){


let linha=palavra.linha;

let coluna=palavra.coluna;


if(palavra.direcao=="horizontal"){

coluna+=i;

}

else{

linha+=i;

}



let campo=document.querySelector(

`input[data-linha="${linha}"][data-coluna="${coluna}"]`

);



campo.classList.add("certa");

}



}



else{


for(let i=0;i<palavra.nome.length;i++){


let linha=palavra.linha;

let coluna=palavra.coluna;


if(palavra.direcao=="horizontal"){

coluna+=i;

}

else{

linha+=i;

}



let campo=document.querySelector(

`input[data-linha="${linha}"][data-coluna="${coluna}"]`

);



campo.classList.add("errada");


}



}



});




document.getElementById("contador").innerHTML=

acertos+"/12";




if(acertos==12){


document.getElementById("mensagem").innerHTML=

"🚀 SISTEMA RESTAURADO! Você dominou a Arquitetura Computacional!";


}

else{


document.getElementById("mensagem").innerHTML=

"⚡ Continue tentando, agente digital!";


}



}





function reiniciar(){


let campos=document.querySelectorAll(".casa");



campos.forEach(campo=>{


campo.value="";


campo.classList.remove("certa");

campo.classList.remove("errada");



});



document.getElementById("contador").innerHTML="0/12";


document.getElementById("mensagem").innerHTML="";



}





criarTabuleiro();