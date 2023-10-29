import { useSearchParams } from "react-router-dom";

import { SEARCH_PARAM_NAME } from "./constants";

export const useSearchQuery = (): string => {
  const [params] = useSearchParams();
  return params.get(SEARCH_PARAM_NAME) || "";
};
