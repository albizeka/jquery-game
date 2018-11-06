$(document).ready(function () {
  var counter = 0;
  var seconds = 0;

  $('#counter span').html(counter);
  $("#timer span").html(seconds);

  $("#endScreen").hide();
  $("#win").hide();

  $("#startGame").on("mouseover", function () {
    $(this).hide();

    var randomWidth = Math.ceil(Math.random() * 350);
    var randomHeight = Math.ceil(Math.random() * 350);

    $("#win").show('fast');
    $("#win").css('top', randomHeight);
    $("#win").css('left', randomWidth);

    window.setInterval(function () {
      seconds = seconds + 1;
      $('#timer span').html(seconds);
    }, 1000)
  });

  // When you want to start game from begining
  $("#start").on("mouseover", function () {
    var randomWidth = Math.ceil(Math.random() * 350);
    var randomHeight = Math.ceil(Math.random() * 350);

    $("#win").show('fast');
    $("#win").css('top', randomHeight);
    $("#win").css('left', randomWidth);
    $(this).hide('fast');
  });

  $("#win").on("mouseover", function () {
    counter = counter + 1;
    $("#counter span").html(counter);

    if (counter == 10) {
      $("#endScreen").show('medium');
      $("#endCount").html(counter);
      $("#endSeconds").html(seconds);
    }

    $(this).hide('fast');
    $("#start").show('fast');

  });
})
