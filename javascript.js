if(window.DeviceOrientationEvent) { 
    document.write ("1");
}
window.addEventListener('deviceorientation', function(event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    document.write (alpha);
    document.write ('<p>');
    document.write (beta);
    document.write ('<p>');
    document.write (gamma);
}, false);