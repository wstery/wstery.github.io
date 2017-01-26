

//(START)this is the alert msg for the yes/no buttons//
$('.my-vote').click(function(){
	alert('Thanks for Voting!');
});
//(START)this is the alert msg for the yes/no buttons//


//(START)this is the error message for the form - name//
var input = $('#name-id');
var msg = $('#name-error-id');
console.log(msg);

input.change(function(){
	var length = input.val().length;

	if(length<4){
		msg.removeClass('hidden');
	} else {
		msg.addClass('hidden');
	}
});
//(END)this is the error message for the form - name//


//(START)this is the error message for the form - email (not completed yet)//


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var input2 = $('#email-id');
var msg2 = $('#email-error-id');
console.log(msg2);

input2.change(function(){

var email = input2.val();
//email.indexOf('@') > -1
if( validateEmail(email) == true ){
// email
console.log('valid email')
msg2.addClass('hidden');
}else
{
//not email
msg2.removeClass('hidden')
console.log('not a valid email')
}


});
//(END)this is the error message for the form - email (not completed yet)//



//(START) this is the check box for T&C, and the submit button, which has been disabled, till the check box is ticked//

$('#cb-id').change(function(){
	console.clear();
// get the true/false value if the checkbox 
// checked or not?
var cb= $('#cb-id').prop('checked');
console.log("cb is: " + cb);

if(cb){
	$('#submit-id').prop('disabled', false);
} else {
	$('#submit-id').prop('disabled', true);
	}
});
//(END) this is the check box for T&C, and the submit button, which has been disabled, till the check box is ticked//



//(START) this is the alert msg for the subscription form submit button//

$('.btn-info').click(function(){
	alert('Thanks for Subscribing!');
});

$('form').submit(function (event) {
        // prevent the default action of reloading the page
        event.preventDefault();
    });
//(END)this is the alert msg for the subscription form submit button//

// $(function () {

//     // on submitting the form
//     

        // var sendData = {};
        // $(event.target.nodeName + ' :input').each(function(){
        //     sendData[this.name] = $(this).val();
        // });

        // var posting = $.ajax({
        //     type: 'POST',
        //     url: $(event.target.nodeName).prop('action'),
        //     data: sendData
        // });

        // posting.done(function (response) {
        //     console.log(response);
        //     })
        // });
        // posting.fail(function (response) {
        //     console.log(response);
        // });
//     });


// };