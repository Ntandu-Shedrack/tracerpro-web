/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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

// Helper: set token to localStorage + cookie
const storeToken = (token: string) => {
  // Store for API calls
  localStorage.setItem("token", token);

  // Store in cookie for Next.js middleware
  document.cookie = `auth_token=${token}; path=/; SameSite=Lax`;
};

// Login
export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  // console.log("Login URL:", `${API_BASE_URL}/auth/login`);
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) await handleError(res, "Login failed, please try again");

    const data = await res.json();

    if (data?.token) {
      storeToken(data.token);
    }

    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Unexpected error during login");
  }
};

// Register
export const registerUser = async (userData: any) => {
  console.log("Login URL:", `${API_BASE_URL}/auth/register`);

  console.log(userData);

  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) await handleError(res, "Registration failed");

  const data = await res.json();

  // If backend returns token after registration, store it
  if (data?.token) {
    storeToken(data.token);
  }

  return data;
};

// Logout
export const logoutUser = async () => {
  // Clear localStorage & cookie
  localStorage.removeItem("token");
  document.cookie =
    "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

  // Optional: inform backend if you want to track logouts
  const res = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  });

  if (!res.ok) await handleError(res, "Logout failed");
  return res.json();
};

// Request Password Reset
export const requestPasswordReset = async (email: string) => {
  const res = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok)
    await handleError(res, "Failed to send reset code, Please try again!");
  return res.json();
};

// Verify Email
export const verifyEmail = async (code: string) => {
  const res = await fetch(`${API_BASE_URL}/auth/verify-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });

  if (!res.ok)
    await handleError(res, "Code verification Failed, Please try again.");
  return res.json();
};

// Reset Password
export const resetPassword = async (code: string, newPassword: string) => {
  const res = await fetch(`${API_BASE_URL}/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, newPassword }),
  });

  if (!res.ok)
    await handleError(res, "Password Reset Failed, Please try again.");
  return res.json();
};

// Example protected API call
export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not authenticated");

  const res = await fetch(`${API_BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) await handleError(res, "Failed to fetch profile");
  return res.json();
};
