$(document).ready(function(){
function load(){
$.ajax({

    url:'https://api.api-ninjas.com/v1/quotes?category=happiness',
    method: 'GET',
    headers:{
        'X-Api-key':'BK7d3nK3VsgCPshkR32ZNA==KHr16qdXYLZSCKwz'
    },
    success: function(response){
        const {quote,author} = response[0];
        $('#text').html(quote);
        $('#author').html(author);
        $('#text').removeClass('animate__animated animate__fadeIn');
        $('#author').removeClass('animate__animated animate__fadeIn');
        setTimeout(function(){
            $('#text').addClass('animate__animated animate__fadeIn');
            $('#author').addClassClass('animate__animated animate__fadeIn');
        })
    },
        error:function(xhr,status,error){
            alert('error');
        }
    });
}
       load();
$("button").click(function(){
    load();
            });
        });