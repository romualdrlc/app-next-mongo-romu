import { GetServerSideProps } from "next";
import Link from "next/link";
import { getDatabase } from "../components/database";
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";

type allPlatforms = {
  platforms: {
    slug: string;
    name: string;
    price: number;
    cover: {
      url: string;
    };
    [key: string]: any;
  };
};
type formatPlatform = {
  name: string;
  slug: string;
  [key: string]: any;
};

const AllPlatforms: React.FC<allPlatforms> = ({ platforms }) => {
  const selectPlatform: formatPlatform[] = [];

  platforms.forEach((platform) => {
    const one = selectPlatform.find(
      (select) => select.slug === platform.platform.slug
    );
    if (!one) {
      selectPlatform.push(platform.platform);
    }
  });

  return (
    <>
      <Container fluid>
        <h1 className="text-center">List of Platforms :</h1>
        <Row className="justify-content-md-center">
          {selectPlatform.map((platform) => {
            return (
              <Col sm={4} className="d-flex" key={platform.slug}>
                <CardDeck className="d-flex align-content-stretch flex-wrap">
                  <Card style={{ width: "20rem" }}>
                    <Card.Body>
                      <Card.Title
                        style={{ textAlign: "center" }}
                        key={platform.slug}
                      >
                        {platform.name}
                      </Card.Title>
                      <Card.Text style={{ textAlign: "center" }}>
                        <img
                          className="img-fluid"
                          src={platform.platform_logo_url}
                        />
                      </Card.Text>
                      <Card.Text style={{ textAlign: "center" }}>
                        <span>
                          See more in formation about {platform.name}
                          {"\n"}
                          <a href={platform.url}>visit platform site</a>
                        </span>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Text style={{ textAlign: "center" }}>
                        <Link href={`/platform/${platform.slug}`}>
                          <a>See all Games for {platform.name}</a>
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

export default AllPlatforms;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const platforms = await mongodb.db().collection("games").find().toArray();

  return {
    props: {
      platforms: JSON.parse(JSON.stringify(platforms)),
    },
  };
};
