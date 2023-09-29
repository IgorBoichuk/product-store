import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home"
import { Cart } from "../../pages/Cart"
import { Header } from "../Header/Header"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	)
}

export default App
