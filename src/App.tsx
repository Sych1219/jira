import React from "react";
import "./App.css";
import { ProjectListScreen } from "./screens/project-list";
import UseArrayTest from "./screens/useArray-test";
import { LoginScreen } from "./screens/login";

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      {/*<UseArrayTest />*/}
      <LoginScreen />
    </div>
  );
}

export default App;
