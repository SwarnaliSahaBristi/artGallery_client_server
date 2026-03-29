# 🎨 ARTIFY – Client (Frontend)

🔗 **Live Site:** https://artify22.netlify.app/

---

## 🌟 Overview

ARTIFY is a modern artwork showcase platform where users can explore, interact with, and enjoy creative artworks in a visually engaging environment.

---

## ✨ Features

* 🖼️ Dynamic artwork gallery
* 🔍 Detailed artwork pages
* ❤️ Like & interaction system
* 📱 Fully responsive design
* 🔔 Real-time notifications
* 🎨 Smooth animations and transitions

---

## 🛠️ Tech Stack

* **Framework:** React
* **Styling:** Tailwind CSS, DaisyUI
* **Routing:** React Router
* **HTTP Client:** Axios
* **Animations:** React Awesome Reveal, React Fast Marquee
* **Icons:** React Icons, Lucide React
* **Notifications:** React Toastify, SweetAlert2
* **Authentication:** Firebase

---

## 📁 Project Setup

### 1️⃣ Clone Repository

```bash
git clone <your-client-repo-link>
cd client
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:5000

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ **Important:**

* Never commit your `.env` file
* Use `.env.example` for sharing structure

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📌 Folder Structure (Example)

```
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── routes/
 ├── providers/
 └── assets/
```

---

## 🚀 Deployment

* Hosted on **Netlify**
* Ensure environment variables are added in Netlify dashboard

---

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first.

---
