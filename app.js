//ejercicio
let boton=document.getElementById('siQuieroBoton');
boton.addEventListener('click', function(){
  //muestro foto de gato
  document.getElementById("gatito").style.display="block";
  //creo un nuevo boton
  let nuevoBoton=document.createElement("button");
  //edito el boton
  nuevoBoton.innerHTML="Quiero mas fotos!";
  //agregando boton 
  document.body.appendChild(nuevoBoton);
  //funcion nuevoBoton
  nuevoBoton.addEventListener('click',function(){
    //muestro foto de gato1
    document.getElementById("gatito1").style.display="block";
    //creo un nuevo boton1
    let nuevoBoton1=document.createElement("button");
    //elimino boton
    nuevoBoton.parentNode.removeChild(nuevoBoton);
    //edito el boton
    nuevoBoton1.innerHTML="Quiero mas fotos!";
    //agregando boton 
    document.body.appendChild(nuevoBoton1);
      //funcion nuevoBoton1
      nuevoBoton1.addEventListener('click',function(){
      //muestro foto de gato2
      document.getElementById("gatito2").style.display="block";
      //creo un nuevo boton2
      let nuevoBoton2=document.createElement("button");
      //elimino boton
      nuevoBoton1.parentNode.removeChild(nuevoBoton1);
      //edito el boton
      nuevoBoton2.innerHTML="Quiero mas fotos!";
      //agregando boton 
      document.body.appendChild(nuevoBoton2);
        //funcion nuevoBoton2
        nuevoBoton2.addEventListener('click',function(){
        //muestro foto de gato3
        document.getElementById("gatito3").style.display="block";
        //creo un nuevo boton3
        let nuevoBoton3=document.createElement("button");
        //elimino boton
        nuevoBoton2.parentNode.removeChild(nuevoBoton2);
        //edito el boton
        nuevoBoton3.innerHTML="Quiero mas fotos!";
        //agregando boton 
        document.body.appendChild(nuevoBoton3);
        //funcion nuevoBoton3
        nuevoBoton3.addEventListener('click',function(){
          alert("cuantas fotos queres???");
        })
      })
    })
  })  
})

let noBoton=document.getElementById('noQuieroBoton');
noBoton.addEventListener('click', function(){
  //creamos elemento parrafo
  let parrafo = document.createElement("p");
  //editamos el texto
  parrafo.innerHTML="<h1>Usted eligio no ver fotos de gatos, eso significa que esta EQUIVOCADO!</h1>";
  //agregamos el elemento
  document.body.appendChild(parrafo);
  //muestro foto de gato
  document.getElementById("gatito").style.display="block";
  //creo un nuevo boton
  let nuevoBoton=document.createElement("button");
  //edito el boton
  nuevoBoton.innerHTML=" NO quiero mas fotos!";
  //agregando boton 
  document.body.appendChild(nuevoBoton);
  //funcion nuevoBoton
  nuevoBoton.addEventListener('click',function(){
    //muestro foto de meme1
    document.getElementById("meme1").style.display="block";
    //creo un nuevo boton1
    let nuevoBoton1=document.createElement("button");
    //elimino boton
    nuevoBoton.parentNode.removeChild(nuevoBoton);
    //elimino parrafo
    parrafo.parentNode.removeChild(parrafo);
    //edito el boton
    nuevoBoton1.innerHTML="Aprendi, quiero otra foto!";
    //agregando boton 
    document.body.appendChild(nuevoBoton1);
      //funcion nuevoBoton1
      nuevoBoton1.addEventListener('click',function(){
      //muestro foto de gato2
      document.getElementById("gatito2").style.display="block";
      //creo un nuevo boton2
      let nuevoBoton2=document.createElement("button");
      //elimino boton
      nuevoBoton1.parentNode.removeChild(nuevoBoton1);
      //elimino meme
      meme1.parentNode.removeChild(meme1);
      //edito el boton
      nuevoBoton2.innerHTML="Quiero mas fotos!";
      //agregando boton 
      document.body.appendChild(nuevoBoton2);
        //funcion nuevoBoton2
        nuevoBoton2.addEventListener('click',function(){
        //muestro foto de gato3
        document.getElementById("gatito3").style.display="block";
        //creo un nuevo boton3
        let nuevoBoton3=document.createElement("button");
        //elimino boton
        nuevoBoton2.parentNode.removeChild(nuevoBoton2);
        //edito el boton
        nuevoBoton3.innerHTML="Quiero mas fotos!";
        //agregando boton 
        document.body.appendChild(nuevoBoton3);
        //funcion nuevoBoton3
        nuevoBoton3.addEventListener('click',function(){
          alert("cuantas fotos queres???");
        })
      })
    })
  })  
})


  
