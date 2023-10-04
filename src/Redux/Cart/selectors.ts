export const selectList = state => state.cartList.list;
export const selectFilter = state => state.cartList.filter;

export const selectFiltered = state => {
	const list = selectList(state);
	const filter = selectFilter(state);
	return list.filter(
		item =>
			item.title.toLowerCase().includes(filter.toLowerCase()) ||
			item.description.toLowerCase().includes(filter.toLowerCase())
	);
};
