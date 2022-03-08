import React from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <CartStyle>
      <MainLayout>
        <InnerLayout>
          <Title title={"Cart"} span={"Cart"} />
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
                  <TableCell>QTY</TableCell>
                  <TableCell>Detail</TableCell>
                </TableRow>
              </TableHead>
              {cart.map((c, index) => (
                <TableRow
                  key={c.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="product">
                    {c.id}
                  </TableCell>
                  <TableCell>{++index}</TableCell>
                  <TableCell>{c.id}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.price}</TableCell>
                  <TableCell>{c.qty}</TableCell>
                  <TableCell>{c.price * c.qty}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
      </MainLayout>
    </CartStyle>
  );
};

const CartStyle = styled.div`
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
`;

export default CartPage;
