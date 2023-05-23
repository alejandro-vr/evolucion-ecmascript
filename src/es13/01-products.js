// Before, without top level await (code is wrong, but the idea is: don't need function enclosure)
/* import fetch from "node-fetch";
const getProducts = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products');
  const products = await response.json();
  return await products;
}
export { getProducts }; */

// Now, with top level await
import fetch from "node-fetch";
const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();
export { products };