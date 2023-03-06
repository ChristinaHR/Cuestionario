let test = [
  {
    // --------------------------COMIENZA CATEGORIA VIDEOJUEGOS-----------------------------
    categoria: "Videojuegos",
    imagen: ["img.png"],
    preguntas: [
      {
        tipo: "simple",
        pregunta: " Empecemos con algo sencillo. ¿Qué cometido tiene tu personaje al empezar la aventura?",
        respuestas: [
          {
            respuesta: "Reavivar la Primera Llama",
            correcto: "",
          },
          {
            respuesta: "Encontrar a los Señores de la Ceniza para que reaviven la Primera Llama",
            correcto: "true",
          },
          {
            respuesta: "Crear una nueva nación de No Muertos",
            correcto: "",
          },
          {
            respuesta: "Destruir el ciclo de Edades del Fuego y Edades de la Oscuridad",
            correcto: "",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: " ¿Cuál es el único GOTY que tiene FromSoftware?",
        respuestas: [
          {
            respuesta: "Elden Ring",
            correcto: "",
          },
          {
            respuesta: "Dark Souls 3",
            correcto: "",
          },
          {
            respuesta: "Sekiro: Shadows Die Twice",
            correcto: "true",
          },
          {
            respuesta: "Demon Souls",
            correcto: "",
          },
        ],
      },
      {
        tipo: "multi",
        pregunta: " ¿Por qué lugares de los anteriores Dark Souls pasa tu Latente?",
        respuestas: [
          {
            respuesta: "Anor Londo",
            correcto: "true",
          },
          {
            respuesta: "Santuario de Enlace de Fuego",
            correcto: "true",
          },
          {
            respuesta: "Horno de la Primera Llama",
            correcto: "true",
          },
          {
            respuesta: "Ninguno, todas las localizaciones son nuevas",
            correcto: "",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: " ¿Quién es el villano principal de Dark Souls 3?",
        respuestas: [
          {
            respuesta: "Alma de Cenizas",
            correcto: "",
          },
          {
            respuesta: "Aldrich, el Devorador de Dioses",
            correcto: "",
          },
          {
            respuesta: "No hay ningún villano",
            correcto: "true",
          },
          {
            respuesta: "El Abismo, descontrolado por el frágil estado de la 1ª Llama",
            correcto: "",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: " ¿Por qué Aldrich es parecido a Gwyndolin?",
        respuestas: [
          {
            respuesta: "Porque lo devoró para hacerse mas fuerte",
            correcto: "true",
          },
          {
            respuesta: "Porque es descendiente directo del mismo",
            correcto: "",
          },
          {
            respuesta: "Porque es el máximo representante de la Luna Oscura y fué recompensado con la forma de un Dios",
            correcto: "",
          },
          {
            respuesta: "Porque es la reencarnación Gwyndolin realizada para conservar el poder del mismo",
            correcto: "",
          },
        ],
      },
      {
        tipo: "multi",
        pregunta: " ¿Cuál es uno de los significados de este personaje (ya sea como enemigo o fantasma aliado)?",
        respuestas: [
          {
            respuesta: "Representar a Miyazaki y su amor por las katanas",
            correcto: "",
          },
          {
            respuesta: "Ser tan tryhards que van desnudos y usando la katana larga al hacer PvP",
            correcto: "true",
          },
          {
            respuesta: "Una manera de FromSoftware de decir: sabemos que sois malos, así que tomad un ayudante poderoso para el boss",
            correcto: "",
          },
          {
            respuesta: "Es una broma-parodia dirigida a la comunidad de Dark Souls 1",
            correcto: "true",
          },
        ],
      },
      {
        tipo: "multi",
        pregunta: " ¿De dónde obtienen los Vigilantes del Abismo su poder?",
        respuestas: [
          {
            respuesta: "De sangre",
            correcto: "true",
          },
          {
            respuesta: "Del poder de la 1ª Llama",
            correcto: "",
          },
          {
            respuesta: "De su estatus de No muertos (no pueden morir del todo así que no pueden ser derrotados)",
            correcto: "",
          },
          {
            respuesta: "Sus almas son una con la del maestro de la sangre del lobo",
            correcto: "true",
          },
        ],
      },
      {
        tipo: "multi",
        pregunta: " ¿Cuál es el objetivo de la boda con Anri de Astora?",
        respuestas: [
          {
            respuesta: "Limpiar sus pecados para enlazar la llama",
            correcto: "",
          },
          {
            respuesta: "Obtener su ayuda al luchar contra el Alma de ceniza",
            correcto: "",
          },
          {
            respuesta: "Obtenemos los pecados suficientes para convertirnos en huecos y manifestar el máximo poder oscuro",
            correcto: "true",
          },
          {
            respuesta: "Convertirse en el señor oscuro",
            correcto: "true",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: " ¿Cuál es el papel de Iudex Gundyr dentro del juego?",
        respuestas: [
          {
            respuesta: "Impedirnos el paso",
            correcto: "",
          },
          {
            respuesta: "Matarnos",
            correcto: "",
          },
          {
            respuesta: "Juzgarnos",
            correcto: "true",
          },
          {
            respuesta: "Reclutarnos",
            correcto: "",
          },
        ],
      },
      {
        tipo: "multi",
        pregunta: " ¿Qué necesitas para dañar a Yhorm el gigante?",
        respuestas: [
          {
            respuesta: "Un milagro especial concedido por Siegward de Catarina",
            correcto: "",
          },
          {
            respuesta: "El portador de las tormentas, un arma única creada para matar gigantes",
            correcto: "true",
          },
          {
            respuesta: "Un arma cualquiera",
            correcto: "true",
          },
          {
            respuesta: "La ayuda de un NPC muy poderoso",
            correcto: "",
          },
        ],
      }
    ],
  },
// --------------------------FIN CATEGORIA VIDEOJUEGOS-----------------------------
{

  // --------------------------COMIENZA CATEGORIA ANIME-----------------------------
categoria: "Anime",
imagen: ["img.png"],
preguntas: [
  {
    tipo: "simple",
    pregunta: " Todos sabemos que Jaeger en alemán es cazador, pero ¿sabes qué significa Eren y en qué idioma está?",
    respuestas: [
      {
        respuesta: "Santo / Turco",
        correcto: "true",
      },
      {
        respuesta: "Demonio / Hebreo",
        correcto: "",
      },
      {
        respuesta: "Héroe / Turco",
        correcto: "",
      },
      {
        respuesta: "Hijo / Hebreo",
        correcto: "",
      },
    ],
  },
  {
    tipo: "simple",
    pregunta: " ¿Qué número ocupaba el rey Karl Fritz en la descendencia real?",
    respuestas: [
      {
        respuesta: "Era el 136° rey",
        correcto: "",
      },
      {
        respuesta: "Era el 145° rey",
        correcto: "true",
      },
      {
        respuesta: "Era el 126° rey",
        correcto: "",
      },
      {
        respuesta: "Era el 147° rey",
        correcto: "",
      },
    ],
  },
  {
    tipo: "multi",
    pregunta: " ¿Qué personajes son Jaegeristas?",
    respuestas: [
      {
        respuesta: "Rico Brzenska, Hitch Dreyse, Floch Forster y Levi Ackerman",
        correcto: "",
      },
      {
        respuesta: "Eren Jaeger, Zeke Jaeger y Yelena",
        correcto: "true",
      },
      {
        respuesta: "Floch Forster, Samuel, Daz, Oliver, Sasha Blouse, Armin Arlet y Mikasa Ackerman ",
        correcto: "",
      },
      {
        respuesta: "Rico Brzenska, Hitch Dreyse, Surma, Wim, Louise, Holger, Floch Forster, Samuel, Daz, y Oliver",
        correcto: "true",
      },
    ],
  },
  {
    tipo: "simple",
    pregunta: " Nombre de la revista en donde se publica el manga:",
    respuestas: [
      {
        respuesta: "Weekly Shonen Jump",
        correcto: "",
      },
      {
        respuesta: "Shonen Magazine",
        correcto: "",
      },
      {
        respuesta: "Bessatsu Shonen Magazine",
        correcto: "true",
      },
      {
        respuesta: "Weekly Manga Time",
        correcto: "",
      },
    ],
  },
  {
    tipo: "simple",
    pregunta: " ¿Cuál es el nombre de la primera esposa de Grisha Jaeger?",
    respuestas: [
      {
        respuesta: "Carla Jaeger",
        correcto: "",
      },
      {
        respuesta: "Dina Fritz",
        correcto: "true",
      },
      {
        respuesta: "Frieda Reiss",
        correcto: "",
      },
      {
        respuesta: "Faye Jaeger",
        correcto: "",
      },
    ],
  },
  {
    tipo: "multi",
    pregunta: " ¿Qué personajes pueden usar La Coordenada?",
    respuestas: [
      {
        respuesta: "Eren Jaeger",
        correcto: "true",
      },
      {
        respuesta: "Historia Reiss",
        correcto: "",
      },
      {
        respuesta: "Zeke Jaeger",
        correcto: "true",
      },
      {
        respuesta: "Ymir Fritz",
        correcto: "",
      },
    ],
  },
  {
    tipo: "multi",
    pregunta: " ¿Cuál es la relación que tiene Mikasa Ackerman con Eren Jaeger?",
    respuestas: [
      {
        respuesta: "Son un par de amigos",
        correcto: "",
      },
      {
        respuesta: "Se gustan mutuamente",
        correcto: "true",
      },
      {
        respuesta: "Medio hermanos",
        correcto: "",
      },
      {
        respuesta: "Hermanos adoptivos",
        correcto: "true",
      },
    ],
  },
  {
    tipo: "multi",
    pregunta: " ¿Quién ha poseído el Titán Mandíbula?",
    respuestas: [
      {
        respuesta: "Porco Galliard",
        correcto: "true",
      },
      {
        respuesta: "Eren Jaeger",
        correcto: "",
      },
      {
        respuesta: "Falco Grice",
        correcto: "true",
      },
      {
        respuesta: "Ymir",
        correcto: "true",
      },
    ],
  },
  {
    tipo: "simple",
    pregunta: " ¿En qué año se estrenó el anime de Shingeki no Kyojin?",
    respuestas: [
      {
        respuesta: "2011",
        correcto: "",
      },
      {
        respuesta: "2012",
        correcto: "",
      },
      {
        respuesta: "2013",
        correcto: "true",
      },
      {
        respuesta: "2014",
        correcto: "",
      },
    ],
  },
  {
    tipo: "multi",
    pregunta: " ¿Qué titanes posee actualmente Eren Jaeger?",
    respuestas: [
      {
        respuesta: "Titán de Ataque",
        correcto: "true",
      },
      {
        respuesta: "Titán Martillo de Guerra",
        correcto: "true",
      },
      {
        respuesta: "Titán Bestia",
        correcto: "",
      },
      {
        respuesta: "Titán Fundador",
        correcto: "true",
      },
    ],
  }
],
}
// --------------------------FIN CATEGORIA ANIME-----------------------------
];
export {test};

