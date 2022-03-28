function OpenImageModal(imagePath, imagealt) {
    document.getElementById('modalimg').src = imagePath;
    document.getElementById('myModal').style.display = 'block';
    document.querySelector(".navbar").classList.remove("sticky-top");
    document.querySelector(".navbar").classList.add("d-none");
    document.getElementById("caption").innerHTML = imagealt;
    document.querySelector('.carousel-indicators').classList.add('d-none');
}

function closeImageModal() {
    document.getElementById('myModal').style.display = 'none';
    document.querySelector(".navbar").classList.add("sticky-top");
    document.querySelector(".navbar").classList.remove("d-none");
    document.querySelector('.carousel-indicators').classList.remove('d-none');
    document.querySelector('.carousel-indicators').classList.add('d-flex');
}
var modal = document.querySelector('.modal')

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.getElementById('myModal').style.display = 'none';
    document.querySelector(".navbar").classList.add("sticky-top");
    document.querySelector(".navbar").classList.remove("d-none");
    document.querySelector('.carousel-indicators').classList.remove('d-none');
    document.querySelector('.carousel-indicators').classList.add('d-flex');
  }
})
var mybutton = document.getElementById("myButton");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }