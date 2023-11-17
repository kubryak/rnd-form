export const fetchData = async () => {
  try {
    // Мок-запрос с задержкой в 1 секунду (1000 миллисекунд)
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          status: 200,
          json: () => Promise.resolve({ data: 'mocked response' }),
        });
      }, 1000); // Задержка в 1 секунду
    });

    // Обработка успешного ответа
    const data = await response.json();
    console.log('Запрос выполнен успешно:', data);
  } catch (error) {
    console.error('Ошибка запроса:', error);
  }
};