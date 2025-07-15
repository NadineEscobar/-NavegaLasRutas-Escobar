const getUniqueCategories = (products) => {
  return [...new Set(products.map(p => p.category))];
};

export default getUniqueCategories;