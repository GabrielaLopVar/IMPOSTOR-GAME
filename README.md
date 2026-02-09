# 🔍 _EL IMPOSTOR_ 🕵️

_Juego interactivo de deducción social inspirado en dinámicas de impostor, desarrollado como proyecto académico utilizando tecnologías web._

## _Descripción del Proyecto_

***El Impostor** es un juego multijugador local en el que los participantes reciben una palabra secreta perteneciente a una categoría específica, excepto uno de ellos: **el impostor:***

_El objetivo de los jugadores es descubrir quién es el impostor mediante una ronda de palabras y una votación final, mientras que el impostor debe intentar pasar desapercibido._


##  _¿Cómo se juega?_

_1. Se ingresan entre **2 y 10 jugadores**._
_2. Se selecciona una **categoría**._
_3. El sistema asigna una **palabra secreta** a todos los jugadores excepto al impostor._
_4. Cada jugador ve su palabra de forma individual._
_5. Se inicia un **temporizador** para la ronda de juego._
_6. Al finalizar el tiempo, se realiza una **votación**._
_7. El juego muestra si el impostor fue descubierto o no._


## _Funcionalidades Principales_

- _Asignación aleatoria de impostor_
- _Categorías con palabras dinámicas_
- _Control de turnos por jugador_
- _Temporizador de juego_
- _Sistema de votación_
- :Música de fondo_
- _Diseño moderno y elegante tipo tarjetas_
- _Interfaz responsive y animaciones suaves_


## _Tecnologías Utilizadas_

- ***HTML5***
- ***CSS3***
- ***JavaScript (Vanilla JS)***


## _Estructura del Proyecto_

```python
El-Impostor
│
├─ index.html → Estructura del juego
├─ style.css → Diseño y estilos
├─ script.js → Lógica del juego
├─ data/
│ └─ palabras.js → Palabras por categoría
├─ assets/
│ └─ musica.mp3 → Música de fondo
└─ README.md → Documentación del proyecto
```

## _Estructura y Descripción de Archivos_

 ###  _index.html_

_Es el archivo principal del proyecto. Contiene la estructura base del juego y define todas las pantallas que se muestran durante la partida._

_En este archivo se encuentran:_

- _Las distintas secciones del juego (agradecimientos, inicio, jugadores, categorías, palabra secreta, temporizador, votación y resultado)._
- _El elemento <audio> para la música de fondo._

  ### _La conexión con los archivos externos:_
  
- _style.css para los estilos._
- _script.js para la lógica del juego._
- _data/palabras.js para las palabras por categoría._

_Este archivo no contiene lógica compleja, sino que sirve como base visual y estructural del proyecto._

##  _style.css_

_Archivo encargado del diseño visual y la estética del juego._

_Incluye:_

- _Reset de estilos para asegurar consistencia entre navegadores._
- _Diseño moderno tipo tarjetas centradas._
- _Paleta de colores oscura con gradientes._
- _Animaciones suaves de entrada entre pantallas._

_Estilos para:_

- _Botones_
- _Inputs_
- _Listas de jugadores_
- _Palabra secreta con efecto blur_
- _Temporizador_
- _Control visual de volumen_

_El objetivo del archivo es ofrecer una experiencia visual elegante, limpia y moderna, sin afectar la funcionalidad del juego._

## _script.js_

_Archivo principal de lógica del juego, escrito en JavaScript puro._

_Se encarga de:_

- _Controlar la navegación entre pantallas._
- _Gestionar la lista de jugadores (agregar y eliminar)._

_Seleccionar aleatoriamente:_

- _La palabra secreta._
- _El impostor._
- _Controlar los turnos de cada jugador._
- _Evitar que se vea la palabra antes de tiempo._
- _Manejar el temporizador de juego._
- _Procesar la votación final._
- _Mostrar el resultado (si el impostor fue descubierto o no)._
- _Reproducir la música de fondo tras la primera interacción del usuario._

_Todo el código está organizado por secciones para facilitar su lectura y mantenimiento._

## _data/_

_Esta carpeta esta destinada a almacenar información estática del juego._

##  _palabras.js_

_Contiene un objeto con listas de palabras organizadas por categorías, por ejemplo:_

- - _Comida_
- - _Lugares_
- - _Animales_

_Esto permite:_

_Ampliar fácilmente el juego._
_Agregar nuevas categorías o palabras sin modificar la lógica principal._

## _assets/_

_Esta carpeta de los recursos multimedia del proyecto. Lo que incluye:_

_Archivo de música de fondo (musica.mp3)._
