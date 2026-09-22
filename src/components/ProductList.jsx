import ProductCard from "./ProductCard";

const ProductList = ({ produtos = [], onAddToCart }) => {
    return (
        <section className="product-list">
            <h1>Produtos</h1>
            {produtos.map((produtoAtual) => (
                <ProductCard
                    key={produtoAtual.id}
                    product={produtoAtual}
                    onAddToCart={onAddToCart}
                />
            ))}
        </section>
    );
};

export default ProductList;