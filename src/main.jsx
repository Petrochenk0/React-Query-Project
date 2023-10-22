import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient(); // Эта переменная нужна для работы с React Query

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    {/*Обарачиваем это QueryClientProvedir показывая реакту что мы работает с React Query*/}
    <App />
  </QueryClientProvider>,
);
