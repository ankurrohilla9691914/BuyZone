import { useState, useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase, List, ListItem, Box, styled } from "@mui/material";

import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts } from "../../redux/action";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
  max-height: 400px;
  overflow-y: scroll;
  z-index:100;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
  const [searchText, setSearchText] = useState();
  const [open, setOpen] = useState(true);

  const hanldeOnChange = (text) => {
    setSearchText(text);
    setOpen(false);
  };

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

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => hanldeOnChange(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {searchText && (
        <ListWrapper hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(searchText.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
