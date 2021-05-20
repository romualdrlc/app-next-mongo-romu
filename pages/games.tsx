import { GetServerSideProps } from "next";
import Link from "next/link";
import { getDatabase } from "../components/database";
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";

type games = {
  games: any[];
};

const AllGames: React.FC<games> = ({ games }) => {
  return (
    <>
      <Container fluid>
        <h1 className="text-center">List of games :</h1>
        <Row className="justify-content-md-center">
          {games.map((game) => {
            return (
              <Col sm={4} className="d-flex" key={game.slug}>
                <CardDeck className="d-flex align-content-stretch flex-wrap">
                  <Card style={{ width: "20rem" }}>
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        {game.name}
                      </Card.Title>
                      <Card.Text style={{ textAlign: "center" }}>
                        <span>
                          {game.cover === undefined ? (
                            <img
                              style={{ width: "250px", height: "250px" }}
                              className="img-fluid"
                              src="/pointinterro.jpeg"
                            />
                          ) : (
                            <img
                              style={{ width: "250px", height: "250px" }}
                              className="img-fluid"
                              src={game.cover.url}
                            />
                          )}
                        </span>
                        <span>{game.price / 100} €</span>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Text style={{ textAlign: "right" }}>
                        <Link href={`/game/${game.slug}`}>
                          <a>See more {game.name}</a>
                        </Link>
                      </Card.Text>
                    </Card.Footer>
                  </Card>
                </CardDeck>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default AllGames;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const games = await mongodb.db().collection("games").find().toArray();

  return {
    props: {
      games: JSON.parse(JSON.stringify(games)),
    },
  };
};
