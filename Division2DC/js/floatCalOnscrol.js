document.onscroll = function(){
  var floatCalDisplay = document.getElementById('floatCal');
  var allComputeButtonOffsetToTop = $('#CulationButton').offset().top;
  var windowsWidth = document.documentElement.clientWidth;
  var temp = document.documentElement.scrollTop;
  if (windowsWidth <= 730) {
      if (temp > allComputeButtonOffsetToTop) {
        floatCalDisplay.style['animation-name'] = 'ButtonAnit1';
      } else {
        floatCalDisplay.style['animation-name'] = 'ButtonAnit2';
      } 
  }
}