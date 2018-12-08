const fieldDriverFactory = component => {
  const byHook = hook => component.$(`[data-hook*=${hook}]`);

  return {
    element: () => component,
    getLabel: () => byHook('formfield-label'),
    isRequired: () => !!byHook('formfield-asterisk'),
    isInfoIconVisible: () => !!byHook('formfield-infoicon'),
  };
};

export default fieldDriverFactory;
