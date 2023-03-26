//your code here
$(document).ready(function() {
            // function to get a random user from the API
            function getRandomUser() {
                $.ajax({
                    url: 'https://randomuser.me/api/',
                    dataType: 'json',
                    success: function(data) {
                        // display the user's name and photo
                        $('#userName').text(data.results[0].name.first + ' ' + data.results[0].name.last);
                        $('#userImage').attr('src', data.results[0].picture.large);

                        // store the user's age, email, and phone in variables
                        var age = data.results[0].dob.age;
                        var email = data.results[0].email;
                        var phone = data.results[0].phone;

                        // set the data-attr attribute of each button to the corresponding variable
                        $('.infoButton[data-attr="age"]').attr('data-info', age);
                        $('.infoButton[data-attr="email"]').attr('data-info', email);
                        $('.infoButton[data-attr="phone"]').attr('data-info', phone);
                    }
                });
            }

            // call the function to get a random user on page load
            getRandomUser();

            // function to display the relevant info when a button is clicked
            $('.infoButton').on('click', function() {
                // remove any previously displayed info
                $('.info').hide();

                // display the relevant info
                var infoType = $(this).data('attr');
                var info = $(this).data('info');
                $('#' + infoType + 'Info').text(info).show();
            });

            // function to get a new random user when the "Get User" button is clicked
            $('#getUser').on('click', function() {
                getRandomUser();
            });
        });