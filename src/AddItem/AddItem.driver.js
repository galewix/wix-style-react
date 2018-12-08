import textDriverFactory from '../Text/Text.driver';
import tooltipDriverFactory from '../Tooltip/Tooltip.driver';

const addItemDriverFactory = ({ element, eventTrigger }) => {
  const byHook = hook => element.querySelector(`[data-hook*="${hook}"]`);
  const tooltipDriver = () =>
    tooltipDriverFactory({ element: byHook('additem-tooltip') });
  const textDriver = () =>
    textDriverFactory({ element: byHook('additem-text') });

  return {
    exists: () => !!element,
    element: () => element,
    getText: () => textDriver().getText(),
    textExists: () => textDriver().exists(),
    getTooltipDriver: () => tooltipDriver(),
    getTooltipContent: () => tooltipDriver().hoverAndGetContent(),
    click: () => eventTrigger.click(element),
  };
};

export default addItemDriverFactory;
