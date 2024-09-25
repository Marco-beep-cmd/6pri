// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Escuchame", time: 7 },

  { text: "JOAQUIN", time: 180 },
  { text: "URIEL", time: 182 },
  { text: "ORLEANS", time: 184 },
  { text: "CHAYANNE", time: 185 },
  { text: "DIGO", time: 186 },
  { text: "JHAIR", time: 187 },
  { text: "BROMITA HIJO ☺️", time: 188 },
  { text: "SAYURI", time: 190 },
  { text: "ALESKA", time: 192 },
  { text: "DANAE", time: 194 },
  { text: "PRISCILA", time: 196 },
  { text: "ALEJANDRA", time: 198 },
  { text: "ROMINA", time: 200 },
  { text: "BRISEIDA", time: 210 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);