import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getTranslation } from '../ts/Util';

import JS from '../assets/skill/js.svg?react';
import TS from '../assets/skill/ts.svg?react';
import NodeJS from '../assets/skill/nodejs.svg?react';
import React from '../assets/skill/react.svg?react';
import Electron from '../assets/skill/electron.svg?react';
import MongoDB from '../assets/skill/mongodb.svg?react';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  padding: var(--padding-section);
  overflow: hidden;
  min-height: 100svh;
  background-color: var(--color-sub);

  ::selection {
    color: var(--color-sub);
    background-color: var(--color-main);
  }
`;
const ContainerDialog = styled(motion.div)`
  opacity: 0.85;
  margin: auto 0;
  padding: 100px 0;
  color: var(--color-main);
`;
const ContainerDialogItem = styled.div`
  margin-top: 8px;

  small {
    opacity: 0.25;
  }
`;
const ContainerSkills = styled(motion.div)`
  display: flex;
`;
const ContainerScroll = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 24 24' fill='none' stroke='%23292826' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cpolyline points='19 12 12 19 5 12'/%3E%3C/svg%3E");
  background-color: var(--color-main);
  animation: moveDown 400ms infinite linear;
  position: absolute;
  right: 48px;
  top: 0;
  bottom: 0;
  width: 70px;

  @media screen and (max-width: 800px) {
    display: none;
  }

  @keyframes moveDown {
    0% {
      background-position-y: 0px;
    }
    100% {
      background-position-y: 70px;
    }
  }
`;

export const Welcome = () => {
  const translation = getTranslation();

  return (
    <Container>
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
      <ContainerDialog transition={{ delay: 1.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h5>{translation.welcome.helloDude}</h5>
        <ContainerDialogItem>
          <div>{translation.welcome.myName}</div>
          {translation.welcome.miscText.map((v, i) => (
            <div key={i}>
              <small>{v}</small>
            </div>
          ))}
        </ContainerDialogItem>
        {translation.welcome.whatIAmDoing.map((v, i) => (
          <ContainerDialogItem key={i}>{v}</ContainerDialogItem>
        ))}
      </ContainerDialog>
      <ContainerSkills transition={{ delay: 1.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <JS />
        <TS />
        <NodeJS />
        <React />
        <Electron />
        <MongoDB />
      </ContainerSkills>
      <ContainerScroll />
    </Container>
  );
};
