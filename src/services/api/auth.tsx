import UserAuthProps from "@/models/userAuth";
import { API_AUTH } from "@/config/config";
import Cookies from "js-cookie";

export const Register = async (user: UserAuthProps) => {
  const response = await fetch(`${API_AUTH}/register`, {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed.");
  }
  return response.json();
};

export const Login = async (
  user: Omit<UserAuthProps, "email" | "first_name" | "last_name" | "phone_number">
) => {
  const response = await fetch(`${API_AUTH}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed.");
  }

  const data = await response.json();

  Cookies.set("auth_token", data.token, {
    expires: 2, 
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return data;
};