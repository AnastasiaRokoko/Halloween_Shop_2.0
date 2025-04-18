import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import ru from './locales/ru';
import en from './locales/en';

const i18n = new I18n({
  ru,
  en,
});

i18n.locale = Localization.locale.startsWith('ru') ? 'ru' : 'en';
i18n.enableFallback = true;

export default i18n;
