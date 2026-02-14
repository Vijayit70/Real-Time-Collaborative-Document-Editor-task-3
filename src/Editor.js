import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
const documentId = "shared-doc";

function Editor() {
  const [content, setContent] = useState("");

  useEffect(() => {
    socket.emit("get-document", documentId);

    socket.on("load-document", (data) => {
      setContent(data);
    });

    socket.on("receive-changes", (data) => {
      setContent(data);
    });

    return () => socket.disconnect();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);
    socket.emit("send-changes", value);
    socket.emit("save-document", value);
  };

  return (
    <textarea
      value={content}
      onChange={handleChange}
      style={{
        width: "100%",
        height: "100vh",
        padding: "20px",
        fontSize: "16px",
      }}
    />
  );
}

export default Editor;
