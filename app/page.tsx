import Billboard from "@/components/Billboard";
import HomeProducts from "@/components/HomeProducts";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <hr />
      <Billboard />
      <HomeProducts />
    </div>
  );
}
