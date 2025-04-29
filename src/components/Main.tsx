import Products from "./Products";
import Cart from "./Cart";

export default function Main() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>
          <Products />
        </div>
        <div className="lg:col-span-1">
          <Cart />
        </div>
      </div>
    </main>
  );
}
