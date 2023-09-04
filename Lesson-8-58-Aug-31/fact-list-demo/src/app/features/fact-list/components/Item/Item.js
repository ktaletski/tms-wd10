import styles from './Item.module.css';

export const Item = (props) => {
  return `
    <li class="${styles.item}">${props.text}</li>
  `;
};
