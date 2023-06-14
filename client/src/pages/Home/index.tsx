import "./styles.css";

export default function Home() {
  return (
    <section className="container">
      <h1 className="home-title">Home</h1>

      <div className="form">
        <input className="input-home" type="text" placeholder="Username" />
        <select className="input-home">
          <option>Select a room</option>
          <option value="php">PHP</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="ruby">Ruby</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
        </select>
        <button>Join room</button>
      </div>
    </section>
  );
}
