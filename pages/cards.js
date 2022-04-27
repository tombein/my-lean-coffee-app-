import { Typography } from "@mui/material";
import { SWRConfig } from "swr";
import { getCards } from "../src/components/services/get-cards";
import CardGrid from "../src/components/CardGrid";
import { swrFetcher } from "../src/components/lib/swr-fetcher";

export function getStaticProps() {
  const cards = getCards();

  return {
    props: {
      fallback: {
        "/api/cards": cards,
      },
    },
  };
}

export default function Cards({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <Typography variant="h1">Cards</Typography>
      <CardGrid />
    </SWRConfig>
  );
}
