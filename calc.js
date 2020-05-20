let m1, m2, x, y;
m1 = 0;
m2 = 0;
x = 0;
y = 0;
$('#keyboard').children().on('click', function(e){
        let valor = e.target.innerHTML;
        let display = $('#display').val();
        if (!isNaN(valor) || valor == '.') {
            if (valor == ".") {
                $('#display'). val( $('#display'). val() + valor);
                $('#history').val($('#history').val() + valor);
            } else{
                $('#display').val($('#display').val() + valor);
                $('#history').val($('#history').val() + valor);
            }
        } else{
            if (display != '' && valor != '=')  {
                $('#history').val($('#history').val() + valor);
                $('#display').val('');
            } else 
                if (display != "" && valor == '=') {
                    $('#display').val(eval($('#history').val()));
                    $('#history').val($('#history').val() + '=');
            }
        };
});

$('#c').on('click', () => {    
    $('#display').val('');
    $('#history').val('');
    $('#xy').css('color', 'black');
    $('sup').css('color', 'black');
    x = 0,
    y = 0;
});

$('#1x').on('click', 
    ()=> $('#display').val(1/$('#display').val()));

$('#m1').on('click', 
    () => {if (m1 != 0) {
        $('#display').val(m1);
        $('#history').val($('#history').val() + $('#display').val());
    } else {
        m1 = $('#display').val();
        $('#display').val('');
        $('#history').val('');
    };
});

$('#m2').on('click', 
    () => {if (m2 != 0) {
        $('#display').val(m2);
        $('#history').val($('#history').val() + $('#display').val());
    } else {
        m2 = $('#display').val();
        $('#display').val('');
        $('#history').val('');
    };
});

$('#cm').on('click', () => {m1 = 0; m2 = 0;});

$('#xy').on('click', () =>{
    if (x == 0) {
        x = $('#display').val();
        $('#display').val('');
        $('#xy').css('color', 'red');
        $('sup').css('color', 'black');
        $('#history').val(x + '^');    
    } else {
        y = $('#display').val();
        $('sup').css('color', 'red');
        $('#display').val(Math.pow(x,y));
        $('#history').val( $('#history').val() + '=');
        x = 0;
        y = 0;
    };
});

$('#ap').on('click', ()=> $('#history').val($('#history').val() + '('));
$('#fp').on('click', ()=> $('#history').val($('#history').val() + ')'));