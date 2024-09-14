const API_BASE_URL = 'http://localhost:5000/api';

export const fetchClasses = async () => {
  const response = await fetch(`${API_BASE_URL}/classes`);
  if (!response.ok) {
    throw new Error('Failed to fetch classes');
  }
  return response.json();
};

export const bookClass = async (classId) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/bookings/book`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ classId }), // Ensure this matches the expected format
  });
  if (!response.ok) {
    const errorDetails = await response.text(); // Fetch detailed error message
    throw new Error(`Failed to book class: ${errorDetails}`);
  }
  return response.json();
};

export const fetchMyBookings = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/bookings/my-bookings`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch bookings');
  }
  return response.json();
};

export const cancelBooking = async (classId) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/bookings/cancel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ classId }),
  });
  if (!response.ok) {
    throw new Error('Failed to cancel booking');
  }
  return response.json();
};

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
};

export const register = async (name, email, password) => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (!response.ok) {
    throw new Error('Registration failed');
  }
  return response.json();
};
