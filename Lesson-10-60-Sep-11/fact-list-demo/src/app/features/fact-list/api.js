export const factsListApi = {
  async getFacts() {
    const result = await fetch('https://cat-fact.herokuapp.com/facts');
    console.log(result);
  },
};
