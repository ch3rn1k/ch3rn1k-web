import { getTranslation } from '../utils';
import '../assets/styles/Mail.scss';

const Mail = () => {
  const translation = getTranslation();

  return (
    <section id="mail">
      <a href="mailto:hi@ch3rn1k.me">hi@ch3rn1k.me</a>
      <span>{translation.messageMePlease} (:</span>
    </section>
  );
};

export default Mail;
