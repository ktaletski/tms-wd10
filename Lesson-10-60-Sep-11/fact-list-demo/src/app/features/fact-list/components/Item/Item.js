import styles from './Item.module.css';

export const Item = (props) => {
  return `
    <li class="${styles.item}" data-fact-id="${props._id}">
      <span>${props.text}</span>
    </li>
  `;
};
