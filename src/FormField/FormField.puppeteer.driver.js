import tooltipDriverFactory from '../Tooltip/Tooltip.puppeteer.driver.js';

const formFieldDriverFactory = async (component, page) => {
  return {
    element: () => component,
    getLabelValue: async () => {
      const label = await component.$('[data-hook="formfield-label"]');
      return page.evaluate(
        _label => _label.querySelector('label').innerText,
        label,
      );
    },
    getTooltipInfoValue: async delay => {
      const infoIcon = await component.$('[data-hook="formfield-infoicon"]');
      await infoIcon.hover();

      const tooltip = await tooltipDriverFactory(
        await page.$('[data-hook="formfield-infotooltip"]'),
        page,
      );
      const tooltipContent = await tooltip.getTooltipTextContent(delay);
      await page.mouse.move(0, 0);

      return tooltipContent;
    },
    isRequired: async () =>
      Boolean(await component.$('[data-hook="formfield-asterisk"]')),
  };
};

export default formFieldDriverFactory;
