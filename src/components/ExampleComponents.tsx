import { ChangeEvent, useState } from "react";

export const HelloWorld = () => {
  return <div className="example-component">Hello, World!</div>;
};

export const TextOnChange = () => {
  const [form, setForm] = useState({ fullname: "Amar Kaushik", age: 25 });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e);
  }

  return (
    <div className="example-component">
      <h3>Text OnChange Component</h3>
      <input value={form.fullname} onChange={handleChange} />
      <input value={form.age} onChange={handleChange} />
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
