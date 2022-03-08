import React from "react";
import { Image, Badge, Spinner } from "react-bootstrap";
import axios from "axios";
import { BiBookOpen } from "react-icons/bi";
import { InnerLayout, MainLayout } from "../styles/Layout";
import Title from "../Components/Title";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { addtocart } from "../redux/action/cartAction";
import { useSelector, useDispatch } from "react-redux";

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get("https://api.codingthailand.com/api/course");
      setProduct(resp.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const addCart = (p) => {
    const product = {
      id: p.id,
      name: p.title,
      price: p.view,
      qty: 1,
    };

    dispatch(addtocart(product, cart));
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, plese try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <ProductStyle>
      <MainLayout>
        <InnerLayout>
          <Title title={"Product"} span={"Product"} />
        </InnerLayout>
        <div className="center">
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Course Detail</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>View</TableCell>
                  <TableCell>Picture</TableCell>
                  <TableCell>Detail</TableCell>
                </TableRow>
              </TableHead>
              {product.map((p, index) => (
                <TableRow
                  key={p.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="product">
                    {p.id}
                  </TableCell>
                  <TableCell>{p.title}</TableCell>
                  <TableCell>{p.detail}</TableCell>
                  <TableCell>{p.date}</TableCell>
                  <TableCell>
                    <Badge variant="success">{p.view}</Badge>
                  </TableCell>
                  {/* <td>{p.picture}</td> */}
                  <TableCell>
                    <Image src={p.picture} rounded width="60" />
                  </TableCell>
                  <TableCell>
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="outline"
                        className="buybutt"
                        onClick={() => addCart(p)}
                      >
                        Buy <BiBookOpen />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
      </MainLayout>
    </ProductStyle>
  );
};

const ProductStyle = styled.div`
  height: 100vh;
  position: static;

  .center {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .table {
    width: 80%;
  }
  .buybutt {
    border: 1px solid;
  }
`;

export default ProductPage;
