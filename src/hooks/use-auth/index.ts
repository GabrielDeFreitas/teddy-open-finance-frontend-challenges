import { useState } from 'react';

const STORAGE_KEY = 'user_name';

export function useAuth() {
	const [userName, setUserName] = useState<string | null>(() => {
		if (typeof window === 'undefined') return null;
		return sessionStorage.getItem(STORAGE_KEY);
	});

	const login = (name: string) => {
		setUserName(name);
		sessionStorage.setItem(STORAGE_KEY, name);
	};

	const logout = () => {
		setUserName(null);
		sessionStorage.removeItem(STORAGE_KEY);
	};

	return { userName, login, logout };
}
