export const textDriverFactory = component => ({
  /** returns the component element */
  element: () => component,
  /** returns the component text */
  getText: async () => component.getText(),
  /** returns the component tag name */
  getTagName: async () => component.getTagName(),
});

export default textDriverFactory;
