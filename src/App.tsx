import { useEffect, useState } from "react";
import CheckboxGroup from "./components/ChcekboxGroup/CheckboxGroup";

function App() {
  const options = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"];
  const [checedList, setCheckedList] = useState<string[]>([]);
  const [column, setColumn] = useState(3);
  return (
    <>
      <CheckboxGroup
        options={options}
        checkList={checedList}
        onChecked={setCheckedList}
        column={column}
      />
      <div className="columns">
        columns:
        <button onClick={() => setColumn((column) => column + 1)}>+</button>
        <input
          type="text"
          value={column}
          onChange={(e) => setColumn(Number(e.target.value))}
        />
        <button onClick={() => setColumn((column) => column - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
