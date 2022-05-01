import { useState } from "react";
export const Form = () => {
  const [username, setUsername] = useState("");
  const [area, setArea] = useState("");
  //const [country, setCountry] = useState('');
  function handleSubmit(event) {
    var newLine = "\r\n";
    event.preventDefault();
    var msg = `Name : ${username}`;
    msg += newLine;
    msg += `Area : ${area}`;
    alert(msg);
  }
  const padding = {
    padding: "20px",
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <br />
        <label style={padding}>Area</label>
        <input value={area} onChange={(event) => setArea(event.target.value)} />
        <br/>
        <label style={padding}>Country</label>
        <select>
            <option>India</option>
            <option>Other</option>
        </select>
      </div>
      <button type="sumbit">Submit</button>
    </form>
  );
};
