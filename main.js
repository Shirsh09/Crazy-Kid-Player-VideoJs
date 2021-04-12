var player = videojs('my-video', {
  controlBar: {
    volumePanel: {
      inline: false
    }
  },
});
    (function(window, videojs) {
      var player = window.player = videojs('my-video');
      player.watermark({
        image: 'logo.png',
        url: 'https://camverseofficialsyt.blogspot.com'
      });
    }(window, window.videojs));
    
    
    (function(window, videojs) {
      var player = window.player = videojs('my-video');

      player.contextmenuUI({
        content: [{
          href: 'https://camverseofficialsyt.blogspot.com',
          label: 'Camverse Officials'
        }, {
          label: 'Sample Video',
          listener: function() {
            alert('This Is A Sample Video');
          }
        }]
      });
    }(window, window.videojs));
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
      var examplePlayer = window.examplePlayer = videojs('my-video');
      var seekButtons = window.seekButtons = examplePlayer.seekButtons({
        forward: 10,
        back: 10
      });
    }(window, window.videojs));
    videojs('my-video').ready(function() {
        this.hotkeys({
          volumeStep: 0.1,
          seekStep: 5,
          enableMute: true,
          enableFullscreen: true,
          enableNumbers: false,
          enableVolumeScroll: true,
          enableHoverScroll: true,

          // Mimic VLC seek behavior, and default to 5.
          seekStep: function(e) {
            if (e.ctrlKey && e.altKey) {
              return 5*60;
            } else if (e.ctrlKey) {
              return 60;
            } else if (e.altKey) {
              return 10;
            } else {
              return 5;
            }
          },

          // Enhance existing simple hotkey with a complex hotkey
          fullscreenKey: function(e) {
            // fullscreen with the F key or Ctrl+Enter
            return ((e.which === 70) || (e.ctrlKey && e.which === 13));
          },

          // Custom Keys
          customKeys: {

            // Add new simple hotkey
            simpleKey: {
              key: function(e) {
                // Toggle something with S Key
                return (e.which === 83);
              },
              handler: function(player, options, e) {
                // Example
                if (player.paused()) {
                  player.play();
                } else {
                  player.pause();
                }
              }
            },

            // Add new complex hotkey
            complexKey: {
              key: function(e) {
                // Toggle something with CTRL + D Key
                return (e.ctrlKey && e.which === 68);
              },
              handler: function(player, options, event) {
                // Example
                if (options.enableMute) {
                  player.muted(!player.muted());
                }
              }
            },

            // Override number keys example from https://github.com/ctd1500/videojs-hotkeys/pull/36
            numbersKey: {
              key: function(event) {
                // Override number keys
                return ((event.which > 47 && event.which < 59) || (event.which > 95 && event.which < 106));
              },
              handler: function(player, options, event) {
                // Do not handle if enableModifiersForNumbers set to false and keys are Ctrl, Cmd or Alt
                if (options.enableModifiersForNumbers || !(event.metaKey || event.ctrlKey || event.altKey)) {
                  var sub = 48;
                  if (event.which > 95) {
                    sub = 96;
                  }
                  var number = event.which - sub;
                  player.currentTime(player.duration() * number * 0.1);
                }
              }
            },

            emptyHotkey: {
              // Empty
            },

            withoutKey: {
              handler: function(player, options, event) {
                  console.log('withoutKey handler');
              }
            },

            withoutHandler: {
              key: function(e) {
                  return true;
              }
            },

            malformedKey: {
              key: function() {
                console.log('I have a malformed customKey. The Key function must return a boolean.');
              },
              handler: function(player, options, event) {
                //Empty
              }
            }
          }
        });
      });