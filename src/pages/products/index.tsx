import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const ProductsPageCSR = () => {
    const { data, error, isLoading } = useSWR("/api/produk", fetcher);

    return (
        <div>
            <h1>Halaman Products (CSR)</h1>
            <TampilanProduk products={isLoading ? [] : data?.data || []} />
        </div>
    );
};

export default ProductsPageCSR;
