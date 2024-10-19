import UserAuthProps from "@/models/userAuth";
import { API_AUTH } from "@/config/config";

export const Register = async (user: UserAuthProps) => {
  const response = await fetch(`${API_AUTH}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed.");
  }

  return response.json();
};

export const Login = async (user: Omit<UserAuthProps,"email"| "first_name"| "last_name" | "phone_number">) => {
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

  return response.json();
};
