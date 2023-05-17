//Carregando o asset de som:
var portalSound = new Audio("portal.wav");

//Variaveis e funcao pra alterar o estado do nether
var nether = false;
const netherEntity = document.querySelector("#nether-entity");

function changeNether() {
    nether = true;
    console.log(netherEntity);
    netherEntity.setAttribute("visible", nether);
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
                //console.log(position);
                document.getElementById("debug_text").innerHTML = position.z;
                this.el.object3D.getWorldPosition(position);
                this.el.object3D.getWorldQuaternion(quaternion);

                if (position.z >= -2.2 && position.z <= -1.8) {
                    portalSound.play();
                    changeNether();
                }
            };
        })(),
    });
}

start();
