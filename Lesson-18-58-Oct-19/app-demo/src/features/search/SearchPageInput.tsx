import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { SEARCH_PARAM_NAME } from "./constants";
import { useSearchQuery } from "./hooks";

export const SearchPageInput: FC = () => {
  const navigate = useNavigate();
  const searchQuery = useSearchQuery();

  const onSearch = useDebouncedCallback((query: string) => {
    navigate(
      {
        pathname: "/search",
        search: new URLSearchParams({ [SEARCH_PARAM_NAME]: query }).toString(),
      },
      { replace: true },
    );
  }, 700);

  return (
    <input
      defaultValue={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};
