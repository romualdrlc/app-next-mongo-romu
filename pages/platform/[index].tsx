import { GetServerSideProps } from "next";
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";
import { getDatabase } from "../../components/database";
import Link from "next/link";

type allGamesPlatform = {
  allGamesPlatform: any[];
};

const oneGamePerPlatform: React.FC<allGamesPlatform> = ({
  allGamesPlatform,
}) => {
  return (
    <>
      <Container fluid>
        <h1 className="text-center">List of games pour une platforme:</h1>
        <Row className="justify-content-md-center">
          {allGamesPlatform.map((listGame) => {
            return (
              <Col sm={4} className="d-flex" key={listGame._id}>
                <CardDeck className="d-flex align-content-stretch flex-wrap">
                  <Card style={{ width: "20rem" }}>
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        {listGame.name}
                      </Card.Title>
                      <Card.Text style={{ textAlign: "center" }}>
                        <span>
                          {listGame.cover === undefined ? (
                            <img
                              className="img-fluid"
                              style={{ width: "250px", height: "250px" }}
                              src="/pointinterro.jpeg"
                            />
                          ) : (
                            <img
                              className="img-fluid"
                              style={{ width: "250px", height: "250px" }}
                              src={listGame.cover.url}
                            />
                          )}
                        </span>
                        <span>{listGame.price / 100} €</span>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Text style={{ textAlign: "center" }}>
                        <Link href={`/game/${listGame.slug}`}>
                          <a>See more {listGame.name}</a>
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

export default oneGamePerPlatform;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const allGamesPlatform = await mongodb
    .db()
    .collection("games")
    .find({ "platform.slug": context.params.index })
    .toArray();

  return {
    props: {
      allGamesPlatform: JSON.parse(JSON.stringify(allGamesPlatform)),
    },
  };
};
