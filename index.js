$(document).ready(function() {
    $('#registerBtnConf').click(function() {
        $('#eventType').val('Conference');
    });
    $('#registerBtnWorkshop').click(function() {
        $('#eventType').val('Workshop');
    });
    $('#registerBtnWebinar').click(function() {
        $('#eventType').val('Webinar');
    });
    $('#registerBtnMilestone').click(function() {
        $('#eventType').val('Milestone');
    });

    $('.faq-question').on('click', function() {
        $(this).next('.faq-answer').slideToggle(150);
    });

    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        const name = $('#fullName').val();
        const email = $('#email').val();
        const eventType = $('#eventType').val();
        if (name && email && eventType) {
            $('#registerModal').modal('hide');
            setTimeout(function() {
                alert('Thank you for registering for the ' + eventType + '! Your ticket will be emailed to you within 24 hours.');
            }, 400);
            $(this).trigger('reset');
        }
    });
});