import { Link } from "react-router";

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <article className="product-card">
            <img src={product.image} alt={product.title} />
            <p className="product-category">{product.category}</p>
            <h3>{product.title}</h3>
            <p className="product-rating">⭐⭐⭐⭐⭐ ({product.rating?.rate ?? 0})</p>
            <p className="product-price">R$ {product.price}</p>
            <Link to={`/produtos/${product.id}`}>Ver mais</Link>
            <button className="btn-secondary" onClick={onAddToCart}>
                Adicionar ao carrinho
            </button>
        </article>
    );
};

export default ProductCard;
