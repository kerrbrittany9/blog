import Ember from 'ember';

export default Ember.Component.extend({
  addReview: false,
actions: {
  reviewFormShow() {
    this.set('addReview', true);
  },

  saveReview() {
    var params = {
      title: this.get('title') ? this.get('title') : "",
      venue: this.get('venue') ? this.get('venue') : "",
      author: this.get('author') ? this.get('author') : "",
      article: this.get('article') ? this.get('article') : "",
      image: this.get('image') ? this.get('image') : "",
    };
    this.set('addNewReview', false);
    this.sendAction('saveReview', params);
  }
}
});
