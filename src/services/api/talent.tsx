import { API_TALENT } from "@/config/config";

export const getAllTalent = async () => {
  const response = await fetch(`${API_TALENT}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch talent data.");
  }

  const result = await response.json();

  if (result.success && Array.isArray(result.data)) {
    return result.data;
  } else {
    return []; 
  }
};

export const getTalentByName = async (name : string) => {
  const response = await fetch(`${API_TALENT}/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch talent data.");
  }

  return response.json();
};

