import { motion } from 'framer-motion';
import React from 'react';
import '../assets/styles/Welcome.scss';

const handleClickScrollDown = () => {
  let el = document.getElementById('portfolio');
  el.scrollIntoView({ block: 'start', behavior: 'smooth' }); 
};

const Welcome = ({ l10n }) => {
  return (
    <section id="welcome">
      <motion.h1 initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>{l10n.welcome.typicalIT}</motion.h1>
      <motion.h2 transition={{ delay: 0.25 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>{l10n.welcome.aLotOfCode}</motion.h2>
      <motion.h4 transition={{ delay: 0.5 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>{l10n.welcome.bitDesign}</motion.h4>
      <motion.h6 transition={{ delay: 0.75 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>{l10n.welcome.someHW}</motion.h6>
      <motion.div transition={{ delay: 1.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="welcome-dialog">
        <h5>{l10n.welcome.helloDude}</h5>
        <div className="welcome-dialog--item">
          <div>{l10n.welcome.myName}</div>
          {l10n.welcome.miscText.map((value, index) => (
            <div key={index}>
              <small>
                {value}
              </small>
            </div>
          ))}
        </div>
        {l10n.welcome.whatIAmDoing.map((value, index) => (
          <div className="welcome-dialog--item" key={index}>{value}</div>
        ))}
      </motion.div>
      <a onClick={handleClickScrollDown} id="welcome-scroll"></a>
    </section>
  );
};

export default Welcome;
