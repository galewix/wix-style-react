const driverFactory = component => {
  const getDropdown = () =>
    component.$(`[data-hook="dropdown-layout-options"]`);
  const getDropdownItemElement = index =>
    component.$$(`[data-hook="dropdown-layout-options"] div`).get(index);

  return {
    getDropdown,
    getDropdownItemElement,
    getDropdownItem: index => getDropdownItemElement(index).getText(),
    getDropdownItemsCount: () =>
      component
        .$$(`[data-hook="dropdown-layout-options"] div`)
        .getText()
        .count(),
    selectItemById: itemId =>
      component.$(`[data-hook^="dropdown-item-${itemId}"]`).click(),
  };
};

export default driverFactory;
