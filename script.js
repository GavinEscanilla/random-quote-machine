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
        $('#text').html('<i class="fa-solid fa-quote-left"></i>'+ quote);
        $('#author').html('-'+ author);
        $('#text').removeClass('animate__animated animate__fadeIn');
        $('#author').removeClass('animate__animated animate__fadeIn');
        setTimeout(function(){
            $('#text').addClass('animate__animated animate__fadeIn');
            $('#author').addClass('animate__animated animate__fadeIn');
        })
    },
        error:function(xhr,status,error){
            alert('error');
        }
    });
}
function bgcolor(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
       load();
       let newcolors = bgcolor();
       $('.overlay').css({'background-color': newcolors, 'opacity':1});
$("button").click(function(){
    load();
    const newcolor = bgcolor();
   $(".overlay").fadeOut(500,function(){
    $(this).css('background-color',newcolor).fadeIn(500);
   })

   $("#text").animate({opacity:0},500,function(){
    $(this).css('color',newcolor).animate({opacity:1},500);
   });
   $("#author").animate({opacity:0},500,function(){
    $(this).css('color',newcolor).animate({opacity:1},500);
   });
   $("#tweet-quote").animate({opacity:0},500,function(){
    $(this).css('background-color',newcolor).animate({opacity:1},500);
   });

});
});

    
                       