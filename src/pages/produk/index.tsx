import TampilanProduk from "@/views/product";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";

const ProdukPage = () => {
  const { data, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default ProdukPage;