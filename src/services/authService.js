import API from "./api";

// ✅ Signup
export const signupUser = async (formData) => {
  const response = await API.post("/user/signup", formData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user)); // optional
  }

  return response.data;
};

// ✅ Login
export const loginUser = async (formData) => {
  const response = await API.post("/user/login", formData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response.data;
};

// ✅ Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
