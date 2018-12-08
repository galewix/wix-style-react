import styles from './MessageBoxFunctionalLayout.scss';

const messageBoxFunctionalLayoutDriverFactory = component => {
  const body = () => component.$('[data-hook="message-box-body"]');

  return {
    element: () => component,
    toHaveFooterBorder: async () => {
      const bodyClassNames = await body().getAttribute('class');
      return bodyClassNames.includes(styles.footerBorder);
    },
    scrollBodyDown: async offset =>
      browser.executeScript(
        `arguments[0].scrollTop = ${offset};`,
        await body().getWebElement(),
      ),
  };
};

export default messageBoxFunctionalLayoutDriverFactory;
