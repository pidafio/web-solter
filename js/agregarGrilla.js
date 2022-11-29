
function articuloNuevo(){
  const xhttp=  new XMLHttpRequest();
  xhttp.open('GET','../JSON/grillaProductos.json', true);
  xhttp.send();
  xhttp.onreadystatechange= function(){
    if(this.readyState==4 && this.status==200){
       const datosProductos= JSON.parse(this.responseText);
       for(var item of datosProductos){
        console.log(datosProductos)
    const crearGrilla= document.querySelector(".contenedor__grillas");
    const plantilla=  
           `<div class="grilla__Procuto">
                <div class="img__paraGrilla" ><img class="imgGrilla" src="${item.pimg}"></div>
                <div class="grilla__descripcion"> ${item.pnombre} <p class="texto__grilla-descripcion"> 
                 ${item.pdescripcion}</p></div>
                <h2 class="grilla__precio">Precio ${item.pprecio}</h2>
                <button  id="btn" class="grilla__btnComprar">COMPRAR</button>
            </div> `;
    
    crearGrilla.insertAdjacentHTML('afterend',plantilla);
    console.log(crearGrilla) ;

    const btnComprar= document.querySelector("#btn");
   
    btnComprar.addEventListener("click",(e)=>{
         e=window.location.href ="../html/compra-producto.html";
       });
      }
    

    }
  }
};

articuloNuevo();

