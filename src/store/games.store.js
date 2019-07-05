export default {
  namespaced: true,

  state: {
    games: [
      'Some game 1',
      'Some game 2',
      'Some game 3',
    ],
  },

  actions: {
    searchGames(context, {text}) {
      return context.getters.games.filter(game => game.toLowerCase().search(text.toLowerCase()) !== -1);
    },
  },

  getters: {
    games: state => state.games,
  }
};
