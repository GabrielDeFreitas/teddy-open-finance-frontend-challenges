import { Navigate } from 'react-router';
import { useAuthContext } from './context/auth-context';
import { RoutesUrl } from './utils/enum/routes-url';
import type { ReactNode } from 'react';

interface PrivateRouteProps {
	children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
	const { userName } = useAuthContext();

	if (!userName) {
		return <Navigate to={RoutesUrl.BASE_URL} replace />;
	}

	return children;
}
