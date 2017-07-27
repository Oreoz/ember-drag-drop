import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  beforeModel() {
    if (this.get('store').peekAll('post').get('length') === 0) {
      const titles = ['Terrible Post', 'Bad Post', 'Decent Post', 'Good Post'];
      for (var i = 0; i < 4; i++) {
        this.get('store').createRecord('post', { id: i + 1, title: titles[i], rating: i + 2 });
      }
    }
  },

  model() {
    return this.get('store').peekAll('post');
  },
});
