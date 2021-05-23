import { GetServerSideProps } from "next";
import OAuth2Client, {
  OAuth2ClientConstructor,
} from "@fewlines/connect-client";
import Link from "next/link";

type recupurl = {
  oauth: any;
};
const login: React.FC<recupurl> = ({ oauth }) => {
  return (
    <>
      <div>
        toto, , , , , {oauth}
        <Link href={`/auth/${oauth}`}>lien vers fewlines</Link>
      </div>
    </>
  );
};

export default login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const oauthClientConstructorProps: OAuth2ClientConstructor = {
    openIDConfigurationURL:
      "https://fewlines.connect.prod.fewlines.tech/.well-known/openid-configuration",
    clientID: `${process.env.CONNECT_CLIENT_ID}`,
    clientSecret: `${process.env.CONNECT_CLIENT_SECRET}`,
    redirectURI: `${process.env.CONNECT_REDIRECT_URI}`,
    audience: "wdb2g3",
    scopes: ["openid", "email"],
  };
  const oauthClient = new OAuth2Client(oauthClientConstructorProps);
  const url = await oauthClient.getAuthorizationURL();

  console.log("url", url);
  return {
    props: {
      oauth: JSON.parse(JSON.stringify(url)),
    },
  };
};
