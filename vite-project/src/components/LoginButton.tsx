import { useAuth } from '../contexts/AuthContext';

export function LoginButton() {
  const { isAuthenticated, login, logout, user } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300">
            Welcome, {user?.name || user?.email}
          </span>
          <button
            onClick={() => logout()}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => login()}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Log In
        </button>
      )}
    </div>
  );
}