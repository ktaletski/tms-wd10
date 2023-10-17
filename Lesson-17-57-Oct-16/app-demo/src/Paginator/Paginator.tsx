import { type FC } from "react";
import cx from "classnames";

import styles from "./Paginator.module.scss";

interface PaginatorProps {
  currentPage: number;
  onPageClick: (page: number) => void;
}

export const Paginator: FC<PaginatorProps> = ({ currentPage, onPageClick }) => {
  const pages = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ].filter((p) => p > 0);

  return (
    <ol className={styles.container}>
      {pages.map((page) => (
        <li
          key={page}
          onClick={() => onPageClick(page)}
          className={cx(styles.item, {
            [styles.item__selected]: currentPage === page,
          })}
        >
          {page}
        </li>
      ))}
    </ol>
  );
};
