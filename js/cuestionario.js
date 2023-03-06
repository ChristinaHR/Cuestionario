import { test } from "./test.js";

window.onload = function () {
  // Creamos referencias
  let nav = document.querySelector("nav");
  let seccionCuestionario = document.querySelector(".cuestionario");

  let contadorCategoria = 0;
  let contadorPregunta = 0;
  let contadorRespuesta = 0;

  for (let categoria of test) {
    contadorCategoria += 1;
    // Crear los divs que contienen la elección de cada categoría
    let divEleccionCategoria = document.createElement("div");
    divEleccionCategoria.classList.add("eleccion-categoria");
    divEleccionCategoria.innerHTML += `<input type="radio" name="categoria" id="categoria${contadorCategoria}">
        <label for="categoria${contadorCategoria}">${categoria.categoria}</label>`;

    divEleccionCategoria.firstElementChild.addEventListener("change",eleccionCategoria);
    nav.appendChild(divEleccionCategoria);
  }

  let cuestionario = [];

  function eleccionCategoria() {
    // Elegir que categoría quieres mostrar
    if (document.querySelector(".entrada"))
      document.querySelector(".entrada").remove();
    let categoria = this.nextElementSibling.textContent;
    cuestionario = test.filter((elementos) =>
      elementos.categoria.includes(categoria)
    );

    //Se elimina el contenido del cuestionario
    seccionCuestionario.innerHTML = "";

    for (let categoria of cuestionario) {
      let br = document.createElement("br");
      br.textContent = categoria.categoria;
      seccionCuestionario.appendChild(br);

      contadorPregunta = 0;
      contadorRespuesta = 0;
      // Se crean las preguntas en relación a la categoría que hayas elegido
      for (let preguntas of categoria.preguntas) {
        let h5 = document.createElement("h5");
        h5.textContent = `${contadorPregunta + 1}.` + preguntas.pregunta;
        contadorPregunta += 1;

        // Divs para poder personalizar las respuestas y las preguntas por separado
        let divpreguntas = document.createElement("div");
        divpreguntas.className="divPreguntasPersonalizado";
        seccionCuestionario.appendChild(divpreguntas);
        divpreguntas.appendChild(h5);

        let divrespuestas = document.createElement("div");
        divrespuestas.className="divRespuestasPersonalizado";
        seccionCuestionario.appendChild(divrespuestas);

        // Se crean las respuestas de cada pregunta
        for (let respuesta of preguntas.respuestas) {
          contadorRespuesta += 1;
          let input = document.createElement("input");
          let label = document.createElement("label");

          input.name = `pregunta${contadorPregunta}`;
          input.id = `pregunta${contadorRespuesta}`;

          //Corregir test
          if(respuesta.correcto=="true"){
            input.setAttribute("value","true");
          }else{
            input.setAttribute("value","false");
          }

          label.setAttribute("for", `pregunta${contadorRespuesta}`);
          label.textContent = respuesta.respuesta;

          if(preguntas.tipo=="simple"){
              input.type="radio";
          }else{
            input.type="checkbox";
          }
          divrespuestas.appendChild(input);
          divrespuestas.appendChild(label);
        }
      }
    }

    // Crear boton para corregir el test
    let divBoton= document.createElement("div")
    let boton= document.createElement("button");
    boton.addEventListener("click", corregir);
    let divEspaciado=document.createElement("div");

    divEspaciado.className= "divEspaciado"
    divBoton.className = "divBoton";
    boton.textContent="Corregir";

    seccionCuestionario.appendChild(divBoton);
    divBoton.appendChild(boton);
    seccionCuestionario.appendChild(divEspaciado);    
  }

  // Función que corrige el test
  function corregir(){
      let respuestas = document.querySelectorAll(".divRespuestasPersonalizado input");
      let correctas=0;
      
      for(let inputs of respuestas){
        if(inputs.checked && inputs.value=="true"){
          correctas+=1;
        }
      }

      let divCorrecion = document.createElement("div");
      divCorrecion.className="divCorrecion";
      divCorrecion.textContent= "Has acertado " + correctas;
      seccionCuestionario.appendChild(divCorrecion);
      
      // Para evitar que si le sigues dando al botón de corregir, sigan apareciendo los resultados una y otra vez
      let seleccionarBoton = document.querySelector("button");
      seleccionarBoton.removeEventListener("click",corregir);
      // Esto sirve para que cuando le des al botón corregir te llevará directamente a las respuestas acertadas sin tener que scrollear tú con el mouse hasta ellas
      window.scrollTo(0, document.body.scrollHeight);
  }
      divEspaciado.appendChild(divCorrecion);

};


