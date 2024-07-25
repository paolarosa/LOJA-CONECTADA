import { UlStyled } from "./styles";
import { useContext } from "react";
//import { CartContext, iCartProducts } from "../../contexts/CartContext";
/* import { toast } from "react-toastify"; */

export const ProductsList = () => {
  /*const {
    products,
    currentSale,
    setCurrentSale,
    filteredProducts,
    setFilteredProducts,
    addCart,
  } = useContext(CartContext);

  return (
    <UlStyled>
      {products.length &&
        products.map((product, index) => (
          <li key={product.id}>
            <div>
              <img src={product.img} />
            </div>
            <h3>{product.name}</h3>
            <h4>{product.category}</h4>
            <p>R${product.price.toFixed(2)}</p>
            <button onClick={() => addCart(product)}>Adicionar</button>
          </li>
        ))}
    </UlStyled>
  );*/
  return (
    <UlStyled>
      <li>
        <div>
          <img src="path/to/default-image.jpg" alt="Default Product" />
        </div>
        <h3>Default Product Name</h3>
        <h4>Default Category</h4>
        <p>R$0.00</p>
        <button onClick={() => console.log("Add to cart")}>Adicionar</button>
      </li>
    </UlStyled>
  );
};
