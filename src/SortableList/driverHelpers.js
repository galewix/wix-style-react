import ReactTestUtils from 'react-dom/test-utils';

import DragDropContextProvider from '../DragDropContextProvider';
import DraggableSource from '../DragAndDrop/Draggable/components/DraggableSource';
import DraggableTarget from '../DragAndDrop/Draggable/components/DraggableTarget';

const findInstance = (wrapper, cb) => {
  let itemInstance = null;
  ReactTestUtils.findAllInRenderedTree(wrapper, ins => {
    const portalRoot = ins && (ins.portal || ins.tooltipContent);
    if (portalRoot && ReactTestUtils.isCompositeComponent(portalRoot)) {
      return ReactTestUtils.findAllInRenderedTree(portalRoot, insInPortal => {
        if (cb(insInPortal)) {
          itemInstance = insInPortal;
        }
        return Boolean(itemInstance);
      });
    } else if (cb(ins)) {
      itemInstance = ins;
    }
    return Boolean(itemInstance);
  });
  return itemInstance;
};

export const getInstanceOfDraggableProvider = wrapper =>
  findInstance(wrapper, ins => ins instanceof DragDropContextProvider);

export const getInstanceOfDraggableSource = (wrapper, itemId) =>
  findInstance(
    wrapper,
    ins => ins instanceof DraggableSource && ins.props.id === itemId,
  );

export const getInstanceOfDraggableTarget = (wrapper, itemId) =>
  findInstance(
    wrapper,
    ins => ins instanceof DraggableTarget && ins.props.id === itemId,
  );
