
import { IProduct } from "@/type"
import Image from "next/image"



export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="rounded-2xl shadow-md p-4 hover:shadow-xl transition border">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.product_name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{product.product_name}</h2>
        <p className="text-sm text-gray-500">{product.brand} • {product.category}</p>
        <p className="mt-2 text-xl font-bold text-blue-600">${product.price}</p>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
