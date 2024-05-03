import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {

  const div = document.createElement('div');

  div.dataset.u = 'onwkN9aek8tHNC8O';
  div.lang = 'en';
  // div.dataset.user_id = user ? user.id : 123;
  // div.dataset.amount = data ? data.avalible_coins - data.collected_coins : 100;
  div.dataset.coin = 'WAI';
  
  const script = document.createElement('script');
  script.src = 'https://web-ar-qr.com/client/loader.js';
  div.appendChild(script);
  

  const mountAR_outdoor = () => {
    document.body.appendChild(div);
  }

  return (
    <div>
      <div className="footer">
        <div className="bottom-menu">
          <div className="menu">
            <Link to='/boost' className="menu-el">
              <div>🚀</div>
              <span>Boost</span>
            </Link>
            <Link to='/quests' className="menu-el">
              <div>🛰</div>
              <span>Quests</span>
            </Link>
            <Link to='/friends' className="menu-el">
              <div>🤝</div>
              <span>Ref</span>
            </Link>
            <Link onClick={ mountAR_outdoor } className="menu-el">
              <div>🎒</div>
              <span>Outdoor</span>
            </Link>
            <Link to='/' className="menu-el">
              <div>🔜</div>
              <span>Wallet</span>
            </Link>
          </div>
          {/* <div className="menu">
            <div className="menu-el">
              <div>⚡️</div>
              <span>Launch</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
