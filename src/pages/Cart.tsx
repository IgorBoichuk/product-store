import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { CartItem } from "../components/CartItem/CartItem";
import { EmptyCart } from "../components/EmptyCart/EmptyCart";
import { cartQuary } from "../Redux/Cart/slice";
import { selectFiltered } from "../Redux/Cart/selectors";

export const Cart = () => {
	const { totalPrice } = useAppSelector(state => state.cartList);
	const { filter } = useAppSelector(state => state.cartList);
	// console.log(filter);

	const list = useAppSelector(selectFiltered);
	const dispatch = useAppDispatch();

	const cartQ = event => {
		dispatch(cartQuary(event.target.value));
	};

	// const getFilteredData = () => {
	// 	return list.filter(item => item.title.includes(filter));
	// };
	// const filteredData = getFilteredData();

	return (
		<>
			{list.length ? (
				<div>
					{" "}
					<TotalPrice>Total Price: {totalPrice} $</TotalPrice>{" "}
					<Input type="text" placeholder="Find here" onChange={cartQ} />{" "}
				</div>
			) : (
				<EmptyCart />
			)}

			<CartList>
				<hr />
				{/* {list.length ? filter.map(item => <CartItem {...item} key={item.id} />) : null} */}
				{list.map(item => (
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

export const Input = styled.input`
	display: block;
	margin: 0 auto;

	width: 500px;
	height: 30px;
	border-radius: 10px;
	padding: 20px;
	font-size: 20px;
`;
