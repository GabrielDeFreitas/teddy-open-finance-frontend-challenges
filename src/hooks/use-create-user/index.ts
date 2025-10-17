import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../../service/api/api-client';
import type { CreateUserDto } from '../../service/api/types';
import { showToast } from '../../utils/show-toast';
import { useTranslation } from 'react-i18next';

export function useCreateUser() {
	const queryClient = useQueryClient();
	const { t } = useTranslation();

	return useMutation({
		mutationFn: (data: CreateUserDto) => createUser(data),

		onSuccess: () => {
			showToast(t('toast.userCreated'), 'success');
			queryClient.invalidateQueries({ queryKey: ['users'] });
		},

		onError: () => {
			showToast(t('toast.userCreateError'), 'error');
		},
	});
}
