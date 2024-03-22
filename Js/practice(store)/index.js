const getPosts = async () => {
  const responce = await fetch("https://fakestoreapi.com/products");
  const prod = await responce.json();
  return prod;
};

const makePost = async () => {
  const products = await getPosts();
  const ProductsContainer = document.querySelector(".product-container");

  for (const item of products) {
    const wrapper = document.createElement("div");
    const prodImg = document.createElement("img");
    const prodTitle = document.createElement("h3");
    const prodDescription = document.createElement("p");
    const lowerInfo = document.createElement("div");
    const prodPrice = document.createElement("p");
    const addToCardBtn = document.createElement("button");

    prodImg.classList.add("prod_img");
    wrapper.classList.add("prod_wrapper");
    prodTitle.classList.add("prod_name");
    prodDescription.classList.add("prod-description");
    lowerInfo.classList.add("lower_info");
    prodPrice.classList.add("price");
    addToCardBtn.classList.add("add_to_card");

    prodImg.src = item.image;
    prodTitle.innerHTML = item.title;
    prodDescription.innerHTML = item.description;
    prodPrice.innerHTML = item.price;
    addToCardBtn.innerHTML = "Add to card";

    addToCardBtn.addEventListener("click", () => {
      addToCard(item);
    });
    lowerInfo.append(prodPrice, addToCardBtn);
    wrapper.append(prodImg, prodTitle, prodDescription, lowerInfo);
    ProductsContainer.appendChild(wrapper);
    //  temporarily!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!;
    // addToCard(item);
  }
};

const addToCard = (transferredProduct) => {
  const ulCart = document.querySelector(".prod_in_cart_list");
  // console.log(transferredProduct);
  const listItemCart = document.createElement("li");
  const sectionCart1 = document.createElement("section");
  const sectionCart2 = document.createElement("section");
  const sectionCart3 = document.createElement("section");
  const imgCart = document.createElement("img");
  const nameItemCart = document.createElement("h4");
  const priceCart = document.createElement("h4");
  const quantity = document.createElement("input");
  const removeItemBtnCart = document.createElement("button");

  //add class
  listItemCart.classList.add("item_in_cart");
  sectionCart1.classList.add("prod_main_info");
  sectionCart2.classList.add("prod_price_info");
  sectionCart3.classList.add("prod_main_info");
  imgCart.classList.add("img_in_cart");
  nameItemCart.classList.add("prod_name");
  quantity.classList.add("quantity");
  priceCart.classList.add("priceCart");

  //pass the value
  imgCart.src = transferredProduct.image;
  nameItemCart.innerHTML = transferredProduct.title;
  priceCart.innerHTML = transferredProduct.price;
  quantity.value = 1;
  quantity.min = 1;
  quantity.type = "number";
  removeItemBtnCart.innerHTML = "Remove";

  //add event
  removeItemBtnCart.addEventListener("click", () => {
    removeFromCart(ulCart, listItemCart, transferredProduct);
  });

  //append element
  sectionCart1.append(imgCart, nameItemCart);
  sectionCart2.append(priceCart);
  sectionCart3.append(quantity, removeItemBtnCart);
  listItemCart.append(sectionCart1, sectionCart2, sectionCart3);
  ulCart.append(listItemCart);
  increaseTotalPrice(transferredProduct);
};

const removeFromCart = (ulCart, listItemCart, transferredProduct) => {
  ulCart.removeChild(listItemCart);
  reduceTotalPrice(transferredProduct);
};

let total = 0;
const increaseTotalPrice = (transferredProduct) => {
  total += transferredProduct.price;
  const priceValue = document.querySelector(".price_value");
  priceValue.innerHTML = total.toFixed(2);
};
const reduceTotalPrice = (transferredProduct) => {
  total -= transferredProduct.price;
  const priceValue = document.querySelector(".price_value");

  if (total < 0.1) {
    priceValue.innerHTML = 0;
  } else {
    priceValue.innerHTML = total.toFixed(2);
  }
};
makePost();
