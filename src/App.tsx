import { useState } from "react";

import {} from "@headlessui/react";
import useZustandStore from "./zustandStore";

function App() {
  const [inputValue, setInputValue] = useState("");
  // const { addListItem, list } = useZustandStore((store) => store);

  return (
    <div className="App">
      {/* {list.map((item) => (
        <p>{item}</p>
      ))}
      <hr />
      <input
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <button
        onClick={() => {
          addListItem(inputValue);
          setInputValue("");
        }}
      >
        ADD
      </button> */}
      <div style={{ margin: 16 }}>
        <button style={{ color: "red" }}>Clear</button>
      </div>
    </div>
  );
}

export default App;
