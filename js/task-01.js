const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  const header = item.querySelector('h2');
  const itemCount = item.querySelectorAll('li').length;
  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${itemCount}`);
});
