import React, { Fragment, useRef } from "react";
import Welcome from "./Welcome.js";
import Portfolio from "./Portfolio.js";
import Mail from "./Mail.js";
import RU from "../language/ru";
import EN from "../language/en";
import "../assets/styles/App.scss";

const App = () => {
  const allTranslations = useRef(
    navigator.language === "ru-RU" || navigator.language === "ru" ? RU : EN
  ).current;

  return (
    <Fragment>
      <Welcome l10n={allTranslations} />
      <Portfolio l10n={allTranslations} />
      <Mail l10n={allTranslations} />
    </Fragment>
  );
};

export default App;
