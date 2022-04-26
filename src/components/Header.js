import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Link href="/" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Home
            </Button>
          </Link>

          <Link href="/cards" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Cards
            </Button>
          </Link>

          <Link href="/create" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Create
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );

  return (
    <header>
      <Link href="/">Home</Link>

      <br />

      <Link href="/cards">cards</Link>

      <br />

      <Link href="/create">create</Link>
    </header>
  );
}
