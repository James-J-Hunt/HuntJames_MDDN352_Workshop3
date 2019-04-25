function init() {
    //Find our div containers in the DOM
    var dataContainerOrientation = document.getElementById('dataContainerOrientation');

    //Check for support for DeviceOrientation event     
    if(window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {

            //Sets the alpha variable
            var alpha;
            //Check for iOS property
            if(event.webkitCompassHeading) {
                alpha = event.webkitCompassHeading;
                //Rotation is reversed for iOS
                compass.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
            }
            //non iOS
            else {
                alpha = event.alpha;
                webkitAlpha = alpha;
                if(!window.chrome) {
                    //Assume Android stock (this is crude, but good enough for our example) and apply offset
                    webkitAlpha = alpha-270;
                }
            }

            if(alpha!=null) 
                dataContainerOrientation.innerHTML = 'alpha: ' + alpha;
        }, false);
    }
}