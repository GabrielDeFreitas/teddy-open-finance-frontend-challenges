import { useTranslation } from 'react-i18next';

export default function App() {
	const { t } = useTranslation();
	return <h1 className="text-3xl font-bold underline">{t('header.title')}</h1>;
}
