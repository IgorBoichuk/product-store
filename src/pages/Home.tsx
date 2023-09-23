import { ProductList } from "../components/ProductList/ProductList";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { useAppSelector } from "../hooks/hook";

export const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Pagination />
    </>
  );
};
