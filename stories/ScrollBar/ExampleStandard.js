import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ScrollBar.scss';

const bigContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum.
  Id diam maecenas ultricies mi eget mauris.
  Massa enim nec dui nunc mattis.
  Posuere lorem ipsum dolor sit amet consectetur adipiscing.
  At lectus urna duis convallis. Nunc sed blandit libero volutpat
  sed cras ornare arcu.
  Tristique sollicitudin nibh sit amet commodo nulla.
  Metus dictum at tempor commodo ullamcorper a.
  Viverra maecenas accumsan lacus vel facilisis volutpat est.
  Tellus molestie nunc non blandit massa enim nec dui.
  Accumsan in nisl nisi scelerisque eu ultrices.
  Risus in hendrerit gravida rutrum quisque.
  Sed lectus vestibulum mattis ullamcorper.
  Facilisis leo vel fringilla est ullamcorper.
  Odio euismod lacinia at quis. Est lorem ipsum dolor sit amet consectetur.
  Sed arcu non odio euismod lacinia at quis risus sed.
  Massa tempor nec feugiat nisl.
  Imperdiet nulla malesuada pellentesque elit eget. Tellus at urna condimentum mattis.
`;

class ExampleStandard extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    theme: PropTypes.string,
  };

  render() {
    return <div className={styles.root}>{bigContent}</div>;
  }
}

export default ExampleStandard;
