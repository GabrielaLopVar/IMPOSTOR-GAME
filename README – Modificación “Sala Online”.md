# 🕹️ El Impostor – Expansión Online

Esta modificación agrega la posibilidad de conectar múltiples dispositivos a una misma sala virtual, permitiendo que los jugadores se agreguen fácilmente a la partida local.

## 🔧 Requisitos previos

1. **Cuenta en Firebase** (gratuita): https://firebase.google.com
2. Crear un proyecto en Firebase y habilitar **Firestore Database**.
3. Obtener las credenciales de configuración (objeto `firebaseConfig`).

## 📦 Instalación

1. Reemplaza el objeto `firebaseConfig` en el código agregado con los datos de tu proyecto Firebase.
2. Inserta el bloque de código en `index.html` justo antes de `</body>`.
3. Asegúrate de que los archivos `style.css`, `script.js` y `palabras.js` existan y estén correctamente vinculados.

## 🚀 Uso

1. Abre la página en el dispositivo del **anfitrión**.
2. En la pantalla de jugadores, haz clic en **"Conectar Online"** y luego en **"Crear sala"**.
3. Comparte el código de 6 dígitos con los demás jugadores.
4. Cada jugador, desde su propio dispositivo, abre la misma URL y:
   - Va a **"Conectar Online"** → **"Unirse a sala"**.
   - Ingresa el código y su nombre.
5. El anfitrión ve cómo aparecen los nombres en la lista.
6. Presiona **"Agregar a la partida"** para incorporarlos a la lista local.
7. Continúa con la configuración normal del juego (categoría, palabras, etc.).

## ⚠️ Notas importantes

- La comunicación es en tiempo real mediante Firestore.  
- Si el anfitrión cierra la sala, los demás dispositivos quedan desconectados automáticamente.  
- Límite de 10 jugadores (máximo definido por el juego original).  
- Se recomienda usar **Firebase en modo producción** y ajustar las reglas de seguridad (no incluidas en este ejemplo).

## 🛠 Personalización

Puedes modificar:
- Longitud del código de sala (función `generarCodigoSala`).
- Nombre por defecto del anfitrión.
- Comportamiento al agregar jugadores (por ejemplo, evitar duplicados).

---

¡Disfruta de **El Impostor** con amigos, estén donde estén! 🎉