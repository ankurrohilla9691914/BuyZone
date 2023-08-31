import { Box} from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";
import LoginDialog from "../login/LoginDialog";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/action";
import { useEffect, useMemo } from "react";
import Slide from "./Slide";

import { TailSpin } from "react-loader-spinner";

const Home = () => {
  /**home component is subscibing -> store?.product means producSlice*/
  /** use isLoading/isSucess to render product data  */
  const {
    data: products,
    isLoading,
    isSuccess,
    errorMessage,
  } = useSelector((store) => store?.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const topOfferData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Top Offers";
      }) || []
    );
  }, [products]);

  const mobileData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Mobile";
      }) || []
    );
  }, [products]);
  const fashionData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Fashion";
      }) || []
    );
  }, [products]);

  const electronicsData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Electronics";
      }) || []
    );
  }, [products]);

  const appliancesData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Home Appliances";
      }) || []
    );
  }, [products]);

  const homeData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Home Decoration";
      }) || []
    );
  }, [products]);

  const groceryData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Grocery";
      }) || []
    );
  }, [products]);

  const beautyData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Beauty";
      }) || []
    );
  }, [products]);
  const sportsData = useMemo(() => {
    return (
      products.filter((product) => {
        return product.category === "Sports";
      }) || []
    );
  }, [products]);

  return isLoading ? (
    <TailSpin
      height="80"
      width="80"
      color="#2874f0"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      wrapperClass=""
      visible={true}
    />
  ) : (
    <>
      <NavBar />
      <Box style={{ backgroundColor: "#f2f2f2" }}>
        <Banner />
        <LoginDialog />
        <Slide
          title={"Deal of the day"}
          products={topOfferData}
          timer
          id={"Top Offers"}
        />
        <Slide title={"Mobile"} products={mobileData} id={"Mobile"} />
        <Slide title={"Fashion"} products={fashionData} id={"Fashion"} />
        <Slide
          title={"Electronics"}
          products={electronicsData}
          id={"Electronics"}
        />
        <Slide title={"Home"} products={homeData} id={"Home"} />
        <Slide
          title={"Appliances"}
          products={appliancesData}
          id={"Appliances"}
        />
        <Slide title={"Grocery"} products={groceryData} id={"Grocery"} />
        <Slide title={"Sports"} products={sportsData} id={"Sports"} />
        <Slide
          title={"Beauty, Toys and More"}
          products={beautyData}
          id={"Beauty, Toys and More"}
        />
      </Box>
    </>
  );
};
export default Home;
