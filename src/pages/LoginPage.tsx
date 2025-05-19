// src/pages/LoginPage.tsx
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-white p-10 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Login</h2>
        <p className="text-gray-500 mb-8">Login to your account.</p>
        <LoginForm />
        <p className="mt-6 text-sm">
          Don’t have an account yet?{" "}
          <a href="#" className="text-blue-600 underline">Join KRIS today.</a>
        </p>
      </div>
      <div className="flex-1 bg-cover bg-center relative" style={{ backgroundImage: `url('/your-image.png')` }}>
        <div className="absolute bottom-10 left-10 text-white text-xl font-semibold">
          Manage all <span className="text-yellow-400">HR Operations</span> from the comfort of your home.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
