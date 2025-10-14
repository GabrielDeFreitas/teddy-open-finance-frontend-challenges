import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import en from './locale/en.json';
import pt from './locale/pt.json';

i18n
	.use(initReactI18next)
	.use(I18nextBrowserLanguageDetector)
	.init({
		fallbackLng: 'pt',
		resources: {
			en: { translation: en },
			pt: { translation: pt },
		},
		interpolation: { escapeValue: false },
	});

export default i18n;
