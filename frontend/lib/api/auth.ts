// TODO: Replace with real API call

export async function sendOtp(phone: string): Promise<{ success: boolean; message: string }> {
  console.log('Sending OTP to', phone);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: `OTP sent to ${phone}` });
    }, 1000);
  });
}

export async function verifyOtp(phone: string, otp: string): Promise<{ success: boolean; token: string; isNewUser: boolean }> {
  console.log('Verifying OTP', otp, 'for', phone);
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock simple validation
      const isNewUser = !localStorage.getItem('sankat_user_profile');
      resolve({ success: otp.length === 6, token: 'mock-jwt-token', isNewUser });
    }, 1000);
  });
}

export async function googleAuth(credential: string): Promise<{ success: boolean; token: string; isNewUser: boolean }> {
  console.log('Google Auth with credential', credential);
  return new Promise((resolve) => {
    setTimeout(() => {
      const isNewUser = !localStorage.getItem('sankat_user_profile');
      resolve({ success: true, token: 'mock-google-jwt-token', isNewUser });
    }, 1000);
  });
}

export async function emailLogin(email: string, password: string): Promise<{ success: boolean; token: string; isNewUser: boolean }> {
  console.log('Email login for', email);
  return new Promise((resolve) => {
    setTimeout(() => {
      const isNewUser = !localStorage.getItem('sankat_user_profile');
      resolve({ success: password.length >= 6, token: 'mock-email-jwt-token', isNewUser });
    }, 1000);
  });
}

export async function emailSignup(data: any): Promise<{ success: boolean; token: string }> {
  console.log('Email signup with data', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem('sankat_user_profile', JSON.stringify(data));
      resolve({ success: true, token: 'mock-email-jwt-token' });
    }, 1000);
  });
}

export async function logout(): Promise<void> {
  console.log('Logging out');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}
