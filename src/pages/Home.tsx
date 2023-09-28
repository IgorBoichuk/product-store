import { ProductList } from "../components/ProductList/ProductList"
import { Pagination } from "../components/Pagination/Pagination"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { fetchProducts } from "../Redux/Products/operation"
import { Watch } from "react-loader-spinner"

export const Home = () => {
	const { loading } = useAppSelector(state => state.productsList)
	const { limit, skip } = useAppSelector(state => state.pagination)
	const dispatch = useAppDispatch()

	// const obj = { name: "alex", age: 22 }
	// const arr = []
	// console.log(obj)
	// arr.push({ ...obj, email: "asdfadsf" })
	// console.log(arr)

	useEffect(() => {
		dispatch(fetchProducts({ limit, skip }))
	}, [dispatch, limit, skip])

	return (
		<>
			{loading ? (
				<Watch
					height="250"
					width="250"
					radius="27"
					color="#4fa94d"
					ariaLabel="watch-loading"
					wrapperStyle={{}}
					visible={true}
				/>
			) : null}

			<ProductList />
			<Pagination />
		</>
	)
}
