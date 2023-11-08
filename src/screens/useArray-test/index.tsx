import { useState } from "react";
import { set } from "husky";

function useArray<A>(persons: A[]) {
  const [value, setValue] = useState(persons);

  return {
    value,
    clear: () => {
      setValue([]);
    },
    removeIndex: (index: number) => {
      if (value.length > 0 && index <= value.length + 1) {
        const copy = [...value];
        copy.splice(index, 1);
        setValue(copy);
      }
    },
    add: (toAdd: A) => {
      setValue([...value, toAdd]);
    },
  };
}

const UseArrayTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "john", age: 33 },
    { name: "abc", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);

  return (
    <div style={{ flex: "column" }}>
      useArrayTest
      <div>
        <button onClick={() => add({ name: "john add", age: 33 })}>
          add john
        </button>
        <button onClick={() => removeIndex(0)}>remove 0</button>
        <button onClick={clear}>clear</button>
      </div>
      <div style={{ flex: "column" }}>
        {value.map((person, indx) => {
          return (
            <div>
              {person.name}:{person.age}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseArrayTest;
