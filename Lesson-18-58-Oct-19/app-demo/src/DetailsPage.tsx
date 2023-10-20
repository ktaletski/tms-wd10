import { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { BackendApi } from "./api";

interface BeerDetails {
  name: string;
  image_url: string;
  description?: string;
}

export const DetailsPage: FC = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<BeerDetails | null>(null);

  useEffect(() => {
    if (!params.id) return;

    const url = new URL("https://api.punkapi.com/v2/beers");
    url.searchParams.set("ids", params.id);

    setIsLoading(true);
    BackendApi.get(url)
      .then(({ resultJson }) => {
        setDetails(resultJson[0]);
      })
      .finally(() => setIsLoading(false));
  }, [params.id]);

  if (isLoading) return <h4>Loading...</h4>;

  if (!details) return <h4>Something went wrong</h4>;

  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <div style={{ height: "100%", width: "100%" }}>
        <img
          src={details.image_url}
          style={{ height: 200 }}
          alt={details.name}
        />
        <h2>{details.name}</h2>
        {details.description && <p>{details.description}</p>}
      </div>
    </>
  );
};
