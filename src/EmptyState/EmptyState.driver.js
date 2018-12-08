const emptyStateDriverFactory = ({ element }) => {
  const byDataHook = dataHook =>
    element.querySelector(`[data-hook="${dataHook}"]`);

  const getTitleContainer = () => byDataHook('empty-state-title-container');
  const getSubtitleContainer = () =>
    byDataHook('empty-state-subtitle-container');
  const getImageContainer = () => byDataHook('empty-state-image-container');
  const getChildrenContainer = () =>
    byDataHook('empty-state-children-container');

  const getTitle = () => getTitleContainer().firstChild;
  const getSubtitle = () => getSubtitleContainer().firstChild;
  const getImageElement = () =>
    getImageContainer().querySelector('[data-hook="image-element"]');
  const getImageNode = () =>
    getImageContainer().querySelector('[data-hook="image-node"]');

  return {
    /** Returns `true` wheter the elemnt exists or not */
    exists: () => !!element,

    /** Returns the element */
    element: () => element,

    /** Returns the text of the title */
    getTitleText: () => getTitle().textContent,

    /** Returns the text of the subtitle */
    getSubtitleText: () => getSubtitle().textContent,

    /** Returns the URL of the image element (if persist) */
    getImageUrl: () => getImageElement().src || '',

    /** Returns `true` if a node passed via the `image` prop exists */
    imageNodeExists: () => !!getImageNode(),

    /** Returns `true` if children content exists */
    childrenContentExists: () => !!getChildrenContainer(),
  };
};

export default emptyStateDriverFactory;
