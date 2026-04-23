import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

// {digunakan server-side rendering}
export async function getServerSideProps({
  params,
}: {
  params: { produk: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`
  );
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}

// {digunakan static-site generation di-comment/dihapus untuk menghindari error deployment}
/*
export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    const response = await res.json();

    const paths = response.data.map((product: ProductType) => ({
        params: { produk: product.id }
    }));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);
    const response: { data: ProductType } = await res.json();

    return {
        props: {
            product: response.data,
        }
    };
}
*/
