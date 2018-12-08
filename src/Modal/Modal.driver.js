import ReactTestUtils from 'react-dom/test-utils';

const modalDriverFactory = ({ element }) => {
  const getPortal = () => document.body.querySelector('.portal');
  const getOverlay = () => document.body.querySelector('.ReactModal__Overlay');
  const getContent = () => document.body.querySelector('.ReactModal__Content');
  const isOpen = () => !!getContent();
  const getCloseButton = () =>
    document.body.querySelector('[data-hook="modal-close-button"]');
  return {
    exists: () => !!getPortal(),
    element: () => element,
    isOpen,
    isThemeExist: theme => !!getPortal().querySelector(`.${theme}`),
    getChildBySelector: selector => getPortal().querySelector(selector),
    isScrollable: () => !getPortal().classList.contains('portalNonScrollable'),
    closeButtonExists: () => !!getCloseButton(),
    clickOnOverlay: () => {
      const overlay = getOverlay();
      ReactTestUtils.Simulate.click(overlay);
    },
    clickOnCloseButton: () => {
      const button = getCloseButton();
      ReactTestUtils.Simulate.click(button);
    },
    getContentStyle: () => getContent().style,
  };
};

export default modalDriverFactory;
