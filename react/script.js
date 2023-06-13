//Copy to Clipboard
function copyToClipboard(element) {  
    try{
	    navigator.clipboard.writeText(element.value);
        setTooltip('Copied!');
        hideTooltip();
	} catch(err) {
 		console.log("error", (err));   
    }
}

//Change icon on confirm
async function confirm(element) {
    element.className = "fas fa-check";
    await new Promise(r => setTimeout(r, 1000));
    element.className = "fas fa-copy";
}

//Set tooltip
  function setTooltip(message) {
    $('.btn-clipboard').tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }
  
  function hideTooltip() {
    setTimeout(function() {
      $('.btn-clipboard').attr('data-original-title', "Copy to Clipboard").tooltip('hide');
    }, 1000);
  }
  

//Lightbox Preview  
  function lightbox_open(element) {
    var lightBoxVideo = document.getElementById("PreviewedVideo");
    window.scrollTo(0, 0);
    lightBoxVideo.src=element.value;
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close(element) {
    var lightBoxVideo = document.getElementById("PreviewedVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }