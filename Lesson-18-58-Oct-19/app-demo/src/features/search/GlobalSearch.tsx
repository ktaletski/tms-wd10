import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SEARCH_PARAM_NAME } from "./constants";

// const useShallowSearchParams = () => {
//   return useSearchParams();
// };

/** Need to hit Enter or search button */
export const GlobalSearch: FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const onSearch = () => {
    navigate({
      pathname: "/search",
      search: new URLSearchParams({ [SEARCH_PARAM_NAME]: query }).toString(),
    });
  };

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={onSearch}>🔎</button>
    </div>
  );
};

// export const SearchInput: FC = () => {
//   return <input />
// }
