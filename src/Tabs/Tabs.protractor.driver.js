export default component => {
  const getItems = () => component.$$('li');
  const getItemsCount = () => getItems().count();
  const element = () => component;

  return { getItems, getItemsCount, element };
};
