import { useState } from 'react';
import { BackBtn } from '../BackBtn/BackBtn.jsx';


import './Friends.css';

export const Friends = (props) => {
  const { data } = props;
  const [buttonText, setButtonText] = useState('Copy referral link');
  const ref_link = `https://t.me/wai_coin_bot/app?startapp=${data.ref_link}`;

  // data.friends = [...data.friends, ...data.friends].slice(0, 2)

  setTimeout(function() {
    if (data.friends.length < 3) {
      document.getElementsByClassName('myfriends')[0].classList.add('big_friends');
    }
    document.getElementsByClassName('myfriends')[0].classList.add('opacity');
  }, 100);

  const copyRef = async () => {
    await navigator.clipboard.writeText(ref_link);

    setButtonText('Copied!');
    setTimeout(() => {
      setButtonText('Copy referral link');
    }, 3000);
  }

  const shareRef = () => {
    window.location.href = `https://t.me/share/url?url=${ref_link}&text=welcome`;
  }

  return (
    <div className="Friends">
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

        <div className='botoom-btns'>
          <button onClick={copyRef}>{buttonText}</button>
          <button onClick={shareRef}>Share referral link</button>
        </div>
    </div>
  );
};
