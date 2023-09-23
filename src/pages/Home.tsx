import { ProductList } from "../components/ProductList/ProductList";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/hook";
import { fetchProducts } from "../Redux/Products/operation";

export const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <ProductList />
      <Pagination />
    </>
  );
};
