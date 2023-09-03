import styles from './FactDetails.module.css';

export const FactDetails = (props) => {
  if (!props || typeof props !== 'object') {
    return '';
  }

  const { text, user, createdAt } = props;

  return `
    <section class="${styles.item}">
      <div class="${styles.info}">
        <img src="${user.photo}" class="${styles.photo}"/>
        <div class="${styles.info_text}">
          <div class="${styles.info_name}">${[user?.name?.first, user?.name?.last].join(' ')}</div>
          <div class="${styles.info_date}">${new Date(createdAt).toLocaleDateString()}</div>
        </div>
      </div>
      <div class="${styles.text}">
        ${text}
      </div>
    </section>
  `;
};
