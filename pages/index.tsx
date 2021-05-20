import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Card } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to video games center !!</h1>

          <div className={styles.grid}>
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Games</Card.Header>
              <Card.Body>
                <Card.Title>Display allGames</Card.Title>
                <Card.Text>
                  <Link href="/games">
                    affichage de tous les jeux de la database
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Platforms</Card.Header>
              <Card.Body>
                <Card.Title>Display allPlatforms</Card.Title>
                <Card.Text>
                  <Link href="/platforms">
                    affichage de toutes les plateformes de la database
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
export default HomePage;
