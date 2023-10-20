import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

interface ListItemProps {
  id: string;
  title: string;
  subtitle?: string;
}

const ListItem: FC<ListItemProps> = ({ id, title, subtitle }) => {
  return (
    <Link
      to={`/details/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <li
        style={{
          all: "unset",
          display: "block",
          border: "1px solid lightgray",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <h3 style={{ margin: "unset", marginBottom: "8px" }}>{title}</h3>
        {subtitle && <span>{subtitle}</span>}
      </li>
    </Link>
  );
};

interface BeerPreview {
  id: string;
  name: string;
  tagline?: string;
}

export const List: FC = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [items, setItems] = useState<BeerPreview[]>([]);

  const currentPage = useRef(0);

  const fetchItems = async () => {
    if (isFetching) return;

    const reqUrl = new URL("https://api.punkapi.com/v2/beers");
    if (currentPage.current)
      reqUrl.searchParams.set("page", `${currentPage.current}`);

    console.log("fetch");
    setIsFetching(true);

    await fetch(reqUrl)
      .then((response) => response.json())
      .then((value) => {
        setItems((prev) => [...prev, ...(Array.from(value) as BeerPreview[])]);
        currentPage.current++;
      })
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const hasNextPage = true;
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;
  const itemCount = items.length + 1;

  return (
    <ul
      style={{
        margin: "unset",
        padding: "unset",
        paddingLeft: 16,
        paddingRight: 16,
        minHeight: 0,
        height: "100%",
      }}
    >
      <AutoSizer>
        {({ width, height }: { width: number; height: number }) => {
          return (
            <InfiniteLoader
              itemCount={itemCount}
              loadMoreItems={fetchItems}
              isItemLoaded={isItemLoaded}
              threshold={15}
            >
              {({ ref, onItemsRendered }) => {
                return (
                  <FixedSizeList
                    ref={ref}
                    itemCount={itemCount}
                    itemSize={83}
                    width={width}
                    height={height}
                    onItemsRendered={onItemsRendered}
                  >
                    {({ index, style }) => {
                      if (!isItemLoaded(index)) return <span>Loading...</span>;

                      const { id, name, tagline } = items[index];

                      return (
                        <div style={style}>
                          <ListItem id={id} title={name} subtitle={tagline} />
                        </div>
                      );
                    }}
                  </FixedSizeList>
                );
              }}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </ul>
  );
};
