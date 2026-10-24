
# OWMAD.MA | عوامد.ما
### منصة الفوترة للمقاول الذاتي المغربي

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Demo Live:** [https://owmad.vercel.app](https://owmad.vercel.app)
**Official:** [https://owmad.ma](https://owmad.ma)

---

### 🇲🇦 العربية

**عوامد.ما** هي أول منصة مغربية 100% للمقاول الذاتي لإنشاء الفواتير و Devis و Bon de livraison بشكل احترافي، بدون أنترنيت.

**المميزات الرئيسية:**
- 📄 **PDF Offline:** إنشاء الفواتير بـ jsPDF بدون الحاجة للسيرفر، يعمل حتى بدون أنترنيت
- 💬 **WhatsApp Integration:** إرسال الفاتورة مباشرة للزبون عبر واتساب بضغطة واحدة
- 🆔 **ICE & Auto-entrepreneur:** حقول جاهزة لـ ICE, IF, RC,ICE الخاص بالمقاول الذاتي مطابق للقانون المغربي
- 🎨 **تصميم احترافي:** قوالب جاهزة بالعربية والفرنسية
- 📱 **PWA:** يعمل كتطبيق على الهاتف

### 🇫🇷 Français

**Owmad.ma** est la première plateforme marocaine 100% dédiée à l'Auto-Entrepreneur pour créer des factures, devis et bons de livraison.

**Fonctionnalités:**
- 📄 **PDF Offline:** Génération PDF côté client avec jsPDF, fonctionne sans internet
- 💬 **WhatsApp:** Envoi direct de la facture au client via WhatsApp
- 🆔 **ICE & Auto-entrepreneur:** Champs conformes ICE, IF, RC pour le Maroc
- 🎨 **Design Pro:** Templates en FR / AR
- 📱 **PWA Ready**

### 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **PDF:** jsPDF + html2canvas
- **Deployment:** Vercel
- **MCP Server:** ifni-halle-mcp-server (in /app)

### 🚀 How to run / كيفاش تخدم بيه

```bash
# 1. Clone
git clone https://github.com/imadtaji14-prog/owmad.git
cd owmad

# 2. Install
npm install

# 3. Run dev
npm run dev

# Open http://localhost:3000
