import Ember from 'ember';
import layout from '../templates/components/selectable-objects';

export default Ember.Component.extend({
  layout,

  aggregatedContent: null,

  init() {
    this._super(...arguments);
    this.set('aggregatedContent', new Ember.A());
  },

  actions: {
    updateSelection(draggableObject) {
      let selected = draggableObject.get('selected');

      if (selected) {
        this.get('aggregatedContent').removeObject(draggableObject.get('content'));
      } else {
        this.get('aggregatedContent').pushObject(draggableObject.get('content'));
      }
    }
  }
});
