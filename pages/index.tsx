import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { Typography } from "@mui/material";

const HomePage: NextPage = () => {
  return (
    <Layout title="Homo Page jira">
      <Typography variant="h1" color="secondary">
        Hola mundo
      </Typography>
    </Layout>
  );
};

export default HomePage;
