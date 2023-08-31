import { useState, useEffect } from "react";

import { styled, Box, Typography, Grid } from "@mui/material";

import ProductDetail from "./ProductDetail";
import ActionItem from "./ActionItem";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/action";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
    justifyContent: "center",
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  & > p {
    margin-top: 10px;
  }
`;

const DetailView = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const { id } = useParams();

  const { loading, singleProductData: product } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductById(id));
  }, [dispatch, product, id, loading]);

  return (
    <Component>
      <Box></Box>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography style={{ fontSize: 30, fontWeight: 600 }}>
              {product?.title?.longTitle}
            </Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Ratings & 1 Reviews
              {/* <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span> */}
            </Typography>
            <Typography>
              <span style={{ fontSize: 28 }}>₹{product?.price?.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#878787" }}>
                <strike>₹{product?.price?.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product?.price?.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
