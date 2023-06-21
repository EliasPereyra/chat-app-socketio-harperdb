import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Socket, io } from "socket.io-client";

import Home from "./pages/Home";

import "./App.css";
import NotFound from "./pages/NotFound";

const socketInstance: Socket = io("http://localhost:4000");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              username={username}
              setUsername={setUsername}
              room={room}
              setRoom={setRoom}
              socket={socketInstance}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
