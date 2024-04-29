import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTelegram } from './hooks/useTelegram';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Boost } from './components/Boost/Boost';
import { Friends } from './components/Friends/Friends';
import { Quests } from './components/Quests/Quests';

import './App.css';

function App() {
  const { tg, user } = useTelegram();

  const api = import.meta.env.VITE_APP_API;
  const [data, setData] = useState(null);

  useEffect(() => {
    tg.ready();
    tg.expand();

    const fetchData = async () => {
      try {
        const response = await axios.post(`${api}/start`, {
          user_tg_id: user ? user.id : 123,
          username: user ? user.username : 'test name',
          ref: tg.initDataUnsafe.start_param ? tg.initDataUnsafe.start_param : null
        })
        console.log(response.data);
        setData(response.data[0]);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: data ? <Layout data={data} /> : null,
    },
    {
      path: '/friends',
      element: <Friends data={data} />,
    },
    {
      path: '/quests',
      element: <Quests data={data} />,
    },
    {
      path: '/boost',
      element: data ? <Boost data={data} user_tg_id={user ? user.id : 123} /> : null,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
