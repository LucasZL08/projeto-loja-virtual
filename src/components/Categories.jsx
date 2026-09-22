import CategoryCard from "./CategoryCard"

const Categories = () => {

    return (
        <section className="categories">
            <h2>Categorias</h2>

            <div className="category-list">
                <CategoryCard nomeCategoria='Roupas' iconeCategoria='👔'/>
                <CategoryCard nomeCategoria='Eletrônicos' iconeCategoria='🎧' />
                <CategoryCard nomeCategoria='Acessórios' iconeCategoria='🕶️' />
            </div>
        </section>
    )
}

export default Categories