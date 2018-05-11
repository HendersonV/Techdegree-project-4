lightbox.option({
  'resizeDuration': 200,
  'showImageNumberLabel': false,
})

var input = document.getElementById('search');
var filter;
var photo = document.querySelectorAll('a[data-title]');
var text;

    input.addEventListener('keyup', function(event){
      filter = input.value.toLowerCase();
      for (var i = 0; i < 12; i++ ){
        text = photo[i].getAttribute("data-title");
        if (text.toLowerCase().includes(filter)){
          photo[i].style.display= 'flex';
        } else {
          photo[i].style.display = 'none';
        }
      }
    });
