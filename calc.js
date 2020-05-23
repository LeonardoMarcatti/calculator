let m1, m2, x, y;
m1 = 0;
m2 = 0;
x = 0;
y = 0;
$('#keyboard').children().on('click', function(e){
    $('#igual').removeAttr('disabled');
    let valor = e.target.innerHTML;
    let display = $('#display');
    let history = $('#history');
        let total;
    if(history.val() == ''){
        if(valor == '/' || valor == '*' || valor == '+' || valor == '-' || valor == '=') {
            false;
        }else if(valor == '.'){
             history.val(0 + valor);
        }else{
            history.val(history.val() + valor);
        };
    }else if(history.val() != ''){
        if(history.val() == '0.' && (valor == '/' || valor == '*' || valor == '-' || valor == '+' || valor == '.')){
            false;
        }else if((history.val().substr(-1,1) == '/' || history.val().substr(-1,1) == '*' || history.val().substr(-1,1) == '-' || history.val().substr(-1,1) == '+') && valor == '.'){
            history.val(history.val() + 0+valor);                
        }else if ((history.val().substr(-1,1) == '/' || history.val().substr(-1,1) == '*' || history.val().substr(-1,1) == '-' || history.val().substr(-1,1) == '+') && (valor == '/' || valor == '*' || valor == '-' || valor == '+')){
            false;
        }else if(history.val().substr(-1,1) == '.' && (valor == '/' || valor == '*' || valor == '-' || valor == '+')){
            history.val(ReplaceDot(valor));
        }else if(!history.val().includes('=')){
            if (valor != '=') {
                history.val(history.val() + valor);
            };
        }else if(valor == '.'){
            history.val(0 + valor);
        }else{
            history.val(valor);
        };
    };
});

function ReplaceDot(param){
    let v1,v2;
    v1 = $('#history').val();
    v2 = v1.replace('.', '');
    return v2 + param;
};

$('#ponto').on('click', function(){ $(this).attr('disabled', '');});
$('#keyboard').children().on('click', (param) => {
    if(param.target.innerHTML == '/' || param.target.innerHTML == '*' || param.target.innerHTML == '-' || param.target.innerHTML == '+'){$('#ponto').removeAttr('disabled');
    };
});

$('#igual').on('click', () => {
    $('#display').val(eval($('#history').val()));
    $('#history').val($('#history').val() + '=');
    $('#igual').attr('disabled', '');
    $('#ponto').removeAttr('disabled');
});

$('#c').on('click', () => {    
    $('#display').val('');
    $('#history').val('');
    $('#xy').css('color', 'black');
    $('sup').css('color', 'black');
    $('#ponto').removeAttr('disabled');
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