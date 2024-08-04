import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import HeroSection from "apps/front-office/design-system/components/Banner/HeroSection";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { products } from "apps/front-office/utils/data";
import { useState } from "react";
import { popularProductsAtom } from "../../atoms/popular-products-atom";
import PopularProducts from "./components/PopularProducts";
import "./HomePage.css";
import DailyBestSellsSection from "./sections/DailyBestSellsSection";
import DealsDayTwo from "./sections/DealsDayTwo/DealsDayTwo";
import FeaturedCategories from "./sections/FeaturedCategories/FeaturedCategories";

export default function HomePage() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    setData(products);
    popularProductsAtom.change("products", products);
  };

  useOnce(() => {
    fetchData();
  });

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />

      <FeaturedCategories />
      <div className="App">
        <DailyBestSellsSection />
      </div>
      {data && <PopularProducts />}
      <Button className="bg-primary-default hover:bg-primary-dark font-custom">
        Welcome Home
      </Button>
      <div>
        <DealsDayTwo />
      </div>

      <HeroSection />
    </>
  );
}
