import api from '../services/api';

// export const auth = {
//   isAuthenticated: false,
//   login: (email: string, password: string): Promise<boolean> => (
//     api.post('/users/login', { email, password })
//       .then(() => true)
//       .catch(() => false)
//   ),
//   logout: () => {},
// };

export const isAuthenticated = async (token: string): Promise<boolean> => (
  api.get('/navers', { headers: { Authorization: `Bearer ${token}` } })
    .then(() => true)
    .catch(() => false)
);
