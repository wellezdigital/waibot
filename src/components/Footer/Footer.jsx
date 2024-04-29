import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {

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
          </div>
          <div className="menu">
            <div className="menu-el">
              <div>⚡️</div>
              <span>Launch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
