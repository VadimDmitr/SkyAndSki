import home from '../images/upper_main.png';
import skyski from '../images/skyski.png';
import build from '../images/webuild.png';
import line from '../images/icons/line.svg';


export const TopScreen = () => {
  return (

  <div>
      <img className="header__home" src={home} alt="home" />
      <img className="header__skyski" src={skyski} alt="skyski" />
      <img className="header__webuild" src={build} alt="We build only the best" />
      <img className="header__line" src={line} alt="line" />
  </div>
  )
};