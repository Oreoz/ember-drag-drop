import Ember from 'ember';

const { Controller, computed: { alias }, isArray } = Ember;

export default Controller.extend({
  posts: alias('model'),

  actions: {
    increaseRating(payload, options) {
      if (isArray(payload)) {
        payload.map(post => post.incrementProperty('rating', options.target.amount || 1));
      } else {
        payload.incrementProperty('rating', options.target.amount || 1);
      }
    },

    decreaseRating(payload, options) {
      if (isArray(payload)) {
        payload.map(post => post.decrementProperty('rating', options.target.amount || 1));
      } else {
        payload.decrementProperty('rating', options.target.amount || 1);
      }
    }
  }
});
