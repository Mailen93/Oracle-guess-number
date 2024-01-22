let numeroSecreto = 6;
let numeroUsuario;
let intentos = 1;
let maximosIntentos = 3;
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un número del 1 al 10 por favor:");

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    alert(
      intentos == 1
        ? `Acertaste, el número secreto es ${numeroSecreto}. ¡Bravo, lo hiciste en un intento!`
        : `Acertaste, el número secreto es ${numeroSecreto}. Lo hiciste en ${intentos} intentos`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    intentos += 1;
    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
      break;
    }
  }
}
