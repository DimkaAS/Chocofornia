/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



var table = new Image();
function init(){
    table.src = 'images/row_tabletant.svg';
    window.requestAnimationFrame(draw);
}

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.save();
    ctx.translate(350,150);

    var time = new Date();
    ctx.rotate(Math.sin(time / 600) / 10);

    ctx.drawImage(table,-300,-100);
    ctx.restore();

    window.requestAnimationFrame(draw);
}

init();
