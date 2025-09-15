import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const fakeUser = { name: "John Doe" };
    const fakeToken = "123456";
    localStorage.setItem("token", fakeToken);
    dispatch(loginSuccess({ user: fakeUser, token: fakeToken }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button onClick={handleLogin} className="bg-blue-600 text-white px-6 py-2 rounded">
        Login
      </button>
    </div>
  );
}
