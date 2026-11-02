interface Product {
    id: number;
    name: string;
    price: number;
    brand?: string;
}

function displayProduct(product :Product) {
    console.log("Name = " + product.name);
    console.log("Price = " + product.price);
}

let product1: Product = {
    id: 1,
    name: "Mouse",
    price: 5000,
    brand: "coolermaster"
};
let product2: Product = {
    id: 2,
    name: "Keyboard",
    price: 5300,
    brand: "Kreo"
};
console.log(product1);
console.log(product2);
