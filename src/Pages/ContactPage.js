import React from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import styled from "styled-components";
import ImageButton from "react-image-button";
import { Card } from "react-bootstrap";
import { AiFillFacebook, AiFillGithub, AiFillMessage } from "react-icons/ai";
import { Grid } from "@material-ui/core/";

const ContactPage = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <Title title={"Contact"} span={"Contact"}></Title>
        </InnerLayout>

        <Grid container spacing={24}>
          <Grid item md={4}>
            <a
              href="https://www.facebook.com/phkt.supakvanich/"
              target="_blank"
            >
              <Card
                className="card"
                style={{
                  width: "23rem",
                  border: "2px solid",
                  height: "10rem",
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                }}
              >
                <Card.Body style={{ alignitems: "center" }}>
                  <Card.Title style={{ margin: "40px 15px 0px 60px" }}>
                    <h1 style={{ color: "black" }}>
                      {" "}
                      Facebook<AiFillFacebook></AiFillFacebook>
                    </h1>
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Grid>
          <Grid item md={4}>
            <a href="https://github.com/Phumkrit" target="_blank">
              <Card
                className="cardgithub"
                style={{
                  width: "23rem",
                  border: "2px solid",
                  height: "10rem",
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                }}
              >
                <Card.Body style={{ alignitems: "center" }}>
                  <Card.Title style={{ margin: "40px 20px 0px 90px" }}>
                    <h1 style={{ color: "black" }}>
                      {" "}
                      GitHub<AiFillGithub></AiFillGithub>
                    </h1>
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Grid>
          <Grid item md={3}>
            <a href="https://line.me/ti/p/NSev-lsBDc" target="_blank">
              <Card
                className="cardline"
                style={{
                  width: "23rem",
                  border: "2px solid",
                  height: "10rem",
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                }}
              >
                <Card.Body style={{ alignitems: "center" }}>
                  <Card.Title style={{ margin: "40px 15px 0px 120px" }}>
                    <h1 style={{ color: "black" }}>
                      {" "}
                      Line<AiFillMessage></AiFillMessage>
                    </h1>
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

const ContactStyled = styled.div``;

export default ContactPage;
