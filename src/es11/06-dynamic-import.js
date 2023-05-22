// Dynamic imports for modules, for better performance
const btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  const module = await import('./06-module.js');
  module.hello();
});