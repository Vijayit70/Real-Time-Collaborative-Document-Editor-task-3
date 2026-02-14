import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("receive-changes", (data) => {
      setText(data);
    });

    return () => {
      socket.off("receive-changes");
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    socket.emit("send-changes", value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Real-Time Collaborative Editor</h1>
      <textarea
        rows="10"
        cols="60"
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
      />
    </div>
  );
}

export default App;
