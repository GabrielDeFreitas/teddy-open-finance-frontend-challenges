import { useTranslation } from 'react-i18next';
import type { CustomerLoginViewProps } from '../types';

export function CustomerLoginView({
	name,
	onNameChange,
	onSubmit,
}: CustomerLoginViewProps) {
	const { t } = useTranslation();

	return (
		<main className="flex min-h-screen items-center justify-center">
			<form
				onSubmit={onSubmit}
				className="flex w-full max-w-xl flex-col gap-6 rounded-lg bg-white p-8">
				<h1 className="text-4xl text-gray-900 text-center">
					{t('customerLogin.greeting')}
				</h1>

				<input
					type="text"
					value={name}
					onChange={(e) => onNameChange(e.target.value)}
					placeholder={t('customerLogin.namePlaceholder')}
					className="rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
				/>

				<button
					type="submit"
					className="cursor-pointer rounded-md bg-[#FF6B35] px-4 py-2 text-white text-base font-bold hover:bg-[#e05a2a] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2">
					{t('customerLogin.submitButton')}
				</button>
			</form>
		</main>
	);
}
