import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Footer } from '../Footer/Footer.jsx';
import { YourLvL } from '../YourLvL/YourLvL';
import { Timer } from '../Timer/Timer';
import { useTelegram } from '../../hooks/useTelegram';

import './Layout.css';

export const Layout = (props) => {
  const { data } = props;
  const api = import.meta.env.VITE_APP_API;

  const { onClose, user } = useTelegram();
  const username = user ? user.username : 'awd awd';

  const [ready, setReady] = useState(false);

  const handleReady = (data) => {
    setReady(data);
  };

  const div = document.createElement('div');

  div.dataset.u = 'jqEx3UxzlqbpApV3';
  div.lang = 'en';
  div.dataset.user_id = user ? user.id : 123;
  div.dataset.amount = data ? data.avalible_coins - data.collected_coins : 100;
  div.dataset.coin = 'WAI';
  
  // div.dataset.user_tg_id = user ? user.id : 123;
  // div.dataset.available_coins = data ? data.avalible_coins - data.collected_coins : 100;

  const script = document.createElement('script');
  script.src = 'https://web-ar-qr.com/client/loader.js';
  div.appendChild(script);




  const handleButtonClick = () => {
    // axios.post(`${api}/game_end`, {
    //   user_tg_id: user ? user.id : 123,
    //   coin: 100
    // }).then(() => {console.log('coin_ok');}).catch((err) => {console.log(err);})

      // window.location.href = 'https://arcoin.net/?u=jqEx3UxzlqbpApV3' + `&user_tg_id=${user ? user.id : 123}&available_coins=${data ? data.avalible_coins - data.collected_coins : 100}`;
      // window.location.href = 'https://arcoin.net/?u=jqEx3UxzlqbpApV3' + `&user_tg_id=${user ? user.id : 123}&available_coins=100`;
      // window.location.href = 'https://arcoin.net/?u=jqEx3UxzlqbpApV3&debug=1';

    // console.log('launch');
    document.body.appendChild(div);
  };


  return (
    <div className="layout">
      <img className='moon' src="./main-bg.webp" alt="" />

      <YourLvL username={username} balance={data.balance} level_score={data.level_score} level={data.level} />

      <div className="forBtn">
        {/* disabled={!ready} */}
        <button onClick={handleButtonClick} className="btn">Start</button>
        {data && <Timer data={data} handleReady={handleReady} />}
      </div>

      <Footer />
    </div>
  );
};
