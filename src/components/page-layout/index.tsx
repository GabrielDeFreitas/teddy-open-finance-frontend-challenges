import { useNavigation } from '../../hooks/use-navigation';
import { RoutesUrl } from '../../utils/enum/routes-url';
import { ButtonCreateCustomer } from '../button-create-customer';
import { FeedbackScreen } from '../feedback-screen';
import { Header } from '../header';
import type { PageLayoutProps } from './types';

export function PageLayout({ children }: PageLayoutProps) {
	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			{children}
		</div>
	);
}

export function PageErrorLayout() {
	const { replace } = useNavigation();
	const goToHome = () => replace(RoutesUrl.BASE_URL);
	return (
		<div className="min-h-screen bg-gray-50">
			<main className="container mx-auto px-4 py-6">
				<FeedbackScreen
					title="Ocorreu um erro inesperado"
					description="Não foi possível carregar os dados. Tente novamente mais tarde."
				/>
				<ButtonCreateCustomer label="Ir para o início" onClick={goToHome} />
			</main>
		</div>
	);
}
