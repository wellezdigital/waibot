import { useState } from 'react';
import { BackBtn } from '../BackBtn/BackBtn.jsx';
import BottomDrawer from '../BottomDrawer/BottomDrawer.jsx';


import './Friends.css';

export const Friends = (props) => {
  const { data } = props;

  const [shadow, setShadow] = useState(false);
  const [buttonText, setButtonText] = useState('Copy referral link');

  const close = () => {
    setShadow(false)
  }

  const copyRef = async () => {
    console.log(data.ref_link);
    // await navigator.clipboard.writeText(`https://t.me/knizkii_bot/moon?startapp=${data.ref_link}`);
    await navigator.clipboard.writeText(`https://t.me/wai_coin_bot/app?startapp=${data.ref_link}`);
    
    setButtonText('Copied!');
    setTimeout(() => {
      setButtonText('Copy referral link');
    }, 3000);
  }

  return (
    <div className="Friends">
      <div className={shadow ? 'shadow' : ''} onClick={() => { shadow && setShadow(false) }}>
        <img className='second-bg' src="/second-bg.webp" alt="" />
        <BackBtn />

        <div className='boost-balance'>
          <div className='balance'>
            <span>Friend</span>
          </div>
        </div>

        <div className="myfriends">
        {data.friends && (<h1>My Friends</h1>)}

          {data.friends && (<ul>
            {data.friends.map((friend, index) => (
              <li key={index}>
                <div className='img-name'>
                  <img src="/defaultUser.webp" alt="" />
                  <div className="boost-text">
                    <span>{friend.username}</span>
                    <div>
                      <img src="./coin.webp" alt="" />
                      <span>{friend.balance}</span>
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
            ))}
          </ul>
          )}

          {!data.friends && (
            <div className='no-friends'>No connected friends yet</div>
          )}
        </div>

        <button className='invF' onClick={() => { setShadow(true) }}>Invite a Friend</button>
      </div>

      <BottomDrawer className="BottomDrawer" show={shadow} close={close}>
        <div className='emodji'>🧑‍🚀</div>
        <div className='BottomDrawer-title'>Friendship bonus</div>
        <span className='BottomDrawer-des'>Friends amplify your power! Earn 20% KNIZ from all your friends' income - no limits, no boundaries. Let's go wild!</span>
        <div>

          <div className='UpgradeBtn'>
            <button onClick={copyRef}>{buttonText}</button>
          </div>
        </div>
      </BottomDrawer>


    </div>
  );
};
