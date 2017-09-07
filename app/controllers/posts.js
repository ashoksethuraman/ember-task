import Ember from 'ember';

export default Ember.Controller.extend({
   song : "arrayValues",
 isShowingModal: true,
  songToDelete: null,
  initialOpen : true,
 // songToDelete : true,



 actions: {
   setSongToDelete(song) {
     initialOpen : null
      $('#inital')
     console.log('delete',song);
       this.set('songToDelete', song);
     },

     cancelDeletingSong() {
       this.set('songToDelete', null);
     },

     deleteSong(song) {
      //  return song.destroyRecord()
      //    .then(() => {
           this.set('songToDelete', null);
        //  });
     },

    expand: function(post) {
      isConfirmationModel : true;
      console.log('conformation models::',isConfirmationModel);
    },

    close: function() {
    	 this.set('isShowingModal', false)
    }
  }


});
