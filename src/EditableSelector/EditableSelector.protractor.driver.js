const getOptions = component =>
  component.$$('[data-hook="editable-selector-item"]');
const getOption = (component, index) => getOptions(component).get(index);
const getRow = (component, index) =>
  component.$$('[data-hook="editable-selector-row"]').get(index);
const hover = element =>
  browser
    .actions()
    .mouseMove(element)
    .perform();
const enterText = (component, text) =>
  component
    .$('[data-hook="edit-row-wrapper"] input')
    .clear()
    .sendKeys(text);

const editableSelectorDriverFactory = component => ({
  title: () => component.$('[data-hook="editable-selector-title"]').getText(),
  createNewRow: async text => {
    await component.$('[data-hook="new-row-button"]').click();
    await enterText(component, text);
  },
  clickApprove: () =>
    component.$('[data-hook="edit-row-approve-button"]').click(),
  item: index => getOption(component, index),
  editRow: async (index, text) => {
    const row = getRow(component, index);
    await hover(row);
    await row.$('[data-hook="edit-item"]').click();
    await enterText(component, text);
  },
  clickCancel: () =>
    component.$('[data-hook="edit-row-cancel-button"]').click(),
  deleteRow: async index => {
    const row = getRow(component, index);
    await hover(row);
    await row.$('[data-hook="delete-item"]').click();
  },
  items: () => getOptions(component),
  toggleItem: index => getOption(component, index).click(),
  isSelected: index =>
    getOption(component, index)
      .$('input')
      .isSelected(),
  element: () => component,
});

export default editableSelectorDriverFactory;
