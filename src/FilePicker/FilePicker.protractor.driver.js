const filePickerDriverFactory = component => ({
  click: () => component.click(),
  getInput: () => component.$(`input`),
  getSubLabel: () => component.$(`[data-hook="sub-label"]`).getText(),
  getMainLabel: () => component.$(`[data-hook="main-label"]`).getText(),
  hasError: () => !!component.$(`[data-hook="filePicker-error"]`),
  errorMessage: () => component.$(`[data-hook="filePicker-error"]`).getText(),
  element: () => component,
});

export default filePickerDriverFactory;
