import { useState } from 'react';
import { RoutesUrl } from '../../../utils/enum/routes-url';
import { useAuthContext } from '../../../context/auth-context';
import { useNavigation } from '../../../hooks/use-navigation';
import { CustomerLoginView } from '../view/customer-login.view';
import { showToast } from '../../../utils/show-toast';
import { useTranslation } from 'react-i18next';

export function CustomerLoginController() {
	const [name, setName] = useState('');
	const { login } = useAuthContext();
	const { redirect } = useNavigation();
	const { t } = useTranslation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) {
			showToast(t('toast.loginNameRequired'), 'error');
			return;
		}
		login(name.trim());
		showToast(t('toast.loginSuccess'), 'success');
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
