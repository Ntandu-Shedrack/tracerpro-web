/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

const API_BASE_URL = process.env.API_URL;

// Util to handle fetch errors
const handleError = async (
  res: Response,
  fallback = "Something went wrong"
) => {
  let message = fallback;
  try {
    const json = await res.json();
    message = json.message || fallback;
  } catch {}
  throw new Error(message);
};

// Login
export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!res.ok) await handleError(res, "Login failed");
  return res.json();
};

// Logout
export const logoutUser = async () => {
  const res = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) await handleError(res, "Logout failed");
  return res.json();
};

// Register
export const registerUser = async (userData: any) => {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) await handleError(res, "Registration failed");
  return res.json();
};
