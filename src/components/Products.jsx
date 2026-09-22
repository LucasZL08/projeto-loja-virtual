import ProductCard from './ProductCard'

const Products = ({ setCartCount }) => {
    const produtos = [
        {
            id: 1,
            title: 'Tênis Esportivo',
            category: 'Calçados',
            image: 'https://placehold.co/240x240/aa3bff/ffffff?text=Tenis',
            price: 299.90,
            rating: { rate: 4.5 }
        },
        {
            id: 2,
            title: 'Fone de Ouvido Bluetooth',
            category: 'Eletrônicos',
            image: 'https://placehold.co/240x240/3b82f6/ffffff?text=Fone',
            price: 149.90,
            rating: { rate: 4.8 }
        },
        {
            id: 3,
            title: 'Mochila para Notebook',
            category: 'Acessórios',
            image: 'https://placehold.co/240x240/22c55e/ffffff?text=Mochila',
            price: 189.90,
            rating: { rate: 4.2 }
        },
        {
            id: 4,
            title: 'Relógio Smartwatch',
            category: 'Eletrônicos',
            image: 'https://placehold.co/240x240/f97316/ffffff?text=Relogio',
            price: 349.90,
            rating: { rate: 4.7 }
        }
    ]

    const addToCart = () => {
        setCartCount(prev => prev + 1)
    }

    return (
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>
            <div className="product-list">
                {produtos.map((produto) => (
                    <ProductCard
                        key={produto.id}
                        product={produto}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </section>
    )
}

export default Products