const emptyStateDriverFactory = component => {
  return {
    /** Returns the element */
    element: () => component,
  };
};

export default emptyStateDriverFactory;
