import { styled } from "styled-components";
import { useAppSelector } from "../../hooks/hook";
import { Product } from "../../types/types";
import { Card } from "../Card/Card";

export const ProductList = () => {
  const products: Product[] = useAppSelector(
    (state) => state.productsList.products
  );

  return (
    <div>
      <StyledList>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </StyledList>
    </div>
  );
};

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 90vw;
  padding: 30px 0;
`;
