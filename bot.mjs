```python
import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMembers
  ],
  partials: ["CHANNEL"]
});

client.login(process.env.DISCORD_TOKEN);

client.once("ready", () => {
  console.log(`🤖 Bot conectado como ${client.user.tag}`);
});

const palabras = ["Playa", "Hospital", "Escuela", "Aeropuerto", "Parque", "Banco"];

// La palabra 'export' es clave aquí
export async function crearPartida(jugadores) {
  if (!jugadores || jugadores.length < 3) {
    console.log(" Se necesitan al menos 3 jugadores");
    return;
  }

  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  const impostorIndex = Math.floor(Math.random() * jugadores.length);
  const impostor = jugadores[impostorIndex];

  console.log("🎮 Palabra de la partida:", palabra);
  console.log("🕵️ Impostor:", impostor);

  for (const nombre of jugadores) {
    const miembro = await buscarUsuarioPorNombre(nombre);
    if (!miembro) {
      console.log(" Usuario no encontrado en Discord:", nombre);
      continue;
    }

    if (nombre === impostor) {
      miembro.send("😈 ¡Sos el IMPOSTOR! Fingí que sabés la palabra.");
    } else {
      miembro.send(`✅ La palabra es: ${palabra}`);
    }
  }
}

async function buscarUsuarioPorNombre(nombre) {
  try {
    const guildId = process.env.GUILD_ID;
    const guild = await client.guilds.fetch(guildId);
    await guild.members.fetch();
    return guild.members.cache.find(
      member => member.user.username.toLowerCase() === nombre.toLowerCase()
    )?.user || null;
  } catch (error) {
    console.error("Error buscando usuario:", error);
    return null;
  }
}
```
