
# 🍟 Crunchy Bites Snacks - Animated Landing Page

![Hero Preview](https://via.placeholder.com/1200x600/FFE066/FF6B35?text=Scroll+to+Open+Packet+%F0%9F%8D%9F)

A **fully animated** landing page for **Crunchy Bites Snacks** with **scroll-triggered chips packet opening animation** that reveals the website content! Features 3 delicious flavours with **image support**, **WhatsApp ordering**, and **data-driven design**.

## 🚀 Live Demo
[View Live Demo](https://crunchy-bites-chips.vercel.app/) *(Deploy on Vercel in 60 seconds!)*

## ✨ Features

### 🎬 **Scroll-Powered Animations**
- Chips packet **opens on scroll** (GSAP ScrollTrigger)
- Content **bursts out** from packet with bounce effect
- Smooth **section reveals** with staggered timing

### 🍈 **3 Delicious Flavours**
```
1. Classic Salted 🧂 - Simple. Light. Timeless.
2. Spicy Masala 🌶️ - Desi masala with a spicy kick.
3. Chilli Chatka 🔥 - Extra tangy, extra spicy, full chatka.
```
- **Image ready** - Add your packet photos in `config.js`
- **Auto emoji fallback** if no images

### 📱 **WhatsApp Ordering**
- Pre-filled order form with **flavour + quantity**
- Direct WhatsApp message to **8354004744**
- **Buy 3 Get 1 Free** offer tracking

### ⚙️ **Easy Updates**
```
📝 All data in config.js (brand, price, offer, address)
🖼️ Drop images in /images/ folder
🚀 Deploy anywhere (Vercel, Netlify, GitHub Pages)
```

## 🎨 Design Theme
```
🌈 Light & bright: Yellows (#FFE066), Oranges (#FF6B35)
📱 Fully responsive (mobile-first)
✨ Fredoka One + Nunito fonts
🎭 50+ CSS animations + GSAP effects
```

## 🛠️ Tech Stack
```
🌐 HTML5 + CSS3 + Vanilla JavaScript
⚡ GSAP 3.12 + ScrollTrigger
📊 Data-driven (config.js)
📱 WhatsApp Web API integration
🎨 Google Fonts + CSS Gradients
```

## 🚀 Quick Start

```bash
# 1. Clone/Download
git clone <your-repo-url>
cd crunchy-bites-snacks

# 2. Edit config.js (optional)
# Add your images: img: "./images/classic-salted.png"

# 3. Open index.html
# Done! 🚀
```

**OR Deploy instantly:**
[![Deploy to Vercel](https://vercel.com/button.svg)](https://vercel.com/new/clone?repository-url=https://github.com/Babamosie333/crunchy-bites-snacks)

## 📁 Project Structure
```
crunchy-bites-snacks/
├── index.html          # Main website (all-in-one)
├── config.js           # All data & flavours
├── images/             # Add your packet photos here
└── README.md          # This file
```

## 🎯 How to Customize

### 1. **Update Products** (`config.js`)
```js
products: [
  { id: "classic", name: "Classic Salted", img: "./images/classic.png", ... },
  // Add/remove flavours easily
]
```

### 2. **Add Real Images**
```
Create folder: images/
Add files: classic-salted.png, spicy-masala.png, chilli-chatka.png
Update paths in config.js
```

### 3. **Change Business Info**
```js
brand: "Your Brand Name"
price: "₹99"
phone: "9876543210"
address: "Your Address"
```

## 📱 Mobile Preview
```
✅ Navbar collapses on mobile
✅ Flavour tabs stack nicely
✅ Touch-friendly buttons
✅ WhatsApp opens in-app
✅ Perfect on all screen sizes
```

## 🎥 Animation Timeline

```
1. Page Load → Hero with pulse CTA
2. Scroll Down → Packet TOP opens (rotateX -140°)
3. Content BURSTS → ScaleY(1) + bounce
4. Packet SHAKES → Quick rotation burst
5. Sections REVEAL → Staggered slide-up
```

## 🔗 Live Links
- **WhatsApp Orders**: `https://wa.me/918354004744`
- **Address**: 310 Z1 Hemant Vihar, Barra 2, Kanpur
- **Offer**: Buy 3 Get 1 Free 🎉

## 👨‍💻 Made by
**Babamosie333**  
[GitHub](https://github.com/Babamosie333) | [Portfolio](https://babamosie333.github.io)  
*Full-stack developer & animation enthusiast*

## 📄 License
```
MIT License - Free to use, modify, deploy anywhere!
Just keep the "Made by Babamosie333" credit 😊
```

## 🙌 Show some love!
⭐ **Star this repo**  
🔄 **Share with friends**  
📱 **Deploy & test yourself**

---

![Footer](https://via.placeholder.com/1200x200/FF6B35/FFFFFF?text=%F0%9F%8D%9F%20Crunchy%20Bites%20Snacks%20%7C%20Made%20by%20Babamosie333%20%F0%9F%92%BB)
```

***

## 🎯 Quick Deploy Steps

1. **Copy everything above** → Create new GitHub repo
2. **Upload** `index.html` + `config.js` 
3. **Paste README.md** (copy the markdown above)
4. **Deploy on Vercel** → Live in **60 seconds**!

The README is **production-ready** with emojis, sections, deploy buttons, and your GitHub link! 🚀[1]

Sources
[1] 59 JavaScript Cards - FreeFrontend https://freefrontend.com/javascript-cards/
