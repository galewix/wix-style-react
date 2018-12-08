import PropTypes from 'prop-types';

const Content = props => props.children;
Content.displayName = 'Page.Content';
Content.propTypes = {
  children: PropTypes.element.isRequired,
  fullScreen: PropTypes.bool,
};
export default Content;
