String.prototype.replaceAt = function (index, character) {
    return (
      this.substr(0, index) + character + this.substr(index + character.length)
    );
  };

  const palabras = ["desarrollador", "programador", "javascript", "ahorcado"];
  
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  let palabraConGuiones = palabra.replace(/./g, "_ ");
  let contadorFallos = 0;
  
  
  document.querySelector("#output").innerHTML = palabraConGuiones;


  function enter() {
          
    const letra = document.querySelector("#letra").value.toLowerCase();
    let haFallado = true;
    for (const i in palabra) {
      if (letra == palabra[i]) {
        palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
        haFallado = false;
      }
    }
  
    if(haFallado){
      contadorFallos++;
      document.querySelector('#ahorcado').style.
      backgroundPosition = -(230*contadorFallos) + 'px 0'
      if(contadorFallos == 5){
        document.querySelector('#perdiste').style.display = 'flex';
      }
    }
    else{
        if(palabraConGuiones.indexOf('_') <0){
            document.querySelector('#ganaste').style.display = 'flex';
            
        }
    }
  
    document.querySelector("#output").innerHTML = palabraConGuiones;
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
  }
  
  
  document.querySelector("#volver").addEventListener("click", () => {
    window.location.reload()

  })
  
  document.querySelector("#volver2").addEventListener("click", () => {
    window.location.reload()
  })
  
  document.querySelector("#verificar").addEventListener("click", () => {
      enter();
  });

  document.querySelector("#letra").addEventListener("keydown", (ev) => {
      if(ev.code == "Enter") {
          enter();
          
      }
  })