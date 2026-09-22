import CategoryCard from "./CategoryCard"

const CategoryList = ({categorias}) => {
    return(
        <section className="category-list">
            <h1>Categorias</h1>
            {categorias.map(categoriasAtual => {
                <CategoryCard categoria={categoriasAtual}/>
            })}
        </section>

    )
}

export default CategoryList