import { createContext, useContext, type ReactNode } from 'react';
import { useAuth } from '../../hooks/use-auth';

interface AuthContextValue {
	userName: string | null;
	login: (name: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const value = useAuth();
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error('useAuthContext deve ser usado dentro de AuthProvider');
	return context;
}
