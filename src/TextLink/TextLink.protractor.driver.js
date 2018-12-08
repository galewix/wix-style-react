const TextLinkFactory = component => {
  return {
    /* Returns the element */
    element: () => component,
    /* Returns the element's text content */
    getText: () => component.getText(),
    /* Hover the element with the mouse */
    hover: () =>
      browser
        .actions()
        .mouseMove(component)
        .perform(),
    /* Returns `true` if a prefix icon exists */
    isPrefixIconExists: () =>
      component.$('[data-hook="prefix-icon"]').isPresent(),
    /* Returns `true` if a suffix icon exists */
    isSuffixIconExists: () =>
      component.$('[data-hook="suffix-icon"]').isPresent(),
  };
};

export default TextLinkFactory;
