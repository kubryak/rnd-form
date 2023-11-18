export const fetchData = async () => {
  try {
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          status: 200,
          json: () => Promise.resolve({ data: 'mocked response' }),
        });
      }, 1000);
    });

    const data = await response.json();
    console.log('Запрос выполнен успешно:', data);
  } catch (error) {
    console.error('Ошибка запроса:', error);
  }
};