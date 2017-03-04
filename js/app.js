$(function(){
  (function(){
    var App = {
      Init: function() {
        App.UI();
      },
      UI: function(){

        // Full Screen Hero
        checkSize();
        $(window).resize(checkSize);
        function checkSize() {
          var height = $('#hero').height();
          $('.fullscreen').css('height', height);
        }
      }
    };

App.Init();

})();
});
