import { type FC, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { BackendApi } from "./api";
import { Paginator } from "./Paginator";

interface BeerListItem {
  id: string;
  name: string;
  image_url?: string;
  tagline?: string;
}

export const ListPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
  const page = Number(searchParams.get("page")) || 1;

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<BeerListItem[]>([]);

  const handlePaginatorClick = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  const fetchByPage = (page: number) => {
    const url = new URL("https://api.punkapi.com/v2/beers");
    if (page > 0) url.searchParams.set("page", String(page));
    url.searchParams.set("per_page", String(10));

    setIsLoading(true);

    BackendApi.get(url)
      .then(({ resultJson }) => {
        /** TODO: do a runtime validation */
        setItems(resultJson);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchByPage(page);
  }, [page]);

  return (
    <div
      style={{
        display: "grid",
        gridAutoRows: "auto min-content",
        rowGap: "32px",
        height: "100%",
      }}
    >
      <ul
        style={{
          all: "unset",
          display: "flex",
          flexDirection: "column",
          rowGap: "8px",
          minHeight: 0,
          overflow: "auto",
        }}
      >
        {isLoading && (
          <h4
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </h4>
        )}
        {!isLoading &&
          items.map(({ id, name, tagline, image_url }) => {
            return (
              <Link
                key={id}
                to={`/details/${id}`}
                style={{
                  padding: "16px",
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  border: "1px solid lightgray",
                  borderRadius: "8px",
                }}
              >
                <li
                  style={{ all: "unset", display: "flex", columnGap: "16px" }}
                >
                  {image_url && (
                    <img
                      src={image_url}
                      alt={name}
                      style={{ height: "70px", maxWidth: "70px" }}
                    />
                  )}
                  <span>
                    <h4 style={{ margin: 0, marginBottom: "8px" }}>{name}</h4>
                    {tagline && <span>{tagline}</span>}
                  </span>
                </li>
              </Link>
            );
          })}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "64px",
        }}
      >
        <Paginator currentPage={page} onPageClick={handlePaginatorClick} />
      </div>
    </div>
  );
};
