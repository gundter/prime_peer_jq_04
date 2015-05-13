$(document).ready(function(){
    $(".number").on('click', function(){
        var v = $(this).val();
        $("#answer").val($('#answer').val()+v);
    });
    $('#clear').on('click', function(){
        $('#answer').val('');
        $('#operation').val('');
        $('.method').removeClass('activeAnswer');
        $('#equals').attr('onclick', '');
    });

    $('#plus').click(function(e) {

        if($('#answer').val() == ''){
            return false;
            $('#equals').attr('onclick','');
        }
        else if ( $('#operation').attr('class') == 'activeAnswer') {
            $('#operation').val( $('#operation').val() + $('#plus').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else{
            $('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
    });

    $('#subtract').click(function(e) {

        if($('#answer').val() == ''){
            return false;
            $('#equals').attr('onclick','');
        }
        else if ( $('#operation').attr('class') == 'activeAnswer') {
            $('#operation').val( $('#operation').val() + $('#subtract').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else{
            $('#operation').val( $('#operation').val() + $('#answer').val() + $('#subtract').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
    });

    $('#divide').click(function(e) {

        if($('#answer').val() == ''){
            return false;
            $('#equals').attr('onclick','');
        }
        else if ( $('#operation').attr('class') == 'activeAnswer') {
            $('#operation').val( $('#operation').val() + $('#divide').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else{
            $('#operation').val( $('#operation').val() + $('#answer').val() + $('#divide').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
    });

    $('#product').click(function(e) {

        if($('#answer').val() == ''){
            return false;
            $('#equals').attr('onclick','');
        }
        else if ( $('#operation').attr('class') == 'activeAnswer') {
            $('#operation').val( $('#operation').val() + $('#product').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else{
            $('#operation').val( $('#operation').val() + $('#answer').val() + $('#product').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
    });

    $('#equals').click(function(){

        if($('#equals').attr('onclick') != 'return false'){

            var a = $('#answer').val();
            var b = $('#operation').val();
            var c = b.concat(a);
            $('#answer').val(eval(c));
            $('#operation').val(eval(c));
            $('#operation').addClass('activeAnswer');
            $('#equals').attr('onclick','return false');

        }
    });

});