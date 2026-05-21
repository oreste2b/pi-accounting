# Despliegue — PI Accounting

Guía paso a paso para subir el proyecto a GitHub y desplegarlo en Vercel.

> **Tiempo total estimado:** 8–12 minutos.

---

## ⚠️ Antes de empezar — limpiar `.git` fantasma

El sandbox de Claude intentó inicializar git pero el sistema bloqueó los permisos. **Antes de hacer nada**, abre la Terminal en tu Mac:

```bash
cd "/Users/orestesbaratuti/PI Accounting/pi-accounting-web"
sudo rm -rf .git
```

(Te pedirá tu contraseña de macOS. Es seguro — solo borra carpeta vacía.)

---

## Opción A · Automático con `setup.sh` (recomendado)

Desde la Terminal:

```bash
cd "/Users/orestesbaratuti/PI Accounting/pi-accounting-web"
bash setup.sh
```

El script:
1. Verifica que tienes Node y git
2. Limpia el `.git` fantasma
3. Corre `npm install`
4. Hace un build de prueba
5. Inicializa git y crea el primer commit
6. Imprime los comandos exactos para conectar el repo de GitHub

Después solo sigue los pasos que imprima el script y pasa a la sección **2 · Vercel** más abajo.

---

## Opción B · Manual (si prefieres ir paso a paso)

### 1 · GitHub

#### 1.1 Crea el repo
- Ve a https://github.com/new
- **Owner:** `oreste2b`
- **Repository name:** `pi-accounting`
- **Visibility:** Private (recomendado hasta lanzar) o Public
- **NO** marques *"Add a README"*, *"Add .gitignore"* ni *"Choose a license"* — ya los tenemos

Pulsa **Create repository**.

#### 1.2 Push desde tu Mac

```bash
cd "/Users/orestesbaratuti/PI Accounting/pi-accounting-web"

# Instala deps (primera vez)
npm install

# Verifica que arranca
npm run dev          # Abre http://localhost:3000 — Ctrl+C para detener

# Inicializa git
git init -b main
git add -A
git commit -m "feat: initial PI Accounting website"

# Conecta con GitHub (elige UNO de los dos)

# OPCIÓN SSH (si ya tienes claves SSH configuradas con GitHub):
git remote add origin git@github.com:oreste2b/pi-accounting.git

# OPCIÓN HTTPS (más simple, te pedirá usuario + Personal Access Token):
git remote add origin https://github.com/oreste2b/pi-accounting.git

git push -u origin main
```

Si todo va bien, refresca https://github.com/oreste2b/pi-accounting y verás los archivos.

---

### 2 · Vercel

#### 2.1 Importar el proyecto
1. Ve a https://vercel.com/new
2. Inicia sesión con tu cuenta GitHub (si no lo has hecho)
3. En **"Import Git Repository"**, busca `pi-accounting` y pulsa **Import**

#### 2.2 Configuración
Vercel detecta automáticamente Next.js. Deja los valores por defecto:

| Campo | Valor |
|---|---|
| Framework Preset | Next.js |
| Build Command | `next build` *(auto)* |
| Output Directory | `.next` *(auto)* |
| Install Command | `npm install` *(auto)* |
| Root Directory | `./` *(auto)* |

No necesitas variables de entorno para esta primera versión.

Pulsa **Deploy**.

#### 2.3 Esperar el build (~90 segundos)
Verás logs en tiempo real. Cuando termine, te dará una URL como:

```
https://pi-accounting-oreste2b.vercel.app
```

🎉 La web está en producción.

---

### 3 · Dominio personalizado (opcional)

Cuando Pernilla compre `piaccounting.dk`:

1. En Vercel → tu proyecto → **Settings** → **Domains**
2. Añade `piaccounting.dk` y `www.piaccounting.dk`
3. Vercel te muestra los registros DNS necesarios:
   - Para el apex (`piaccounting.dk`): record A → `76.76.21.21`
   - Para `www.`: record CNAME → `cname.vercel-dns.com`
4. Aplica esos registros en el panel del registrador (DK Hostmaster, Simply.com, GratisDNS, etc.)
5. Espera 5–60 min a la propagación. Vercel emite SSL automáticamente.

---

### 4 · Configurar dominio en metadatos

Cuando el dominio funcione, edita estos archivos para que SEO y Open Graph apunten al dominio real:

**`app/layout.tsx`:**
```ts
metadataBase: new URL('https://piaccounting.dk')
```
✅ Ya está configurado así.

**`app/sitemap.ts`** y **`app/robots.ts`:**
```ts
url: 'https://piaccounting.dk'
```
✅ Ya están configurados así.

Si compras un dominio diferente, sustituye el host en esos 3 archivos y vuelve a hacer push — Vercel re-despliega automáticamente.

---

## Workflow continuo

A partir de aquí, cada cambio sigue este ciclo:

```bash
# Edita lo que sea
git add -A
git commit -m "feat: cambio X"
git push
```

Vercel detecta el push y re-despliega automáticamente.

Para preview de ramas:
```bash
git checkout -b feature/algo
git push -u origin feature/algo
```
Vercel genera una URL de preview única para esa rama.

---

## Checklist final pre-lanzamiento

- [ ] Sustituir email placeholder `pernilla@piaccounting.dk` por el real
- [ ] Sustituir Cal.com URL placeholder por el real
- [ ] Sustituir LinkedIn URL
- [ ] Añadir CVR-nummer en `components/Footer.tsx`
- [ ] Foto real de Pernilla (usar `next/image` con `/public/portrait.jpg`)
- [ ] Configurar dominio `piaccounting.dk`
- [ ] Persondatapolitik + cookie-politik reales (obligatorio en DK / GDPR)
- [ ] Verificar Google Search Console
- [ ] Activar Analytics (Vercel Web Analytics integrado o GA4)
- [ ] Testear en móvil real (iOS Safari + Android Chrome)
- [ ] Lighthouse audit (objetivo: 95+ en todas las métricas)

---

## Soporte

Si algo falla en el build, lo más común es:

| Error | Solución |
|---|---|
| `Cannot find module 'lenis'` | Borra `node_modules` y `package-lock.json`, vuelve a `npm install` |
| `EACCES` al hacer `rm -rf .git` | Usa `sudo rm -rf .git` |
| Build pasa local pero falla en Vercel | Revisa que la versión de Node sea ≥18 en Vercel (Settings → General → Node.js Version) |
| Fuentes de Google no cargan | Verifica que `next/font/google` no esté bloqueado por firewall/VPN |
