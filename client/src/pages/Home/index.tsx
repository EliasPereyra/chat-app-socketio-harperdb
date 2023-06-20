import React from "react";
import { Socket, io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function Home({
  username,
  setUsername,
  room,
  setRoom,
  socket,
}: {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  room: string;
  setRoom: React.Dispatch<React.SetStateAction<string>>;
  socket: Socket;
}) {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    }

    navigate("/chat", { replace: true });
  };

  return (
    <section className="container">
      <h1 className="home-title">Home</h1>

      <div className="form">
        <input
          value={username}
          className="input-home"
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <select className="input-home" onChange={e => setRoom(e.target.value)}>
          <option>Select a room</option>
          <option value="php">PHP</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="ruby">Ruby</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
        </select>
        <button onClick={joinRoom}>Join room</button>
      </div>
    </section>
  );
}
