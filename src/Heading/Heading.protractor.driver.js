export const headingDriverFactory = component => ({
  /** returns the component element */
  element: () => component,
  /** returns the component's text */
  getText: async () => component.getText(),
});

export default headingDriverFactory;
