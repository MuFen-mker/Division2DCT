var ButtonAnit2if = 0;
var floatCalDisplay;
var allComputeButtonOffsetToTop;
var windowsWidth;
var temp;
document.onscroll = function(){
  floatCalDisplay = document.getElementById('floatCal');
  allComputeButtonOffsetToTop = $('#CulationButton').offset().top;
  windowsWidth = document.documentElement.clientWidth;
  temp = document.documentElement.scrollTop;
  console.log(ButtonAnit2if);
  if (windowsWidth <= 730) {
      if (temp > allComputeButtonOffsetToTop) {
        floatCalDisplay.style['animation-name'] = 'ButtonAnit1';
        ButtonAnit2if = 1;
      } else {
        if (ButtonAnit2if == 1) {
          ButtonAnit2if = 0;
          floatCalDisplay.style['animation-name'] = 'ButtonAnit2';
        }
      } 
  }
}