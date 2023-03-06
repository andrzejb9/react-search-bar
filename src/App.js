import { useState } from "react";
import "./App.css";
import data from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {data
        // eslint-disable-next-line array-callback-return
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, index) => {
          return (
            <div className="user" key={index}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
