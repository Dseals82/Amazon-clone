function getItems(){
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            items.push({
                id: doc.id,
                image: doc.data().img,
                name: doc.data().name,
                make: doc.data().make,
                rating: doc.data().rating,
                price: doc.data().price
            });
        });
        generateItems(items);
    });
};

function addToCart(item){
    let cartItem = db.collection("cart-items").doc(item.id);
    cartItem.get()
    .then((doc) => {
            if (doc.exists) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                cartItem.set({
                    image: item.image,
                    make: item.make,
                    name: item.name,
                    rating: item.rating,
                    price: item.price,
                    quantity: 1
                });
            }
        })

    
}

function generateItems(items){
    let itemsHTML = "";
    items.forEach((item)=>{
        let doc = document.createElement("div");
        doc.classList.add("main-product");
        doc.innerHTML = `
        <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
            
        <img class=" w-full h-full object-contain" src="${item.image}" alt="${item.name}">
        </div>
        <div class="product-name text-gray-700 font-bold mt-2 text-sm">
            ${item.name}
        </div>
        <div class="product-make text-green-700 font-bold ">
            ${item.make}
        </div>
        <div class="product-rating text-yellow-300 font-bold my-1">
            ⭐⭐⭐⭐⭐ ${item.rating}
        </div>
        <div class="product-price font-bold text-gray-700 text-lg">
            $${item.price}
        </div>
        `
       let addToCartEl = document.createElement("div");
       addToCartEl.classList.add("hover:bg-yellow-600",
       "cursor-pointer","text-md","rounded","text-white",
       "justify-center","items-center","flex","bg-yellow-500",
       "add-to-cart","h-8","w-28");
        addToCartEl.innerText = "Add to cart";
        doc.appendChild(addToCartEl);
        addToCartEl.addEventListener("click",function(){
            addToCart(item);
        });
        document.querySelector(".main-section-products").appendChild(doc);
        
    });
};

getItems();