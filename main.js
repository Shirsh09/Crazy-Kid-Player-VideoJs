var player = videojs(
    "my-video",
    {
      
      controls: true,
      controlBar: {
      playToggle: true,
      progressControl: {
      seekBar: true
    },
    fullscreenToggle: true,
    playbackRateMenuButton: true,
  
        volumePanel: {
      inline: false
    }
      },
	plugins: {
		hotkeys: {
			enableModifiersForNumbers: false,
			seekStep: 30
		},
	}
});

player.watermark({
        image: 'https://i.ibb.co/zfK2g15/favicon-32x32.png',
        url: 'https://dascyzofficials.blogspot.com'
      });
player.seekButtons({
    forward: 10,
    back: 10
  });
player.contextmenuUI({
  content: [{
 
    // A plain old link.
    href: 'https://dascyzofficials.blogspot.com',
    label: 'DASCYZ OFFICIALS'
  }, {
 
    // A link with a listener. Its `href` will automatically be `#`.
    label: 'About Us',
    listener: function() {
      alert('In Our Website DASCYZ OFFICIALS You Will Find Content Related To Anime');
    }
  }]
});


(function(window, videojs) {
      var testPlayer = window.testPlayer = videojs('my-video');
      testPlayer.endscreen = function() {};
      testPlayer.mobileUi({
        fullscreen: {
          iOS: true
        }
      });
    }(window, window.videojs));
(function(window, videojs) {
      var player = window.player = videojs('my-video');
      player.responsiveControls();
    }(window, window.videojs));
