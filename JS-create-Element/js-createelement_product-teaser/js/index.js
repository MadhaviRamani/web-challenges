console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";



const productTeaserContainer = document.querySelector('[data-js="product-teaser-container"]');

const productTeaser = document.createElement("div");
productTeaser.classList.add("product-teaser");

const productImage = document.createElement("img");
productImage.classList.add("product-teaser__image");
productImage.src = imageSrc;
productImage.alt = name;

const productName = document.createElement("h2");
productName.classList.add("product-teaser__name");
productName.textContent = name;

const productDescription = document.createElement("p");
productDescription.classList.add("product-teaser__description");
productDescription.textContent = description;

const productCategories = document.createElement("ul");
productCategories.classList.add("product-teaser__categories");

const categoryItem1 = document.createElement("li");
categoryItem1.textContent = category1;

const categoryItem2 = document.createElement("li");
categoryItem2.textContent = category2;

const categoryItem3 = document.createElement("li");
categoryItem3.textContent = category3;

productCategories.append(categoryItem1, categoryItem2, categoryItem3);

const productPrice = document.createElement("p");
productPrice.classList.add("product-teaser__price");
productPrice.textContent = price;

productTeaser.append(
  productImage,
  productName,
  productDescription,
  productCategories,
  productPrice
);

productTeaserContainer.append(productTeaser);