
//ejercicio mouseOver
let imagen = document.getElementById('imagen');
imagen.addEventListener("mouseover", function (){

 
  //creo un boton para promocion
  let promocionBoton = document.createElement("button");
  //edito el contenido del boton
  promocionBoton.innerHTML = "quiero saber mas de la promocion"; 
  //agrego el boton
  document.body.appendChild(promocionBoton);

  //voy a crear un form para que rellene un dato
  promocionBoton.addEventListener("click", function(){
    let datos = document.createElement('form');
    datos.innerHTML='<input placeholder="nombre" type="text"></input><button type="sumbit">enviar </button>';
    document.body.appendChild(datos);
  
  //formulario
  datos.onsubmit = function(event){
    //evito q se recargue la pagina
    event.preventDefault();
    const input = event.target.children;
    //creo link para comunicarse por whatsapp
    let link = document.createElement('a');
    link.innerHTML = '<a href="https://api.whatsapp.com/send?phone=2612167506&text=hola%20soy">ir a whatsapp</a>'
    document.body.appendChild(link);
  }
  })
    

})


  
