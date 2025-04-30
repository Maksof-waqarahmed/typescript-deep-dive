/*
🧪 Challenge (Day 9)
Create a file utility-types.ts and:

Define a Product interface with: id, title, price, description

Create:

A Partial<Product> for updateProduct

A Pick<Product, "title" | "price"> for a card view

An Omit<Product, "description"> for a lightweight type

A Readonly<Product> for a frozen product

A Record<"fruits" | "drinks", Product[]> for a category list
*/

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
}

type UpdateProduct = Partial<Product>;
const updateProduct: UpdateProduct = {
    title: "New Product Title",
};

type ProductCard = Pick<Product, "title" | "price">;
const productCard: ProductCard = {
    title: "Product Title",
    price: 19.99,
};

type LightweightProduct = Omit<Product, "description">;
const lightweightProduct: LightweightProduct = {
    id: 1,
    title: "Lightweight Product",
    price: 9.99,
};
type FrozenProduct = Readonly<Product>;
const frozenProduct: FrozenProduct = {
    id: 2,
    title: "Frozen Product",
    price: 29.99,
    description: "This product cannot be modified.",
};
// frozenProduct.title = "New Title"; // ❌ Error: Cannot assign to 'title' because it is a read-only property
// frozenProduct.price = 39.99; // ❌ Error: Cannot assign to 'price' because it is a read-only property 
// frozenProduct.description = "New description"; // ❌ Error: Cannot assign to 'description' because it is a read-only property


type Category = "fruits" | "drinks";
type CategoryProducts = Record<Category, Product[]>;

