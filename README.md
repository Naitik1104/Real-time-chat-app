# Real-Time Chat App

A **Real-Time Chat Application** built using **Node.js**, **Socket.IO**, **React**, and **MongoDB**. This application allows users to communicate in real-time with features like authentication, group chats, and live user tracking.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Real-Time Messaging**: Users can chat in real time using WebSockets.
- **Authentication**: Secure user authentication using a database.
- **Group Chats**: Engage in group conversations seamlessly.
- **Online User Tracking**: See who’s currently online.
- **Responsive Design**: Works on desktop and mobile browsers.

---

## Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: React
- **WebSockets**: Socket.IO for real-time communication
- **Database**: MongoDB (with Mongoose)
- **Styling**: CSS for front-end design

---

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js (v16 or above)
- MongoDB installed and running locally
- Git

### Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/real-time-chat-app.git
2. Navigate to project directory
   cd real-time-chat-app
3. Install dependencies for the backend:
   npm install
4. Set up the environment variables:
  Create a .env file in the server folder.
  Add the following variables:
  
  PORT=5000
  MONGO_URI=mongodb://localhost:27017/chatApp

5.Start the backend server:
  node server.js
6.Navigate to the client folder:
  cd client
7.Install client dependencies:
  npm install
8.Start the React client:
  npm start
