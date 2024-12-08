import { API_USER } from "@/config/config";
import { UserCheckProps } from "@/models/userCheck";

export const UserCheck = async ({
  email,
  phone_number,
  username,
}: UserCheckProps) => {
  try {
    const url = new URL(`${API_USER}/check`);

    if (email) url.searchParams.append("email", email);
    if (phone_number) url.searchParams.append("phone_number", phone_number);
    if (username) url.searchParams.append("username", username);

    const response = await fetch(url.toString(), {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in UserCheck:", error);
    throw error;
  }
};
