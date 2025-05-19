import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const LoginForm = () => {
  const { setName } = useUser();
  const { login } = useAuth();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format";
        return "";
      case "password":
        if (!value.trim()) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid = () =>
    Object.values(form).every((val) => val.trim()) &&
    Object.values(errors).every((err) => !err);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    let hasError = false;

    for (const field in form) {
      const error = validateField(field, form[field as keyof typeof form]);
      newErrors[field] = error;
      if (error) hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    localStorage.setItem("name", form.name);
    localStorage.setItem("email", form.email);
    setName(form.name);
    login(form.name, form.email, form.password);
  };

  const renderInput = (
    label: string,
    name: keyof typeof form,
    type = "text"
  ) => (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        className={`mt-1 block w-full rounded-md px-4 py-2 text-base border transition duration-200 ${
          errors[name]
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        } hover:border-blue-400 hover:shadow-md`}
      />
      <AnimatePresence>
        {errors[name] && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors[name]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-[1.05rem]">
      {renderInput("Name", "name")}
      {renderInput("Email Address", "email", "email")}
      {renderInput("Password", "password", "password")}

      <button
        type="submit"
        disabled={!isFormValid()}
        className="w-full cursor-pointer bg-blue-600 text-white text-lg py-2 rounded-md hover:bg-blue-900 transition duration-200 disabled:opacity-50 shadow-md"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
