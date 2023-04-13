import React from "react";
import "../assets/styles/Mail.scss";

const Mail = ({ l10n }) => {
  return (
    <section id="mail">
      <a href="mailto:hi@ch3rn1k.me">hi@ch3rn1k.me</a>
      <span>{l10n.messageMePlease} (:</span>
    </section>
  );
};

export default Mail;
