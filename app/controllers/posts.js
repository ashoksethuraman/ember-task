import Ember from 'ember';

export default Ember.Controller.extend({
 isShowingModal: true,

 actions: {
    expand: function(post) {
      this.set('isExpanded', true);
      // console.log(post.get('title'))
    },

    close: function() {
    	 this.set('isShowingModal', false)
    }
  }

});
