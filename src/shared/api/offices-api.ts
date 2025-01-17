// src/services/axiosInstance.ts
import axios from 'axios';

// Создаем инстанс с настройками
export const apiOffices = axios.create({
    baseURL: 'https://booking-office.kz/api', // Базовый URL
    timeout: 5000,                      // Тайм-аут (в миллисекундах)
    headers: {
        'Content-Type': 'application/json', // Заголовок по умолчанию
        Accept: 'application/json',
    },
});

// // Добавление interceptor для запросов
// axiosInstance.interceptors.request.use(
//     (config) => {
//         // Пример: добавление токена авторизации
//         const token = localStorage.getItem('token'); // Или другой способ хранения
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );
//
// // Добавление interceptor для ответов
// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         // Обработка ошибок
//         if (error.response?.status === 401) {
//             console.error('Unauthorized. Redirecting to login...');
//             // Логика, например, переадресация на страницу логина
//         }
//         return Promise.reject(error);
//     }
// );
//
// export default axiosInstance;
