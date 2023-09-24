import { styled } from "styled-components";
import { useAppSelector } from "../hooks/hook";
import { CartItem } from "../components/CartItem/CartItem";

export const Cart = () => {
  const { list, totalPrice } = useAppSelector((state) => state.cartList);

  return (
    <>
      <TotalPrice>Total Price: {totalPrice} $</TotalPrice>
      <CartList>
        <hr />
        {list.map((item) => (
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
