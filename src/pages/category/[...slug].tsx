import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Halaman Category</h1>
      <ul>
        {Array.isArray(slug) ? (
          slug.map((segment, index) => (
            <li key={index}>{segment}</li>
          ))
        ) : (
          <li>Tidak ada parameter</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryPage;