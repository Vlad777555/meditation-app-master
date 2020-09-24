"use strict";

var app = function app() {
  var song = document.querySelector('.song');
  var play = document.querySelector('.play');
  var outline = document.querySelector('.moving-outline circle');
  var video = document.querySelector('.vid-container video'); //Sounds

  var sounds = document.querySelectorAll('.sound-picker button'); //Time Display

  var timeDisplay = document.querySelector('.time-display'); //Get the length of the outline

  var outlineLength = outline.getTotalLength(); //Duration

  var fakeDuration = 600;
  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength; //play sound

  play.addEventListener('click', function () {
    checkPlaying(song);
  }); // Create a function specific to stop and play sounds

  var checkPlaying = function checkPlaying(song) {
    if (song.paused) {
      song.play();
      video.play();
      play.src = './svg/pause.svg';
    } else {
      song.pause();
      video.pause();
      play.src = './svg/play.svg';
    }
  };
};

app();