import { useEffect, useState } from "react";
import LoginForm from "../components/Login/LoginForm";

const images = [
  `https://picsum.photos/seed/${encodeURIComponent("workflow")}/800/600`,
  `https://picsum.photos/seed/${encodeURIComponent("tech")}/800/600`,
  `https://picsum.photos/seed/${encodeURIComponent("city")}/800/600`,
];


const LoginPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse bg-gray-100">
      {/* Right section: Background images */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        <div className="absolute bottom-5 left-5 text-white text-lg md:text-xl font-semibold z-10 p-2 bg-black bg-opacity-40 rounded-md">
          Manage all <span className="text-yellow-400">HR Operations</span> from the comfort of your home.
        </div>
      </div>

      {/* Left section: Login form */}
      <div className="flex-1 bg-white p-6 md:p-10 flex flex-col justify-center">
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Login</h2>
          <p className="text-gray-500 mb-6">Login to your account.</p>
          <LoginForm />
          <p className="mt-6 text-sm">
            Don’t have an account yet?{" "}
            <a href="#" className="text-blue-600 underline">Join KRIS today.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
