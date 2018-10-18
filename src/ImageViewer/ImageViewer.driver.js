import React from 'react';
import ReactDOM from 'react-dom';
import {buttonTestkitFactory} from '../../testkit';

import addItemDriverFactory from '../AddItem/AddItem.driver';
import tooltipDriverFactory from '../Tooltip/Tooltip.driver';

const imageViewerDriverFactory = ({component, wrapper, element, eventTrigger}) => {
  const addItemDataHook = 'add-image';
  const updateDataHook = 'update-image';
  const removeDataHook = 'remove-image';

  const byHook = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);
  const image = () => byHook('image-viewer-image');
  const errorIcon = () => byHook('error-tooltip');
  const addItem = () => byHook(addItemDataHook);
  const addItemDriver = addItemDriverFactory({wrapper, element, eventTrigger});
  const tooltipDriver = addItemDriver.getTooltipDriver();
  const addItemClick = () => addItemDriverFactory({wrapper, element: byHook('add-image'), eventTrigger}).click();
  const updateIcon = () => byHook(updateDataHook);
  const removeIcon = () => byHook(removeDataHook);
  const updateButton = () => buttonTestkitFactory({wrapper: element, dataHook: updateDataHook});
  const removeButton = () => buttonTestkitFactory({wrapper: element, dataHook: removeDataHook});

  return {
    getAddItemDataHook: () => addItemDataHook,
    getElement: () => element,
    getContainerStyles: () => element.getAttribute('style'),
    getImageUrl: () => image().getAttribute('src'),
    getErrorTooltipContent: () => tooltipDriverFactory({wrapper, element: errorIcon()}).hoverAndGetContent(),
    getAddTooltipContent: () => tooltipDriver.hoverAndGetContent(),
    getUpdateTooltipContent: () => tooltipDriverFactory({wrapper, element: updateIcon()}).hoverAndGetContent(),
    getRemoveTooltipContent: () => tooltipDriverFactory({wrapper, element: removeIcon()}).hoverAndGetContent(),
    isAddItemVisible: () => !!addItem(),
    isImageVisible: () => !!image(),
    isErrorVisible: () => !!errorIcon(),
    clickAdd: () => addItemClick(),
    clickUpdate: () => updateButton().click(),
    clickRemove: () => removeButton().click(),
    updateExists: () => updateButton().exists(),
    exists: () => !!element,
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default imageViewerDriverFactory;
