import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetailPage = () => {
  const { idProduto } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/products/${idProduto}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [API_URL, idProduto]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductDetailPage;
