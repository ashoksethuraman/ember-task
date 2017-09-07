import Ember from 'ember';

export default Ember.Controller.extend({
 isShowingModal: true,

 actions: {
    expand: function(post) {
      isConfirmationModel : true;
      console.log('conformation models::',isConfirmationModel);

      // ... Then render the modal
      // modal.show();

      // var message = null;
      //     var xhr = $.ajax({
      //             url: 'http://www.splashbase.co/api/v1/images/search?query=bird',
      //             dataType: 'json',
      //             contentType: 'application/json; charset=utf-8',
      //             type: 'GET',
      //             cors: true ,
      //             headers: {
      //                  'Access-Control-Allow-Origin': '*',
      //              },
      //             async: false,
      //             success: function (data) {
      //                 message = data;
      //                 console.log('outputes:::::');
      //                 console.log(message);
      //             }
      //         });
      //
      //     if (xhr.status != 200) { // error
      //         message = { errorCode: xhr.status, errorMessage: xhr.statusText };
      //     }
      //
      //     return message;


    },

    close: function() {
    	 this.set('isShowingModal', false)
    }
  }


});
