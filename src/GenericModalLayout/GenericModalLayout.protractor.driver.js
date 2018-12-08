const GenericModalLayoutDriverFactory = component => {
  return {
    getElement: () => component,
    isFullscreen: async () =>
      (await component.getAttribute('data-fullscreen')) === 'true',
  };
};

export default GenericModalLayoutDriverFactory;
