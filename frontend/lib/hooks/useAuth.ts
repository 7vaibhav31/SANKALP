import { useState, useEffect, useCallback } from 'react';
import { User } from '../types';
import { getProfile, updateProfile } from '../api/user';
import { logout as apiLogout } from '../api/auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    const initAuth = async () => {
      const stored = localStorage.getItem('sankat_user_profile');
      if (stored) {
        setState({
          user: JSON.parse(stored),
          isLoading: false,
          isAuthenticated: true,
        });
      } else {
        setState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        });
      }
    };
    initAuth();
  }, []);

  const login = useCallback(async (token: string, isNewUser: boolean) => {
    // In a real app, verify token and fetch profile
    console.log('Logging in', token, isNewUser);
    const user = await getProfile();
    setState({ user, isLoading: false, isAuthenticated: true });
  }, []);

  const logout = useCallback(async () => {
    await apiLogout();
    localStorage.removeItem('sankat_user_profile');
    setState({ user: null, isLoading: false, isAuthenticated: false });
  }, []);

  const updateUser = useCallback(async (data: Partial<User>) => {
    const updated = await updateProfile(data);
    setState((prev) => ({ ...prev, user: updated }));
  }, []);

  return {
    ...state,
    login,
    logout,
    updateUser
  };
}
