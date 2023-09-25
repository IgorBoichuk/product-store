import { ProductList } from "../components/ProductList/ProductList";
import { Pagination } from "../components/Pagination/Pagination";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { fetchProducts } from "../Redux/Products/operation";
import { Watch } from "react-loader-spinner";

export const Home = () => {
  const { limit, skip } = useAppSelector((state) => state.pagination);
  const { loading } = useAppSelector((state) => state.productsList);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ perPage: limit, skipProducts: skip }));
  }, [dispatch, limit, skip]);
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
          wrapperClassName=""
          visible={true}
        />
      ) : null}

      <ProductList />
      <Pagination />
    </>
  );
};
