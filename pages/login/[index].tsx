import { GetServerSideProps } from "next";
import withSession from "next-session";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Get the user's session based on the request
  console.log(context.query);
  const user = context.query;

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
};

const Profile = ({ user }) => {
  // Show the user. No loading state is required
  return (
    <>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Profile;
