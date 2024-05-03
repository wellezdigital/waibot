import { useState } from 'react';
import { BackBtn } from '../BackBtn/BackBtn.jsx';
import BottomDrawer from '../BottomDrawer/BottomDrawer.jsx';
import axios from 'axios';
import './Quests.css';

export const Quests = (props) => {
  const { data, tg } = props;
  const quests = data.quests;
  const api = import.meta.env.VITE_APP_API;

  // console.log(data);


  const [shadow, setShadow] = useState(false);
  const [BDrawer, setBDrawer] = useState({
    twitter: false,
    discord: false,
    telegram: false,
    web: false
  });

  const toggleBDrawer = (field) => {
    setBDrawer(prevState => {
      const newState = { ...prevState };
      Object.keys(newState).forEach(key => {
        newState[key] = false;
      });
      newState[field] = true;
      return newState;
    });
    setShadow(true);
  };

  const unShadow = () => {
    Object.keys(BDrawer).forEach(key => {
      BDrawer[key] = false;
    });

    if (shadow) setShadow(false);
  }

  const subscribe = async (title) => {
    if (title === 'twitter') tg.openLink('https://twitter.com/wellezdigital');
    if (title === 'web') tg.openLink('https://wellez.digital');

    unShadow();

    try {
      const response = await axios.post(`${api}/quests`, {
        user_tg_id: data.user_tg_id,
        title
      })
      console.log(response.data);
      data.quests[title] = response.data;
    }
    catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="Friends" >
      <div className={shadow ? 'shadow' : ''} onClick={unShadow}>
        <img className='second-bg' src="/second-bg.webp" alt="" />
        <BackBtn />

        <div className='boost-balance'>
          <div className='balance'>
            <span>Quests</span>
          </div>
        </div>

        <div className="myfriends">

          <ul>
            <li onClick={() => { toggleBDrawer('twitter') }}>
              <div className='img-name'>
                <img src="/twitter_logo.webp" alt="" />
                <div className="boost-text">
                  <h4>Subscribe to Twitter</h4>
                  <div>
                    <span>You need to subscribe to Twitter</span>
                  </div>
                </div>
              </div>
              <div className='arrL'>
                <div>+50</div>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#36EF82" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </li>
            <li onClick={() => { toggleBDrawer('discord') }}>
              <div className='img-name'>
                <img src="/discord_logo.webp" alt="" />
                <div className="boost-text">
                  <h4>Subscribe to Discord</h4>
                  <div>
                    <span>You need to subscribe to Discord</span>
                  </div>
                </div>
              </div>
              <div className='arrL'>
                <div>+50</div>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#36EF82" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </li>
            <li onClick={() => { toggleBDrawer('telegram') }}>
              <div className='img-name'>
                <img src="/telegram_logo.webp" alt="" />
                <div className="boost-text">
                  <h4>Subscribe to Telegram</h4>
                  <div>
                    <span>You need to subscribe to Telegram</span>
                  </div>
                </div>
              </div>
              <div className='arrL'>
                <div>+50</div>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#36EF82" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </li>
            <li onClick={() => { toggleBDrawer('web') }}>
              <div className='img-name'>
                <img src="/logo-80-min.png" alt="" />
                <div className="boost-text">
                  <h4>Subscribe to Wellez</h4>
                  <div>
                    <span>You need to subscribe to Wellez</span>
                  </div>
                </div>
              </div>
              <div className='arrL'>
                <div>+50</div>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#36EF82" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <BottomDrawer className="BottomDrawer" show={BDrawer.twitter} close={unShadow}>
        <div className='emodji'>🧑‍🚀</div>
        <div className='BottomDrawer-title'>Subscribe to Twitter</div>
        <span className='BottomDrawer-des'>Bla bla bla, you need to subscribe to Twitter and you get <b>50 coins</b>.</span>
        <div>

          {quests?.twitter != 'completed' && <div className='UpgradeBtn'>
            <button onClick={() => { subscribe('twitter') }}>Subscribe</button>
          </div>}
        </div>
      </BottomDrawer>
      
      <BottomDrawer className="BottomDrawer" show={BDrawer.discord} close={unShadow}>
        <div className='emodji'>🧑‍🚀</div>
        <div className='BottomDrawer-title'>Subscribe to Discord</div>
        <span className='BottomDrawer-des'>Bla bla bla, you need to subscribe to Discord and you get <b>50 coins</b>.</span>
        <div>

          {quests?.discord != 'completed' && <div className='UpgradeBtn'>
            <button onClick={() => { subscribe('discord') }}>Subscribe</button>
          </div>}
        </div>
      </BottomDrawer>
      
      
      <BottomDrawer className="BottomDrawer" show={BDrawer.telegram} close={unShadow}>
        <div className='emodji'>🧑‍🚀</div>
        <div className='BottomDrawer-title'>Subscribe to Telegram</div>
        <span className='BottomDrawer-des'>Bla bla bla, you need to subscribe to Telegram and you get <b>50 coins</b>.</span>
        <div>

          {quests?.telegram != 'completed' && <div className='UpgradeBtn'>
            <button onClick={() => { subscribe('telegram') }}>Subscribe</button>
          </div>}
        </div>
      </BottomDrawer>


      <BottomDrawer className="BottomDrawer" show={BDrawer.web} close={unShadow}>
        <div className='emodji'>🧑‍🚀</div>
        <div className='BottomDrawer-title'>Subscribe to Wellez</div>
        <span className='BottomDrawer-des'>Bla bla bla, you need to subscribe to Wellez and you get <b>50 coins</b>.</span>
        <div>

          {quests?.web != 'completed' && <div className='UpgradeBtn'>
            <button onClick={() => { subscribe('web') }}>Subscribe</button>
          </div>}
        </div>
      </BottomDrawer>


    </div >
  );
};
