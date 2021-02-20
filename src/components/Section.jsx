import React from 'react';
import style from './styles.module.scss';

const Section = ({ title, children }) => (
    <section className={style.Feedback}>
      <h1>{title}</h1>
      {children}
    </section>
  );

export default Section;