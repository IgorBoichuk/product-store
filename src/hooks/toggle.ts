import { useState } from "react"
import { ProductModal } from "../types/types"

export const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentItem, setCurrentItem] = useState<ProductModal>()

	const open = (data: ProductModal) => {
		setIsOpen(true)
		setCurrentItem(data)
	}

	const close = () => {
		setIsOpen(false)
	}

	const toggle = () => setIsOpen(isOpen => !isOpen)

	return { isOpen, currentItem, open, close, toggle }
}
