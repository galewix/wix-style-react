const tableActionCellDriverFactory = component => ({
  element: () => component,

  /** Get the primary action placeholder element */
  getPrimaryActionPlaceholder: () =>
    component.$('[data-hook="table-action-cell-placeholder"]'),
  /** Get the primary action button element */
  getPrimaryActionButton: () =>
    component.$('[data-hook="table-action-cell-primary-action"]'),
  /** Get the visible secondary actions wrapper element */
  getVisibleActionsWrapper: () =>
    component.$('[data-hook="table-action-cell-visible-actions"]'),
  /** Get the secondary actions popover menu element */
  getHiddenActionsPopoverMenu: () =>
    component.$('[data-hook="table-action-cell-popover-menu"]'),
});

export default tableActionCellDriverFactory;
