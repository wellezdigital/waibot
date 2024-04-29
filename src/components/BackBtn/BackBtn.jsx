import { Link } from 'react-router-dom';
import './BackBtn.css';

export const BackBtn = (props) => {
  const { balance } = props;

  return (
    <div className="BackBtn">
      <Link to="/">
        <i className="fi fi-rr-angle-left"></i>
        <div>Back</div>
      </Link>

      <div>{balance}</div>
    </div>
  );
};
