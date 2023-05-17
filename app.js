//Carregando o asset de som:
var portalSound = new Audio("portal.wav");

function start() {
    AFRAME.registerComponent("rotation-reader", {
        /**
         * We use IIFE (immediately-invoked function expression) to only allocate one
         * vector or euler and not re-create on every tick to save memory.
         */
        tick: (function () {
            var position = new THREE.Vector3();
            var quaternion = new THREE.Quaternion();

            return function () {
                this.el.object3D.getWorldPosition(position);
                this.el.object3D.getWorldQuaternion(quaternion);

                if (position.x === 0) {
                    portalSound.play();
                }
                // position and rotation now contain vector and quaternion in world space.
            };
        })(),
    });
}

start();
