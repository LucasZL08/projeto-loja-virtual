import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("electronics");

    useEffect(() => {
        fetch(`${API_URL}/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [API_URL, category]);

    return (
        <>
            <Header />
            <h1>Todos os produtos</h1>
            <button onClick={() => setCategory("electronics")}>Eletrônicos</button>
            <button onClick={() => setCategory("jewelery")}>Joias</button>

            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductsPage;