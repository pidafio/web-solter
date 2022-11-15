 
 
 
 
 const grilla={
  id:"id",
  img:"img",
  descripcion:"descripcion",
  precio: "precio",

 }

function articuloNuevo (img,descripcion,precio){

const montajeGrilla=document.querySelector(".grilla__Procuto");
const nuevaGrilla=  
       `<div class="grilla__Procuto">
            <div class="img__paraGrilla" ><img class="imgGrilla" src="${img}"></div>
            <div class="grilla__descripcion">  Descripcion: <p class="texto__grilla-descripcion"> 
             ${descripcion}</p></div>
            <h2 class="grilla__precio">Precio ${precio}</h2>
            <button class="grilla__btnComprar">COMPRAR</button>
        </div> `;
montajeGrilla.insertAdjacentHTML('afterend',nuevaGrilla);
console.log(crearGrilla) 
}
articuloNuevo()