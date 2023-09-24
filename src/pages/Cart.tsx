import { styled } from "styled-components";
import { useAppSelector } from "../hooks/hook";
import { CartItem } from "../components/CartItem/CartItem";

export const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cartList.list);

  return (
    <>
      <TotalPrice>Total Price: {0}$</TotalPrice>
      <CartList>
        <hr />
        {cartProducts.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </CartList>
    </>
  );
};

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  max-height: 400px;
  overflow: hidden;
`;

export const TotalPrice = styled.h1`
  text-align: center;
`;
