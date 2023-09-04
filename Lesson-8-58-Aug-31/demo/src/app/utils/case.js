export const kebabToCamelCase = (value) => {
  return value.split('-').map((word, idx) => {
    if (idx === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
};
