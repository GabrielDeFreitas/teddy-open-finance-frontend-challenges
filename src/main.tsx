import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';
import { RouteProvider } from './routes.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/auth-context/index.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const queryClient = new QueryClient();

createRoot(rootElement).render(
	<StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<I18nextProvider i18n={i18n}>
					<RouteProvider />
				</I18nextProvider>
			</QueryClientProvider>
		</AuthProvider>
	</StrictMode>,
);
