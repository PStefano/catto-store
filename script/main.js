$(function () {
    //Declaring the variables needed
    const dropDown = $('#selCat');
    const message = $('#message');
    const valid = $('#validation');

    //All the event listeners
    $('form').on('submit', checkForm);
    dropDown.on('focus', checkSel);
    dropDown.on('click', checkSel);
    message.on('focus', checkMess);
    message.on('keyup', checkMess);

    //Function that checks the inputs upon form submition
    function checkForm(event) {
        //Debug line
        event.preventDefault();
        if (checkSel() && checkMess()) {
            $('form').text('Success!');
            $('form').addClass('alert alert-success');
        } else {
            checkSel();
            checkMess();
        }
    }

    //Function to check is the message has more than 15 characters
    function checkMess() {
        if (message.val().length < 15) {
            message.addClass('border-danger');
            valid.show();
            return false;
        } else {
            message.removeClass('border-danger');
            valid.hide();
            return true;
        }
    }

    //Function to check if there is at least a cat selected
    function checkSel() {
        //The first selection of the dropdown is null (because disabled in the html tag)
        if (dropDown.val() === null) {
            dropDown.addClass('border-danger');
            return false;
        } else {
            dropDown.removeClass('border-danger');
            return true;
        }
    }

});