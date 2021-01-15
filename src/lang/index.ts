import { Locale } from '../types';

const locales: Record<string, string | object> = {
  meta: {
    title: {
      [Locale.EN]: 'Alexander Samarkin - web-developer',
      [Locale.RU]: 'Александр Самаркин - web-разработчик',
    },
  },
  headers: {
    about: {
      [Locale.EN]: 'About Me',
      [Locale.RU]: 'Обо мне',
    },
    contact: {
      [Locale.EN]: 'Contacts',
      [Locale.RU]: 'Контакты',
    },
    articles: {
      [Locale.EN]: 'Articles',
      [Locale.RU]: 'Статья',
    },
    resume: {
      [Locale.EN]: 'Resume',
      [Locale.RU]: 'Резюме',
    },
    whatiamdoing: {
      [Locale.EN]: 'What i am doing',
      [Locale.RU]: 'Что я делаю',
    },
    backend: {
      [Locale.EN]: 'Backend Development',
      [Locale.RU]: 'Backend разработка',
    },
    frontend: {
      [Locale.EN]: 'Frontend Development',
      [Locale.RU]: 'Frontend разработка',
    },
    contactForm: {
      [Locale.EN]: 'Contact Form',
      [Locale.RU]: 'Форма обратной связи',
    },
    education: {
      [Locale.EN]: 'Education',
      [Locale.RU]: 'Образование',
    },
    experience: {
      [Locale.EN]: 'Experience',
      [Locale.RU]: 'Опыт работы',
    },
    frontSkills: {
      [Locale.EN]: 'Frontend Skills',
      [Locale.RU]: 'Навыки в Front - разработке',
    },
    backSkills: {
      [Locale.EN]: 'Backend Skills',
      [Locale.RU]: 'Навыки в Back - разработке',
    },
    loading: {
      [Locale.EN]: 'Loading...',
      [Locale.RU]: 'Загрузка...',
    },
    notFound: {
      [Locale.EN]: '404 Not Found',
      [Locale.RU]: '404 Страница не найдена',
    },
  },
  text: {
    notFound: {
      [Locale.EN]: 'Oooops...Page not found',
      [Locale.RU]: 'Ой.. страница не найдена',
    },
  },
  footer: {
    name: {
      [Locale.EN]: 'Alexander Samarkin',
      [Locale.RU]: 'Александр Самаркин',
    },
  },
  header: {
    location: {
      [Locale.EN]: 'Moscow, Russia',
      [Locale.RU]: 'Москва',
    },
  },
  buttons: {
    cv: {
      [Locale.EN]: 'Download CV',
      [Locale.RU]: 'Скачать резюме',
    },
    sendMessage: {
      [Locale.EN]: 'Send Message',
      [Locale.RU]: 'Отправить',
    },
  },
  captions: {
    alexander: {
      [Locale.EN]: 'Alexander',
      [Locale.RU]: 'Александр',
    },
    samarkin: {
      [Locale.EN]: 'Samarkin',
      [Locale.RU]: 'Самаркин',
    },
    name: {
      [Locale.EN]: 'Name',
      [Locale.RU]: 'Имя',
    },
    message: {
      [Locale.EN]: 'Message',
      [Locale.RU]: 'Сообщение',
    },
  },
};

export const translates = (lang: Locale) => (path: string) => {
  const arrPath: string[] = path.split('.');
  let res: Record<string, any> = locales;
  arrPath.forEach((item: string) => (res = res[item]));

  return res[lang];
};

export default translates;
