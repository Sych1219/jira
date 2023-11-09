import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div>
      {isRegistered ? <LoginScreen /> : <RegisterScreen />}
      <button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? "switch to login" : "switch to register"}
      </button>
    </div>
  );
};
