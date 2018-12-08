import React from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import HighlightedItem from './HighlightedItem';
import PropTypes from 'prop-types';

/**
 * Highlighter
 *
 * It highlights string type children by wrapping match
 * with strong dom element.
 * It remains children element structure.
 */

const childKeyGenerator = () => {
  let childKey = 0;
  return () => `highlighted-child-${childKey++}`;
};

const ELEM_TYPES = {
  STRING: 'string',
  ARRAY: 'array',
  REACT_ELEMENT: 'React_element',
};

const getElementType = element => {
  if (Array.isArray(element)) {
    return ELEM_TYPES.ARRAY;
  }
  if (React.isValidElement(element)) {
    return ELEM_TYPES.REACT_ELEMENT;
  }
  if (typeof element === 'string') {
    return ELEM_TYPES.STRING;
  }

  return '';
};

const highlight = (element, match, nextChildKey) => {
  if (!element) {
    return null;
  }
  const elementType = getElementType(element);
  const elementTypesMap = {
    [ELEM_TYPES.STRING]: (elem, match) => (
      <HighlightedItem key={nextChildKey()} match={match}>
        {elem}
      </HighlightedItem>
    ),
    [ELEM_TYPES.REACT_ELEMENT]: elem => {
      if (elem.props.children) {
        return React.cloneElement(
          elem,
          { ...elem.props, key: nextChildKey() },
          highlight(elem.props.children, match, nextChildKey),
        );
      }
      return elem;
    },
    [ELEM_TYPES.ARRAY]: elem =>
      elem.map(el => highlight(el, match, nextChildKey)),
  };

  return elementTypesMap[elementType]
    ? elementTypesMap[elementType](element, match)
    : element;
};

class Highlighter extends WixComponent {
  static propTypes = {
    /** match to highlight */
    match: PropTypes.string,
  };

  constructor(props) {
    super(props);
    // we want to create new react keys generator for instance of highlighter
    this.nextChildKey = childKeyGenerator();
  }

  render() {
    return (
      <span>
        {highlight(this.props.children, this.props.match, this.nextChildKey)}
      </span>
    );
  }
}

Highlighter.displayName = 'Highlighter';

export default Highlighter;
