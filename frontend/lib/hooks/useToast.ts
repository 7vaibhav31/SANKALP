import { useState, useCallback, useRef } from 'react';

interface ToastState {
  message: string;
  visible: boolean;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({ message: '', visible: false });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((message: string, duration = 2200) => {
    setToast({ message, visible: true });
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, duration);
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  return {
    ...toast,
    showToast,
    hideToast
  };
}
