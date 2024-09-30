$.ajax({

    url:'https://api.api-ninjas.com/v1/quotes?category=happiness',
    method: 'GET',
    headers:{
        'X-Api-key':'BK7d3nK3VsgCPshkR32ZNA==KHr16qdXYLZSCKwz'
    },
    success: function(response){
        const {quote,author} = response[0];
        $('#text').append(quote);
        $('#author').append(author);
    },
        error:function(xhr,status,error){
            alert('error');
        }
})
