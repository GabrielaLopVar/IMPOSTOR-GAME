# 🔍 EL IMPOSTOR 🕵️

Juego interactivo de deducción social inspirado en dinámicas de impostor, desarrollado como proyecto académico utilizando tecnologías web modernas y lógica de programación avanzada.

---

## 📝 Descripción del Proyecto

**El Impostor** es una aplicación web multijugador de ejecución local. El sistema asigna roles secretos a los participantes basándose en un algoritmo de aleatoriedad, desafiando a los jugadores a usar su capacidad de deducción y engaño.

**Innovación técnica:** Este proyecto implementa un **motor de persistencia de datos temporal** para manejar puntuaciones acumuladas a través de un **ciclo de 3 rondas competitivas**, culminando en una pantalla de Ganador Final con efectos visuales.

---

## 🎮 Flujo del Juego y Sistema de Rondas

1. **Fase de Configuración:** Registro dinámico de 2 a 10 jugadores con validación de nombres.
2. **Selección de Categoría:** El sistema carga diccionarios dinámicos desde `palabras.js`.
3. **Reparto de Roles:** Algoritmo aleatorio que define al impostor en cada ronda.
4. **Revelación Privada:** Sistema de seguridad visual mediante efecto *blur* (clic para revelar).
5. **Fase de Discusión:** Temporizador activo de 2:00 minutos con feedback visual de tensión.
6. **Resolución de Ronda:** Sistema de votación y asignación de puntos:
   - **Inocentes ganan:** +1 punto a cada uno.
   - **Impostor escapa:** +2 puntos al impostor.
7. **Control de Ciclo:** El juego verifica el cumplimiento de las **3 rondas**. Si no se han completado, reinicia el reparto manteniendo los puntos.
8. **Final de Partida:** Ceremonia de premiación y declaración del **Ganador Absoluto**.



---

## ✨ Funcionalidades Técnicas Destacadas

### 🧠 Lógica y Programación
* **Acumulación de Puntos:** Implementación de un objeto JavaScript que persiste los datos durante toda la sesión.
* **Algoritmos de Aleatoriedad:** Uso de `Math.random()` para asegurar que el impostor nunca sea predecible.
* **Arquitectura SPA (Single Page Application):** Gestión de navegación mediante manipulación de clases CSS, optimizando el rendimiento al no requerir recargas de servidor.

### 🎨 Experiencia de Usuario (UX/UI)
* **Responsive Design:** Interfaz adaptada para jugar cómodamente tanto en computadoras como en dispositivos móviles (Tablets/Smartphones).
* **Feedback Auditivo:** Sistema de música ambiental con control de volumen dinámico.
* **Alertas Visuales:** El temporizador utiliza animaciones de escalado y cambio de color en los últimos 10 segundos para aumentar la inmersión.

---

## 📂 Estructura del Proyecto

```text
El-Impostor/
│
├─ README.md           # Documentación técnica completa
└─ public/             # Directorio raíz de la aplicación
   ├─ index.html       # Estructura de pantallas (Inicio, Juego, Votos, Ganador)
   ├─ style.css        # Hoja de estilos (Flexbox, Animaciones, Dark Mode)
   ├─ script.js        # Motor lógico, gestión de rondas y puntos
   ├─ palabras.js      # Base de datos JSON de categorías
   └─ musica.mp3       # Banda sonora ambiental (Loop)

🚀 Escalabilidad y Futuras Mejoras
El proyecto ha sido diseñado de forma modular, lo que permite:

Añadir Categorías: Simplemente agregando objetos al archivo palabras.js.

Personalizar Rondas: Posibilidad de cambiar el límite de 3 rondas fácilmente en el código.

Nuevos Roles: Estructura preparada para añadir roles especiales (como "Detective") en futuras versiones.

🛠️ Stack Tecnológico
HTML5 Semántico: Para una estructura robusta.

CSS3 Avanzado: Uso de Flexbox, variables CSS y filtros de desenfoque.

JavaScript ES6+: Manipulación del DOM, lógica de arrays y temporizadores asíncronos.

👥 Créditos del Proyecto
Desarrollador: Gabriela Lopez

Música: Victor Zerpa

Arte y Animación: Arianna Escalona & Elian Garcia

Mentoría: Prof. Gabriel Baute


---
