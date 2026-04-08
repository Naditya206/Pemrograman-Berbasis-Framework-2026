import TampilanProduk from "../../views/product";
import { ProductType } from "../../types/Product.type";

const ProductsPageSSR = (props: { products: ProductType[] }) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Products Server (SSR)</h1>
            <TampilanProduk products={products} />
        </div>
    );
};

export default ProductsPageSSR;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/produk");
    const response = await res.json();
    return {
        props: {
            products: response.data || [],
        },
    };
}
