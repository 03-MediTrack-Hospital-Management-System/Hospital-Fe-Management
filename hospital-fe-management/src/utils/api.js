const BASE_URL = "http://localhost:8081/auth";

export const login = async (credentials) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || "Login failed");
  }

  return await response.json();
};

export const register = async (userData) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || "Registration failed");
  }

  return await response.text();
};

export const authenticatedFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401 || response.status === 403) {
    // Optional: handle unauthorized access (e.g., redirect to login)
    // localStorage.removeItem("token");
    // window.location.href = "/login";
  }

  return response;
};

export const fetchAllDoctors = async () => {
  // Try kebab-case first then camelCase then simple doctors, with and without /auth
  const base = "http://localhost:8081";
  const endpoints = [
    `${base}/auth/admin/all-doctors`,
    `${base}/auth/admin/allDoctors`,
    `${base}/auth/admin/doctors`,
    `${base}/admin/all-doctors`,
    `${base}/admin/allDoctors`,
    `${base}/admin/doctors`
  ];

  for (const url of endpoints) {
    try {
      const response = await authenticatedFetch(url);
      if (response.ok) {
        const data = await response.json();
        // Handle both direct array and wrapped object
        return Array.isArray(data) ? data : (data.doctors || data.data || []);
      }
      if (response.status !== 404) break;
    } catch (e) {
      console.error(`Error on endpoint ${url}:`, e);
    }
  }

  throw new Error("Failed to fetch doctors from any recognized endpoint");
};

export const fetchAllPatients = async () => {
  const base = "http://localhost:8081";
  const endpoints = [
    `${base}/auth/admin/all-patients`,
    `${base}/auth/admin/allPatients`,
    `${base}/auth/admin/patients`,
    `${base}/admin/all-patients`,
    `${base}/admin/allPatients`,
    `${base}/admin/patients`
  ];

  for (const url of endpoints) {
    try {
      const response = await authenticatedFetch(url);
      if (response.ok) {
        const data = await response.json();
        return Array.isArray(data) ? data : (data.patients || data.data || []);
      }
      if (response.status !== 404) break;
    } catch (e) {
      console.error(`Error on endpoint ${url}:`, e);
    }
  }

  throw new Error("Failed to fetch patients from any recognized endpoint");
};
