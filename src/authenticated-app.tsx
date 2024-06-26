import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>logout</button>
      <ProjectListScreen />
    </div>
  );
};
