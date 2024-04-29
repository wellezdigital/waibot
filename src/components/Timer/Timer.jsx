import { useEffect, useState } from 'react';
import './Timer.css';

export const Timer = (props) => {
  // time={data.last_game} time_reload={data.time_reload}
  // const { time, time_reload, handleReady } = props;
  const { handleReady } = props;
  const { last_game, time_reload, avalible_coins, collected_coins } = props.data;
  const timeReload = 24 * 60 - time_reload * 60;
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    if (avalible_coins <= collected_coins) {
      console.log(avalible_coins <= collected_coins);
      // Задаем дату, до которой будет идти таймер
      const targetDate = new Date(last_game);

      // Добавляем время ожидания 
      targetDate.setMinutes(targetDate.getMinutes() + timeReload);

      // Функция для обновления таймера
      const updateTimer = () => {
        // Текущая дата и время
        const now = new Date();

        // Разница между текущей датой и целевой датой
        const difference = targetDate.getTime() - now.getTime();

        // Если разница меньше или равна нулю, значит таймер истек
        if (difference <= 0) {
          clearInterval(timerInterval);
          setTimeRemaining('Ready!');
          handleReady(true);
          return;
        }

        // Преобразуем разницу в часы, минуты и секунды
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Формируем строку с оставшимся временем
        // const remainingTime = `${hours}h ${minutes}m ${seconds}s`;
        let remainingTime = ''
        if (hours) remainingTime += `${hours}h `;
        if (minutes) remainingTime += `${minutes}m `;
        remainingTime += `${seconds}s`;
        setTimeRemaining(remainingTime);
      };

      // Обновляем таймер каждую секунду
      const timerInterval = setInterval(updateTimer, 1000);

      // Сразу же вызываем функцию обновления таймера, чтобы показать оставшееся время без задержки
      updateTimer();

      // Очищаем интервал при размонтировании компонента
      return () => clearInterval(timerInterval);
    }
    else {
      setTimeRemaining('Ready!');
      handleReady(true);
    }
  }, []);

  return (
    <div className="Timer">
      {timeRemaining}
    </div>
  );
};
