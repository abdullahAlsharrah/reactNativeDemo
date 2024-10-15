import { instance } from ".";

const getAllCategories = async () => {
  try {
    const res = await instance.get("/mini-project/api/categories/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const getAllproducts = async () => {
  try {
    const res = await instance.get("/mini-project/api/items/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const getProductById = async (productId) => {
  try {
    const res = await instance.get(`/mini-project/api/items/${productId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCategories, getAllproducts, getProductById };
