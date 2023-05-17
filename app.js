//Carregando o asset de som:
var portalSound = new Audio("portal.wav");
var ghastSound = new Audio("ghast_fireball.1.wav");

//Variaveis e funcao pra alterar o estado do nether
var nether = false;
var exploded = false;
const netherEntity = document.querySelector("#nether-entity");

function changeNether() {
    if(!nether)setTimeout(explodePortal, 2000);
    nether = true;
    console.log(netherEntity);
    netherEntity.setAttribute("visible", nether);
}

//Funcao que vai remover o portal e fazer som da fireball apos X segundos
function explodePortal(){
    document.querySelector("#portal_entity").setAttribute("visible", false);
    exploded= true;
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

                if (position.z >= -2.2 && position.z <= -1.8 && !exploded) {
                    portalSound.play();
                    changeNether();
                }
            };
        })(),
    });
}

start();
