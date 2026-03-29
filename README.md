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
VITE_API_URL=http://localhost:3000

VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
VITE_IMGBB_API_KEY=your_imgbb_api_key
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
