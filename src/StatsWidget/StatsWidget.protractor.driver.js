const statsWidgetDriverFactory = component => ({
  element: () => component,
  numberOfStatistics: () =>
    component.$$('[data-hook="statistics-item"]').count(),
});

export default statsWidgetDriverFactory;
