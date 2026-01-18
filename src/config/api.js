const isDevelopment = import.meta.env.DEV;
const isSSG = import.meta.env.SSR;

export const API_BASE_URL = (isDevelopment || isSSG)
    ? 'http://localhost/logicrealm/'
    : '/';