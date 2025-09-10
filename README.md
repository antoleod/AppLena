# Appli de Léna (GitHub Pages)

Site **statique** listo para publicar en **GitHub Pages**.  
Incluye: menú por iconos (sin scroll), Matemáticas (Multiplications con recompensas 🦄), Lectura (cloze y frases mezcladas) y Orthographe (placeholders).

## Cómo publicar en GitHub Pages

1. Crea un repo nuevo en GitHub, por ejemplo: `appli-de-lena`.
2. Sube *estos archivos* al **root** del repo:
   - `index.html`
   - `.github/workflows/pages.yml`
3. Ve a **Settings → Pages**, confirma que la fuente es **GitHub Actions** (por el workflow).
4. Haz un commit/push a `main`. El workflow desplegará y te dará una URL tipo:
   `https://TU_USUARIO.github.io/appli-de-lena/`.

> Alternativa: si no quieres usar Actions, puedes desactivar el workflow y en **Settings → Pages** elegir **Deploy from a branch** (branch `main`, carpeta `/ (root)`).

## Desarrollo local (opcional)
Como es una página estática, basta con abrir `index.html` en el navegador.  
Si quieres un servidor local: `npx serve .` y abre `http://localhost:3000`.

## Personalización rápida
- **Textos/bancos**: edita `CLOZE_BANK` y `SCRAMBLE_BANK` en `index.html`.
- **Colores/estilos**: ajusta el `<style>` en `index.html`.
- **Más materias**: duplica un submenú en el código React inline y crea tus juegos.

¡Listo!