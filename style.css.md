``` python
/* ================= RESET ================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", system-ui, sans-serif;
}

/* ================= BODY ================= */
body {
  min-height: 100vh;
  background: radial-gradient(circle at top, #432b57, #020617);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8fafc;
}

/* ================= PANTALLAS ================= */
.screen {
  display: none;
  width: 100%;
  max-width: 420px;
  background: rgba(15, 23, 42, 0.9);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  text-align: center;
  animation: fade 0.4s ease;
}

.screen.active {
  display: block;
}

/* ================= ANIMACION ================= */
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================= TEXTOS ================= */
h1, h2 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 12px;
  line-height: 1.4;
}

.thanks {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* ================= INPUT ================= */
input, select {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 12px;
  border: none;
  outline: none;
  background: #281152;
  color: #f8fafc;
  font-size: 1rem;
}

/* ================= BOTONES ================= */
button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #7d3bf6, hsl(276, 39%, 53%));
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

button:hover {
  transform: scale(1.03);
  opacity: 0.95;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ================= LISTA JUGADORES ================= */
ul {
  list-style: none;
  margin-top: 10px;
}

li {
  background: #020617;
  padding: 10px 12px;
  border-radius: 12px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* boton eliminar */
.btn-eliminar {
  width: auto;
  padding: 4px 6px;
  font-size: 0.7rem;
  border-radius: 8px;
  background: #ef4444;
}

/* ================= PALABRA ================= */
#palabraSecreta {
  margin: 20px 0;
  padding: 25px;
  font-size: 1.4rem;
  font-weight: bold;
  background: #020617;
  border-radius: 16px;
  cursor: pointer;
}

.blur {
  filter: blur(10px);
}

/* ================= TEMPORIZADOR ================= */
#tiempo {
  font-size: 2.5rem;
  margin: 20px 0;
}

/* ================= VOTACION ================= */
#opcionesVoto button {
  margin-bottom: 8px;
}

/* ================= CONTROL DE VOLUMEN ================= */
#volumeControl {
  position: fixed;
  top: 16px;
  right: 16px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  padding: 8px 12px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  z-index: 999;
}

#volumeControl span {
  font-size: 1rem;
}

#volumeSlider {
  width: 80px;
  cursor: pointer;
}
/* ================= TRANSICIONES ELEGANTES ================= */

/* Transición suave entre pantallas */
.screen {
  opacity: 0;
  transform: scale(0.96) translateY(10px);
  transition:
    opacity 0.45s ease,
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.screen.active {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Suavizar aparición de textos */
h1, h2, p {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

/* Inputs y selects más modernos al focus */
input:focus,
select:focus {
  box-shadow: 0 0 0 2px rgba(125, 59, 246, 0.5);
  transition: box-shadow 0.25s ease;
}

/* Botones más fluidos */
button {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    box-shadow 0.2s ease;
}

button:hover {
  box-shadow: 0 12px 30px rgba(125, 59, 246, 0.35);
}

/* Palabra secreta con efecto premium */
#palabraSecreta {
  transition:
    filter 0.35s ease,
    transform 0.35s ease,
    background 0.35s ease;
}

#palabraSecreta:hover {
  transform: scale(1.03);
}

/* Botones de votación con animación */
#opcionesVoto button {
  transition: transform 0.2s ease, background 0.2s ease;
}

#opcionesVoto button:hover {
  transform: scale(1.04);
}
```
