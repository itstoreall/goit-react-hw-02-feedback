import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.scss';

const Section = ({ title, children }) => (
  <section className={style.Feedback}>
    <h1>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
