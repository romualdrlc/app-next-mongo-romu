import { GetServerSideProps } from "next";
import { useState } from "react";

import { getDatabase } from "../../components/database";

type onegame = {
  onegame: any;
};

const oneGame: React.FC<onegame> = ({ onegame }) => {
  const [displayScreen, setDisplayScreen] = useState<Boolean>();
  return (
    <>
      <div className="media bg-secondary p-3">
        {onegame.cover === undefined ? (
          <img
            className="d-flex align-self-center mr-3 img-fluid"
            src="/pointinterro.jpeg"
          />
        ) : (
          <img
            className="d-flex align-self-center mr-3 img-fluid"
            src={onegame.cover.url}
          />
        )}
        <div className="media-body">
          <h5 className="mt-0">{onegame.name}</h5>
          <p>{onegame.price / 100} €</p>
          {onegame.summary === "" ? (
            <p>oh sorry no summary for this game !!</p>
          ) : (
            <p>{onegame.summary}</p>
          )}
        </div>
      </div>
      <div className="bloc-screen">
        {onegame.screenshots.map((screen) =>
          screen ? (
            <span key={screen}>
              <img
                src={screen}
                alt="Responsive image"
                style={{ width: "250px", height: "250px" }}
              />
            </span>
          ) : (
            <span>No picture for this game</span>
          )
        )}
      </div>
    </>
  );
};

export default oneGame;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const onegame = await mongodb
    .db()
    .collection("games")
    .findOne({ slug: context.params.index });

  console.log({ oneGame });

  return {
    props: {
      onegame: JSON.parse(JSON.stringify(onegame)),
    },
  };
};
