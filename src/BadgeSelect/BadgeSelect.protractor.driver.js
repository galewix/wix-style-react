const badgeSelectDriverFactory = component => {
  const getBadgeElement = () => component.$(`[data-hook="badgeSelect-badge-wrapper"] div`);
  const getDropdownItem = index => component.$$(`[data-hook="dropdown-layout-options"] div`).get(index);

  return {
    /** Returns the element */
    element: () => component,

    /** Click the badge */
    clickBadge: () => getBadgeElement().click(),

    /** Select a specific option */
    async selectOption(index) {
      await this.clickBadge();
      await getDropdownItem(index).click();
    }
  };

};
export default badgeSelectDriverFactory;
