const highlighterDriverFactory = component => ({
  getElement: () => component,
  html: () => component.getAttribute('innerHTML'),
});

export default highlighterDriverFactory;
