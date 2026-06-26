import { User, UserType } from '../types';

// TODO: Replace with real API call

export async function getProfile(): Promise<User> {
  console.log('Fetching user profile');
  return new Promise((resolve) => {
    setTimeout(() => {
      const stored = localStorage.getItem('sankat_user_profile');
      if (stored) {
        resolve(JSON.parse(stored));
      } else {
        // Mock default
        resolve({
          id: 'user-123',
          name: 'User',
          phone: '',
          userType: 'Student',
          plan: 'free',
          createdAt: new Date().toISOString()
        });
      }
    }, 500);
  });
}

export async function updateProfile(data: Partial<User>): Promise<User> {
  console.log('Updating user profile', data);
  return new Promise((resolve) => {
    setTimeout(async () => {
      const current = await getProfile();
      const updated = { ...current, ...data };
      localStorage.setItem('sankat_user_profile', JSON.stringify(updated));
      resolve(updated);
    }, 500);
  });
}

export async function updateUserType(type: UserType): Promise<void> {
  console.log('Updating user type to', type);
  return new Promise((resolve) => {
    setTimeout(async () => {
      await updateProfile({ userType: type });
      resolve();
    }, 500);
  });
}

export async function getUsageStats(): Promise<{ messagesToday: number; limit: number; packsUsed: number; streak: number }> {
  console.log('Fetching usage stats');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        messagesToday: 12,
        limit: 20,
        packsUsed: 2,
        streak: 5
      });
    }, 500);
  });
}
