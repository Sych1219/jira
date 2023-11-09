import React from "react";
import "./App.css";
import { ProjectListScreen } from "./screens/project-list";
import UseArrayTest from "./screens/useArray-test";
import { LoginScreen } from "./unauthenticated-app/login";
import { useAuth } from "./context/auth-context";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { AuthenticatedApp } from "./authenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/*<ProjectListScreen />*/}
      {/*<UseArrayTest />*/}
      {user == null ? <UnauthenticatedApp /> : <AuthenticatedApp />}
    </div>
  );
}

export default App;
