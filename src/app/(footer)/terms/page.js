"use client";
import { Card, styled, Box, Typography } from "@mui/material";

export default function Terms() {
  return (
    <main>
      <Card
        sx={{
          textAlign: "center",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "gray" }}>TERMS OF USE</h1>
      </Card>
      <Container>
        <Card sx={{ height: "100vh", padding: "20px" }}>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A delectus
            corrupti ut quas commodi, sapiente totam nisi odio dolor, illo eos
            aperiam omnis ratione sunt, beatae optio perspiciatis voluptatem
            vitae reiciendis eaque voluptas quod. Vitae maxime maiores debitis
            nostrum? Doloribus incidunt ea inventore, saepe, cum ex pariatur
            quaerat facilis assumenda delectus accusantium tempore! Consectetur
            laborum repellendus reiciendis officia iusto nemo enim, eos aperiam,
            libero autem optio fugit? Dignissimos earum minima ab odit nobis,
            facere assumenda in repudiandae cumque amet. Quod suscipit corrupti
            aut neque nam sint blanditiis numquam omnis voluptates beatae fugit
            obcaecati totam officiis sed, deserunt odio voluptate fuga!
          </Typography>
        </Card>
      </Container>
    </main>
  );
}

const Container = styled(Box)(({ theme }) => ({
  padding: "20px 200px",

  [theme.breakpoints.down("md")]: {
    padding: "20px 20px",
  },
}));
