$(document).ready(function(){

  $('#generate').click(function(){
    var id =$('input').val()

$.ajax({
  url: `https://pokeapi.co/api/v2/pokemon/${id}`,
datatype: 'json',
success: function(result){
  console.log(result)
  var object = result.sprites
  console.log(result.sprites.front_default)
  for (const property in object) {
    if (object[property]){
    console.log(`${[property]}`);
    }
  }
  var html_str = ''
        html_str += `<div class='col-2 col-sm-2 col-md-2'>
         <div class='card my-1 p-2 %'>
         <button id='btn-delete' class='btn btn-dark'> Delete </button>
              <img class='card-img-top' alt='pokemon' src=${result.sprites.front_default}>
              <div class='card-body'>
                  <p class="card-title text-center">${result.name}</p>
         </div>
         </div>
         </div>`
      $('.row').append(html_str)
    }
  })
})
$(document).on('click','#btn-delete', function(){
  $(this).parent().fadeOut( "slow", function() {

  })
})
})

