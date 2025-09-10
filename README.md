# Appli de Léna — PWA (Offline + A2HS)

Este paquete está listo para **GitHub Pages** y funciona **offline**:
- `manifest.webmanifest` (A2HS / iconos)
- `service-worker.js` (cache-first + fallback)
- `icons/*` (192/512 + maskable + apple-touch)
- `index.html` (registra SW y muestra un banner “Instalar”)
- `.github/workflows/pages.yml` (deploy automático)
- `.nojekyll` y `README.md`

## Publicar en GitHub Pages
1. Crea un repositorio (p.ej. `appli-de-lena`).
2. Sube **todo** este paquete en la rama `main` (en la raíz).
3. Ve a **Settings → Pages** y usa **GitHub Actions** como fuente.
4. Haz un push a `main`. Al terminar, abre la URL de Pages.

## Instalar en el teléfono/iPad
- **Android/Chrome**: abre la URL, verás el banner `Installer` o el menú “Agregar a pantalla de inicio”.
- **iOS Safari**: pulsa `Compartir → Añadir a pantalla de inicio`. (Apple ignora el banner; usa el botón del sistema).

> Nota: la app usa React por CDN; el SW intenta cachear esos recursos para uso **offline** después del primer uso online.
