import css from './Loader.scss';

const hasClass = (element, styles, cls) => {
  return element
    .getAttribute('class')
    .then(classes => classes.split(' ').some(c => c.includes(styles[cls])));
};

const getLoaderTextElement = component =>
  component.$(`[data-hook="loader-text"]`);

const loaderDriverFactory = component => {
  return {
    element: () => component,
    isTiny: () => hasClass(component, css, 'tiny'),
    isSmall: () => hasClass(component, css, 'small'),
    isMedium: () => hasClass(component, css, 'medium'),
    isLarge: () => hasClass(component, css, 'large'),
    getColor: () =>
      hasClass(component, css, 'blue').then(hasClass =>
        hasClass ? 'blue' : 'white',
      ),
    hasText: () => getLoaderTextElement(component).isPresent(),
    getText: () => getLoaderTextElement(component).getText(),
    isError: () => hasClass(component, css, 'error'),
    isSuccess: () => hasClass(component, css, 'success'),
    isLoading: () => hasClass(component, css, 'loading'),
  };
};

export default loaderDriverFactory;
