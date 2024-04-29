import { useState } from 'react';
import { BackBtn } from '../BackBtn/BackBtn.jsx';
import BottomDrawer from '../BottomDrawer/BottomDrawer.jsx';


import './Quests.css';

export const Quests = (props) => {
  const { data } = props;

  const [shadow, setShadow] = useState(false);
  const [buttonText, setButtonText] = useState('Copy referral link');

  const close = () => {
    setShadow(false)
  }

  const copyRef = async () => {
    console.log(data.ref_link);
    await navigator.clipboard.writeText(`https://t.me/knizkii_bot/moon?startapp=${data.ref_link}`);
    
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
            <span>Quests</span>
          </div>
        </div>

        <div className="myfriends">

          <ul>
              <li onClick={() => { setShadow(true) }}>
                <div className='img-name'>
                  <img src="/defaultUser.webp" alt="" />
                  <div className="boost-text">
                    <h4>title</h4>
                    <div>
                      <span>small decs</span>
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

        {/* <button className='invF' onClick={() => { setShadow(true) }}>Invite a Friend</button> */}
      </div>

      <BottomDrawer className="BottomDrawer" show={shadow} close={close}>
        <div className='emodji'>🧑‍🚀</div>
        <div className='BottomDrawer-title'>Quest</div>
        <span className='BottomDrawer-des'>Quest description</span>
        <div>

          {/* <div className='UpgradeBtn'>
            <button onClick={copyRef}>{buttonText}</button>
          </div> */}
        </div>
      </BottomDrawer>


    </div>
  );
};
