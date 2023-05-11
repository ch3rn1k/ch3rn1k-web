import { motion } from 'framer-motion';
import { getTranslation } from '../utils';
import '../assets/styles/Welcome.scss';

const handleClickScrollDown = () => {
  const el = document.getElementById('portfolio');
  el?.scrollIntoView({ block: 'start', behavior: 'smooth' });
};

const Welcome = () => {
  const translation = getTranslation();

  return (
    <section id="welcome">
      <motion.h1 initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>
        {translation.welcome.typicalIT}
      </motion.h1>
      <motion.h2 transition={{ delay: 0.25 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>
        {translation.welcome.aLotOfCode}
      </motion.h2>
      <motion.h4 transition={{ delay: 0.5 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>
        {translation.welcome.bitDesign}
      </motion.h4>
      <motion.h6 transition={{ delay: 0.75 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>
        {translation.welcome.someHW}
      </motion.h6>
      <motion.div transition={{ delay: 1.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="welcome-dialog">
        <h5>{translation.welcome.helloDude}</h5>
        <div className="welcome-dialog--item">
          <div>{translation.welcome.myName}</div>
          {translation.welcome.miscText.map((value, index) => (
            <div key={index}>
              <small>{value}</small>
            </div>
          ))}
        </div>
        {translation.welcome.whatIAmDoing.map((value, index) => (
          <div className="welcome-dialog--item" key={index}>
            {value}
          </div>
        ))}
      </motion.div>
      <motion.div transition={{ delay: 1.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="welcome-skills">
        <img src={process.env.PUBLIC_URL + '/skill/js.svg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/skill/ts.svg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/skill/nodejs.svg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/skill/react.svg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/skill/electron.svg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/skill/mongodb.svg'} alt="" />
      </motion.div>
      <div onClick={handleClickScrollDown} className="welcome-scroll" />
    </section>
  );
};

export default Welcome;
