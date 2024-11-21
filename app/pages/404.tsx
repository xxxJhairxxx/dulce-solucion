import type { NextPage } from "next";
import { baseApi } from "../lib/baseApi";
import { getGenerals } from "../lib/getGenerals";

const NotFound: NextPage = () => {
  return <div>404</div>;
};

export default NotFound;

export const getStaticProps = async () => {
  const generals = await getGenerals();
  return {
    props: {
      generals,
    },
  };
};
