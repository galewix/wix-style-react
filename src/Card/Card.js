import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

import Content from './Content';
import Header from './Header';
import Divider from './Divider';
import LinkHeader from './LinkHeader';
import ButtonHeader from './ButtonHeader';
import CollapsedHeader from './CollapsedHeader';

import styles from './Card.scss';

const Card = ({ stretchVertically, children, dataHook }) => (
  <div
    className={classNames(styles.card, {
      [styles.stretchVertically]: stretchVertically,
    })}
    children={children}
    data-hook={dataHook}
  />
);

Card.displayName = 'Card';

Card.propTypes = {
  children: node,
  stretchVertically: bool,
  dataHook: string,
};

Card.defaultProps = {
  stretchVertically: false,
};

Card.Content = Content;
Card.Header = Header;
Card.Divider = Divider;
Card.LinkHeader = LinkHeader;
Card.ButtonHeader = ButtonHeader;
Card.CollapsedHeader = CollapsedHeader;

export default Card;
