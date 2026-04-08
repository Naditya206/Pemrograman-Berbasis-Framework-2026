import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Login Page</h1>
      <p className="mb-4">Silakan login untuk mengakses halaman produk dan about.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Simulasi Login
      </button>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Kembali ke Home
      </Link>
    </div>
  );
}
