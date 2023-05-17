//Carregando o asset de som:
var portalSound = new Audio("portal.wav");

//Funcao pra mudar a posicao da camera
function changePos(pos) {
    document
        .getElementById("camera")
        .setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
}

function start() {
    AFRAME.registerComponent("main-camera", {
        /**
         * We use IIFE (immediately-invoked function expression) to only allocate one
         * vector or euler and not re-create on every tick to save memory.
         */
        tick: (function () {
            var position = new THREE.Vector3();
            var quaternion = new THREE.Quaternion();

            return function () {
                console.log(position);
                this.el.object3D.getWorldPosition(position);
                this.el.object3D.getWorldQuaternion(quaternion);

                if (position.z >= -2.2 && position.z <= -1.8) {
                    portalSound.play();
                    changePos({ x: 0, y: 1.6, z: 10 });
                }
                // position and rotation now contain vector and quaternion in world space.
            };
        })(),
    });
}

start();
