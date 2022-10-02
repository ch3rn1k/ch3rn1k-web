import React from 'react';
import '../assets/styles/Mail.scss';

const Mail = ({ ms }) => {
  /** TEMPLATE */
  return(
    <section id="mail">
      <a href="mailto:hi@ch3rn1k.me">hi@ch3rn1k.me</a>
      <span>{ms.messageMePlease} (:</span>
    </section>
  )
};

export default Mail;
