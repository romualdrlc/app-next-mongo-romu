import { GetServerSideProps } from "next";
import { getDatabase } from "../../components/database";
import OAuth2Client, {
  OAuth2ClientConstructor,
} from "@fewlines/connect-client";

type recupurl = {
  oauth: any;
};
const fewlines: React.FC<recupurl> = ({ oauth }) => {
  return <div>toto, , , , , {oauth}</div>;
};

export default fewlines;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

  const url = "toto";

  console.log("url", url);
  return {
    props: {
      oauth: JSON.parse(JSON.stringify(url)),
    },
  };
};
