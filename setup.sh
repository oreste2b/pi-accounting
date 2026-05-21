#!/usr/bin/env bash
# PI Accounting — One-shot local setup + GitHub push
# Run from inside the pi-accounting-web/ folder

set -e

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PI Accounting · Local setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ─── 1. Sanity checks ─────────────────────────
if ! command -v node &> /dev/null; then
  echo "✗ Node.js no está instalado. Instala desde https://nodejs.org/ (v18 o superior)"
  exit 1
fi
if ! command -v git &> /dev/null; then
  echo "✗ git no está instalado."
  exit 1
fi

NODE_VERSION=$(node -v)
echo "✓ Node $NODE_VERSION"
echo "✓ git $(git --version | awk '{print $3}')"
echo ""

# ─── 2. Clean leftover .git (from sandbox attempt) ────────
if [ -d ".git" ]; then
  echo "→ Limpiando .git existente (puede pedir contraseña de sudo)..."
  rm -rf .git 2>/dev/null || sudo rm -rf .git
fi

# ─── 3. Install dependencies ────────────────────
echo "→ Instalando dependencias (esto tarda ~30s)..."
npm install --silent

# ─── 4. Local build test ─────────────────────────
echo "→ Verificando que el build pasa..."
npm run build > /tmp/pi-build.log 2>&1 || {
  echo "✗ Build falló. Revisa /tmp/pi-build.log"
  tail -30 /tmp/pi-build.log
  exit 1
}
echo "✓ Build OK"

# ─── 5. Initialize git ─────────────────────────
echo "→ Inicializando git..."
git init -b main > /dev/null
git config user.email "pernilla@piaccounting.dk"
git config user.name "PI Accounting"
git add -A
git commit -m "feat: initial PI Accounting website

Next.js 14 + TypeScript + Tailwind + Framer Motion + Lenis smooth scroll
One-pager DA with editorial animations.

Sections: Hero, Marquee, Services, Philosophy, About,
Authority (with animated counters), Process, Contact, Footer.

Brand: Midnight ink + Parchment + Nordic ochre.
Animations: text reveals, magnetic CTAs, custom cursor,
parallax portrait, animated metrics, smooth scroll." > /dev/null

echo "✓ Git inicializado y primer commit creado"
echo ""

# ─── 6. GitHub remote ────────────────────────────
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Siguiente paso · GitHub"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1) Crea el repo en GitHub (privado o público):"
echo "   → https://github.com/new"
echo "     Owner: oreste2b"
echo "     Repository name: pi-accounting"
echo "     NO inicialices con README ni .gitignore (ya los tienes)"
echo ""
echo "2) Conecta el remote y haz push:"
echo ""
echo "   git remote add origin git@github.com:oreste2b/pi-accounting.git"
echo "   git push -u origin main"
echo ""
echo "   (Si usas HTTPS en vez de SSH:)"
echo "   git remote add origin https://github.com/oreste2b/pi-accounting.git"
echo "   git push -u origin main"
echo ""
echo "3) Para deploy en Vercel, sigue DEPLOY.md"
echo ""
echo "Listo para correr en local:  npm run dev  (http://localhost:3000)"
echo ""
