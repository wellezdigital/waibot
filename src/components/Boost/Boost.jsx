import { useEffect, useState } from 'react';
import axios from 'axios';
import { BackBtn } from '../BackBtn/BackBtn.jsx';
import BottomDrawer from '../BottomDrawer/BottomDrawer.jsx';
import './Boost.css';

export const Boost = (props) => {
  const { data, user_tg_id } = props;
  const api = import.meta.env.VITE_APP_API;
  const start_price = 200;

  setTimeout(function() {
    document.getElementsByClassName('boost-ul')[0].classList.add('opacity');
  }, 100);

  const [cm, setcm] = useState();
  const [cc, setcc] = useState();
  const [tr, settr] = useState();

  const [BDrawer, setBDrawer] = useState({
    cm: false,
    cc: false,
    tr: false
  });
  const [shadow, setShadow] = useState(false);


  useEffect(() => {
    if (data) {
      setcm(data.coin_multiplication);
      setcc(data.coin_count);
      settr(data.time_reload);
    }
  }, [data]);


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
    console.log('unShadow');
  }


  const buy = (boost, price) => {
    if (data.balance >= price) {
      axios.post(`${api}/buy_boost`, {
        user_tg_id,
        boost,
        price
      })
        .then(() => {
          if (boost === 'coin_multiplication' && cm <= 4) setcm(cm + 1);
          if (boost === 'coin_count' && cc <= 4) setcc(cc + 1);
          if (boost === 'time_reload' && tr <= 4) settr(tr + 1);

          data.balance -= price;
        })
    }
  }

  return (
    <div className="Boost">
      <div className={shadow ? 'shadow' : ''} onClick={unShadow}>
        <img className='second-bg' src="/second-bg.webp" alt="" />
        <BackBtn />


        <div className='boost-balance'>
          <span>Your balance</span>
          <div className='balance'>
            <img src="./coin.webp" alt="" />
            <span>{data.balance}</span>
          </div>
        </div>

        <ul className='boost-ul'>
          <li onClick={() => toggleBDrawer('cm')}>
            <img src="/coin-mul.webp" alt="" />

            <div className="boost-text">
              <span>Coin Multiplication</span>
              {/* <span className="mark">coins x{cm + 1}</span> */}
              <div>Increase the number of collected coins</div> 
            </div>

            <div className='arrL'>
              <div>L{cm}/5</div>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#36EF82" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            {/* {cm < 5 && <button onClick={() => buy('coin_multiplication', cm * start_price)}>{cm * start_price}</button>} */}
          </li>
          <li onClick={() => toggleBDrawer('cc')}>
            <img src="/CoinCount.webp" alt="" />

            <div className="boost-text">
              <span>Coin Count</span>
              <div>Increase the number of available coins per day +{cc * 10}</div>
            </div>

            <div className='arrL'>
              <div>L{cc}/5</div>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#36EF82" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            {/* {cc < 5 && <button onClick={() => buy('coin_count', cc * start_price)}>{cc * start_price}</button>} */}
          </li>
          <li onClick={() => toggleBDrawer('tr')}>
            <img src="/TimeReload.webp" alt="" />

            <div className="boost-text">
              <span>Time Reload</span>
              <div>Reduced recharge time 24-{tr}h</div>
            </div>

            <div className='arrL'>
              <div>L{tr}/5</div>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#36EF82" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* {tr < 5 && <button onClick={() => buy('time_reload', tr * start_price)}>{tr * start_price}</button>} */}
          </li>
        </ul>
      </div>


      <BottomDrawer className="BottomDrawer" show={BDrawer.cm} close={unShadow}>
        <div className='BottomDrawer-title'>Space Stone Storage </div>
        <span className='BottomDrawer-des'>A better stone gives you more coins and you will be able to claim it less often.</span>
        <div>
          <div className='new-level'>
            <img src="/top-level.webp" alt="" />
            <div>
              <div>Level {cm + 1}</div>
              <div>Coin increase of x2</div>
            </div>
          </div>

          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 26V2M7.5 2L13.5 8M7.5 2L1.5 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <div className='old-level'>
            <img src="/low-level.webp" alt="" />
            <div>
              <div>Level {cm}</div>
              <div>Coin increase of x2</div>
            </div>
          </div>

          <div className='UpgradeBtn'>
            <button onClick={() => { buy('coin_multiplication', cm * start_price)}}>Upgrade</button>
            <div><img src="./bw-coin.webp" alt="" />{cm * start_price}</div>
          </div>
        </div>
      </BottomDrawer>



      <BottomDrawer className="BottomDrawer" show={BDrawer.cc} close={unShadow}>
        <div className='BottomDrawer-title'>Space Stone Storage </div>
        <span className='BottomDrawer-des'>A better stone gives you more coins and you will be able to claim it less often.</span>
        <div>
          <div className='new-level'>
            <img src="/top-level.webp" alt="" />
            <div>
              <div>Level {cc + 1}</div>
              <div>Increase the number of available coins per day</div>
            </div>
          </div>

          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 26V2M7.5 2L13.5 8M7.5 2L1.5 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <div className='old-level'>
            <img src="/low-level.webp" alt="" />
            <div>
              <div>Level {cc}</div>
              <div>Increase the number of available coins per day</div>
            </div>
          </div>

          <div className='UpgradeBtn'>
            <button onClick={() => { buy('coin_count', cc * start_price)}}>Upgrade</button>
            <div><img src="./bw-coin.webp" alt="" />{cc * start_price}</div>
          </div>
        </div>
      </BottomDrawer>


      <BottomDrawer className="BottomDrawer" show={BDrawer.tr} close={unShadow}>
        <div className='BottomDrawer-title'>Space Stone Storage </div>
        <span className='BottomDrawer-des'>A better stone gives you more coins and you will be able to claim it less often.</span>
        <div>
          <div className='new-level'>
            <img src="/top-level.webp" alt="" />
            <div>
              <div>Level {tr + 1}</div>
              <div>Reduced recharge time 24-1h</div>
            </div>
          </div>

          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 26V2M7.5 2L13.5 8M7.5 2L1.5 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <div className='old-level'>
            <img src="/low-level.webp" alt="" />
            <div>
              <div>Level {tr}</div>
              <div>Reduced recharge time 24-1h</div>
            </div>
          </div>

          <div className='UpgradeBtn'>
            <button onClick={() => { buy('time_reload', tr * start_price)}}>Upgrade</button>
            <div><img src="./bw-coin.webp" alt="" />{tr * start_price}</div>
          </div>
        </div>
      </BottomDrawer>


    </div>
  );
};
