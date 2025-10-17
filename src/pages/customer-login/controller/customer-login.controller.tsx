import { useState } from 'react';
import { RoutesUrl } from '../../../utils/enum/routes-url';
import { useAuthContext } from '../../../context/auth-context';
import { useNavigation } from '../../../hooks/use-navigation';
import { CustomerLoginView } from '../view/customer-login.view';

export function CustomerLoginController() {
	const [name, setName] = useState('');
	const { login } = useAuthContext();
	const { redirect } = useNavigation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) {
			alert('Por favor, digite seu nome antes de continuar.');
			return;
		}
		login(name.trim());
		redirect(RoutesUrl.CUSTOMER_LIST);
	};

	return (
		<CustomerLoginView
			name={name}
			onNameChange={setName}
			onSubmit={handleSubmit}
		/>
	);
}
