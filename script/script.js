$(document).ready(function() {
    $('#send_button').click(function() {
        const userInput = $('#input_field').val();
        if (userInput.trim() !== "") {
            $('#chat_log').append(`<div class="user-message">${userInput}</div>`);
            $('#input_field').val('');

            $.ajax({
                url: '/chat',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ message: userInput }),
                success: function(response) {
                    $('#chat_log').append(`<div class="bot-message">${response.reply}</div>`);
                    $('#chat_log').scrollTop($('#chat_log')[0].scrollHeight);
                }
            });
        }
    });

    $('#input_field').keypress(function(e) {
        if (e.which === 13) {
            $('#send_button').click();
        }
    });
});
