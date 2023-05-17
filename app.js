var text = document.getElementById("cam_pos");

function start() {
    console.log("adding stuff to the aframe");
    AFRAME.registerComponent("camera-listener", {
        tick: function () {
            var cameraEl = this.el.sceneEl.camera.el;
            cameraEl.getAttribute("position");
            cameraEl.getAttribute("rotation");

            text.innerHTML =
                "Camera position: " +
                cameraEl.getAttribute("position").x +
                ", " +
                cameraEl.getAttribute("position").y +
                ", " +
                cameraEl.getAttribute("position").z +
                "<br>";
            // Do something.
        },
    });
}

start();
