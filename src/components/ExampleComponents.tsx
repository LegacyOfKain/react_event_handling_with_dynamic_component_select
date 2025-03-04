import { useState } from "react";

export const HelloWorld = () => {
  return <div className="example-component">Hello, World!</div>;
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="example-component">
      <h3>Counter Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export const UserInfo = () => {
  return (
    <div className="example-component">
      <h3>User Information</h3>
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
      <p>Role: Administrator</p>
    </div>
  );
};

export const ColorPicker = () => {
  const [color, setColor] = useState("#3498db");

  return (
    <div className="example-component">
      <h3>Color Picker</h3>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          margin: "10px auto",
        }}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>Selected color: {color}</p>
    </div>
  );
};
