# 🔍 EL IMPOSTOR 🕵️

Juego interactivo de deducción social inspirado en dinámicas de impostor, desarrollado como proyecto académico utilizando tecnologías web.

---

## 📝 Descripción del Proyecto

**El Impostor** es un juego multijugador local en el que los participantes reciben una palabra secreta perteneciente a una categoría específica, excepto uno de ellos: **el impostor**. 

Este proyecto incluye un **sistema de competencia por rondas**, donde los jugadores acumulan puntos para coronar a un ganador final después de una serie de partidas (3 rondas por defecto).

---

## 🎮 ¿Cómo se juega?

1. **Registro:** Se ingresan entre **2 y 10 jugadores**.
2. **Categoría:** Selección de temática (Comida, Lugares, Animales).
3. **Reparto:** El sistema asigna los roles de forma aleatoria.
4. **Privacidad:** Los jugadores tocan la pantalla para revelar su palabra con efecto *blur*.
5. **Debate:** Temporizador de **2:00 minutos** para la ronda de palabras.
6. **Votación:** El grupo decide quién es el impostor.
7. **Puntuación:** Los puntos se acumulan ronda tras ronda.
8. **Ganador Final:** Al finalizar la 3ra ronda, se anuncia al campeón absoluto.

---

## 📂 Estructura del Proyecto

```text
El-Impostor/
│
├─ README.md           # Documentación principal del proyecto
└─ public/             # Carpeta principal que contiene la aplicación
   ├─ index.html       # Estructura base y control de pantallas (SPA)
   ├─ style.css        # Estética, animaciones y efectos visuales
   ├─ script.js        # Lógica del juego, rondas y puntuación
   ├─ palabras.js      # Diccionario de palabras por categoría
   └─ musica.mp3       # Ambientación sonora del juego

⚙️ Descripción de Archivos (Directorio /public)
index.html: Es el esqueleto del juego. Contiene todas las pantallas (.screen) organizadas en una sola página (SPA). Al estar dentro de la carpeta public, sirve como el punto de entrada principal del código fuente.

style.css: Define la estética "Dark Mode". Incluye las animaciones de las tarjetas, el efecto de desenfoque (blur) para la privacidad y los estilos responsivos.

script.js: El motor principal del juego. Gestiona la lógica de los turnos, el sistema de votación, el temporizador y el cálculo de puntuaciones acumuladas entre rondas.

palabras.js: Base de datos local que contiene los listados de palabras organizados por categorías.

musica.mp3: Recurso multimedia que proporciona la ambientación sonora durante toda la experiencia de juego.

🛠️ Tecnologías Utilizadas
HTML5 / CSS3: Estructura y diseño moderno.

JavaScript (Vanilla JS): Lógica pura librerías externas para un rendimiento óptimo.

👥 Créditos del Proyecto
Desarrollador: Gabriela Lopez

Música: Victor Zerpa

Arte y Animación: Arianna Escalona & Elian Garcia

Mentoría: Prof. Gabriel Baute
