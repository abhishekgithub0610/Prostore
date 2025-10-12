import { Button } from "@/components/ui/button";
import Image from "next/image";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  //doubt
  const formattedProducts = latestProducts.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));
  //doubt end

  //doubt
  return (
    <ProductList data={formattedProducts} title="Newest Arrivals" limit={4} />
  );
  //return <ProductList data={latestProducts} title="Newest Arrivals" limit={4}/>;
  //doubt
};

export default HomePage;
