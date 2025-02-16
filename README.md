# Speech-to-Text MERN App

## 📌 Overview

This is a full-stack MERN application that converts speech to text using the **Google Speech-to-Text API**. Users can record their voice or upload an audio file, and the application processes the audio, transcribes it into text, and displays the result.

## 🚀 Features

- 🎙️ Record audio directly in the browser
- 📤 Upload audio files for transcription
- 🔄 Convert speech to text using Google Speech-to-Text API
- 📁 Store transcriptions in MongoDB
- 🖥️ Full-stack MERN implementation (MongoDB, Express.js, React.js, Node.js)

## 🛠️ Tech Stack

- **Frontend**: React.js, React Media Recorder
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Speech Processing**: Google Speech-to-Text API

## 🌐 Live Demo

- **Frontend**: [Speech-to-Text App](https://speech-to-text-xi-ruby.vercel.app/)
- **Backend**: [Speech-to-Text API](https://speech-to-text-backend-k978.onrender.com)

## 📂 Folder Structure

```
root
│── backend
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── node_modules
│   ├── .env
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│── frontend
│   ├── node_modules
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── utils
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.js
│── README.md
```

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/garvbahal/Speech_to_text.git
cd speech-to-text-mern
```

### 2️⃣ Set Up the Backend

```sh
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add your Google API key:

```
MONGO_URI=your_mongo_db_uri
GOOGLE_CREDENTIALS_PATH=your_google_credentials_path
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```sh
node index.js
```

### 3️⃣ Set Up the Frontend

```sh
cd ../frontend
npm install
npm start
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

### 📧 Contact

For any inquiries, reach out to **Garv Bahal** at **garvbahal75@gmail.com** or connect on **[[LinkedIn](https://www.linkedin.com/in/garv-bahal/)]**.
