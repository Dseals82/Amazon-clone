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

function generateItems(items){
    items.forEach((item)=>{

    })
};

getItems();