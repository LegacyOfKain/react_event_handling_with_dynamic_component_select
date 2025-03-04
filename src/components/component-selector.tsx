import { useState } from "react";
import "./ComponentSelector.css";

// Define the props interface for the ComponentSelector
interface ComponentSelectorProps {
  components: Record<string, React.ComponentType<any>>;
  onSelectComponent: (componentName: string) => void;
}

const ComponentSelector = ({
  components,
  onSelectComponent,
}: ComponentSelectorProps) => {
  const [selectedComponent, setSelectedComponent] = useState<string>("");
  const [viewMode, setViewMode] = useState<"dropdown" | "list">("dropdown");

  const handleComponentChange = (componentName: string) => {
    setSelectedComponent(componentName);
    onSelectComponent(componentName);
  };

  return (
    <div className="component-selector">
      <div className="selector-controls">
        <div className="view-toggle">
          <button
            className={viewMode === "dropdown" ? "active" : ""}
            onClick={() => setViewMode("dropdown")}
          >
            Dropdown View
          </button>
          <button
            className={viewMode === "list" ? "active" : ""}
            onClick={() => setViewMode("list")}
          >
            List View
          </button>
        </div>

        {viewMode === "dropdown" && (
          <div className="dropdown-selector">
            <label htmlFor="component-select">Select a component: </label>
            <select
              id="component-select"
              value={selectedComponent}
              onChange={(e) => handleComponentChange(e.target.value)}
            >
              <option value="">-- Select a component --</option>
              {Object.keys(components).map((componentName) => (
                <option key={componentName} value={componentName}>
                  {componentName}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {viewMode === "list" && (
        <div className="component-list">
          <h3>Available Components</h3>
          <ul>
            {Object.keys(components).map((componentName) => (
              <li
                key={componentName}
                className={
                  selectedComponent === componentName ? "selected" : ""
                }
                onClick={() => handleComponentChange(componentName)}
              >
                {componentName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ComponentSelector;
