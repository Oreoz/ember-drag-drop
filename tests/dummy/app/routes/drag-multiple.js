import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  beforeModel() {
    if (this.get('store').peekAll('post').get('length') === 0) {
      for (var i = 1; i < 5; i++) {
        this.get('store').createRecord('post', { id: i, title: `Bad Post ${i}`, rating: i + 2 });
      }
    }
  },

  model() {
    return this.get('store').peekAll('post');
  },
});
