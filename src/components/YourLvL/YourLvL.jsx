import { Link } from 'react-router-dom';
import './YourLvL.css';

export const YourLvL = (props) => {
  return (
   <div className="lvl_bg">
     <div className="YourLvL">
      <div className='lvl-text'>
        <span>{props.level} lvl</span>
        <span>{ props.username }</span>
      </div>

        {/* <progress className='bar' value={props.level_score} max={props.level * 2000}></progress> */}
      {/* <div className='progress-container'>
        <progress className='bar' value='100' max={props.level * 2000}></progress>
        <span>{props.level_score}/{props.level * 2000}</span>
      </div> */}
      <div
  className='progress-container'
  style={{
    '--progress-width': `${(props.level_score / (props.level * 2000)) * 100}%`
  }}
>
  <span>{props.level_score}/{props.level * 2000}</span>
</div>

      <div className="bottom-el-lvl">
      <div className='balance'>
        <img src="./coin.webp" alt="" />
        <span>{props.balance}</span>
      </div>
      <Link to='/boost'><button>Boost</button></Link>
      </div>
    </div>
   </div>
  );
};


