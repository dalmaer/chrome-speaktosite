var last_target = null;

document.addEventListener('mousedown', function(event) {
    last_target = event.target;
}, true);

chrome.extension.onRequest.addListener(function(event) {
    last_target.setAttribute("speech", "on");
    last_target.setAttribute("x-webkit-speech", "on");    
    last_target = null;
})