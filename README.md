📌 Project Overview
This project is a Real-Time Collaborative Document Editor that allows multiple users to edit the same document simultaneously. All changes are synchronized instantly across connected clients using Socket.IO, and the document content is persisted in MongoDB to ensure data is not lost on page refresh or server restart.
________________________________________
🚀 Features
•	Real-time collaborative editing
•	Multiple users can edit simultaneously
•	Changes reflect instantly across all browsers
•	Persistent data storage using MongoDB
•	React-based dynamic and responsive UI
•	Node.js backend with WebSocket communication
________________________________________
🛠️ Technologies Used
Frontend
•	React.js
•	Socket.IO Client
•	HTML, CSS, JavaScript
Backend
•	Node.js
•	Express.js
•	Socket.IO
Database
•	MongoDB (using Mongoose)
________________________________________
⚙️ Project Architecture
Frontend (React)
   ↓  (Socket.IO)
Backend (Node.js + Express)
   ↓
MongoDB (Persistent Storage)
________________________________________
📂 Project Structure
task3-collab-editor/
│
├── backend/
│   ├── models/
│   │   └── Document.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   └── App.js
│   └── package.json
________________________________________
🔄 How It Works
1.	User types in the editor
2.	Changes are emitted using Socket.IO
3.	Backend broadcasts changes to all connected users
4.	Content is saved in MongoDB
5.	On page reload or server restart, saved content is loaded from MongoDB
________________________________________
🧠 Data Persistence Explanation
The document content is stored in MongoDB.
Even if the backend server is restarted or the page is refreshed, the document content remains intact because it is fetched from the database when the application starts.
________________________________________
▶️ How to Run the Project
Prerequisites
•	Node.js installed
•	MongoDB running locally
________________________________________
🔹 Start Backend
cd backend
npm install
node server.js
Backend runs on:
http://localhost:5000
________________________________________
🔹 Start Frontend
cd frontend
npm install
npm start
Frontend runs on:
http://localhost:3000
________________________________________
🧪 Testing the Application
•	Open the app in two different browsers or incognito windows
•	Type in one window
•	Changes will appear instantly in the other window
•	Restart backend and refresh page — content will still be available
________________________________________
✅ Task Requirements Fulfilled
Requirement	Status
React / Vue UI	✅
Real-time collaboration	✅
WebSocket / Socket.IO	✅
Backend framework	✅
MongoDB storage	✅
Persistent data	✅
________________________________________
📌 Conclusion
This project demonstrates a full-stack real-time collaborative application using modern web technologies. It successfully fulfills all the requirements of Task 3 by integrating frontend, backend, real-time communication, and persistent database storage.
