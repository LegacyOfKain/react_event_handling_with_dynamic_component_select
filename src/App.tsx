import { ComponentType, FC, useState } from "react";
import "./App.css";

import * as ExampleComponents from "./components/ExampleComponents";
import ComponentSelector from "./components/component-selector.tsx";

function App() {
  const [selectedComponent, setSelectedComponent] = useState<string>("");

  // Create a mapping of component names to their respective components
  const components: Record<string, ComponentType<FC>> = {
    HelloWorld: ExampleComponents.HelloWorld,
    TextOnChange: ExampleComponents.TextOnChange,
    UserInfo: ExampleComponents.UserInfo,
    ColorPicker: ExampleComponents.ColorPicker,
  };

  // Dynamically render the selected component
  const DynamicComponent: ComponentType<FC> | null = selectedComponent
    ? components[selectedComponent]
    : null;

  return (
    <div className="app-container">
      <h1>Dynamic Component Selector</h1>

      <ComponentSelector
        components={components}
        onSelectComponent={setSelectedComponent}
      />

      <div className="component-display">
        {DynamicComponent ? (
          <div className="selected-component">
            <h2>{selectedComponent}</h2>
            <DynamicComponent />
          </div>
        ) : (
          <p>Please select a component from the dropdown or list</p>
        )}
      </div>
    </div>
  );
}

export default App;
