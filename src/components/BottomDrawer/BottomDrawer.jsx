import './BottomDrawer.css';



const BottomDrawer = ({ children, show, close }) => {
  let containerClass = `BottomDrawerContainer ${show ? 'show' : ''}`;
  
  return (
    <div className={containerClass}>
      <div className='close-btn' onClick={close}>X</div>
      {show && <div className="BottomDrawerContent">{children}</div>}
    </div>
  );
};

export default BottomDrawer;