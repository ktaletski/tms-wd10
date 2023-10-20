import { type FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProductListItem {
  id: string;
  title: string;
  thumbnail?: string;
  description?: string;
}

export const ProductsPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<ProductListItem[]>([]);

  const fetchProducts = () => {
    setIsLoading(true);

    const headers = new Headers();
    const token = localStorage.getItem("auth_token");
    token && headers.append("Authorization", token);

    fetch("https://dummyjson.com/auth/products", {
      headers,
    })
      .then((res) => res.json())
      .then(({ products }) => {
        /** TODO: do a runtime validation */
        setItems(products);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
          items.map(({ id, title, description, thumbnail }) => {
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
                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt={title}
                      style={{ height: "70px", maxWidth: "70px" }}
                    />
                  )}
                  <span>
                    <h4 style={{ margin: 0, marginBottom: "8px" }}>{title}</h4>
                    {description && <span>{description}</span>}
                  </span>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};
