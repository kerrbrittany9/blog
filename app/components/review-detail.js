import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyPost(post) {
      this.sendAction('destroyPost', post);
    },
    update(post, params) {
      this.sendAction('update', post, params);
    }
  }
});
