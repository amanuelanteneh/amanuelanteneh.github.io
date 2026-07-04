const width = 10;
const height = width * (window.innerHeight / window.innerWidth);

const colors = ["#fcf803","#fc0303", "#03fc77","#036bfc", "#fc03b1","#ffffff", "#ff5100", "#136602"];
const coords = [[0.5, 0.5, 0.5], [0.5, 0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, 0.5, 0.5], 
                [-0.5, -0.5, 0.5], [0.5, -0.5, -0.5], [-0.5, 0.5, -0.5], [-0.5, -0.5, -0.5]];


scene = new THREE.Scene();
const axis = new THREE.AxesHelper( 2 );
scene.add( axis );

camera = new THREE.PerspectiveCamera (45, width/height, 1, 10000);
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt (new THREE.Vector3(0,0,0));
camera.position.z = 3;


const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0 );
container = document.getElementById('block1');
renderer.setSize($(container).width(), $(container).height());
document.getElementById("block1").appendChild( renderer.domElement );

controls = new THREE.OrbitControls(camera, renderer.domElement);

const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const boxMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, opacity: 0.15, transparent: true} );

const cube = new THREE.Mesh( boxGeometry, boxMaterial );
scene.add( cube );

const pointGeometry = new THREE.SphereGeometry( 0.07, 32, 32 );
var vertexArr = []

var pivot = new THREE.Object3D(); //parent for rotation

for (let i=0; i<8; i++) {
    let pointMaterial = new THREE.MeshBasicMaterial( {color: colors[i]} );   
    vertexArr.push(new THREE.Mesh( pointGeometry, pointMaterial ));
    vertexArr[i].position.y = coords[i][0];
    vertexArr[i].position.z = coords[i][1];
    vertexArr[i].position.x = coords[i][2];

    pivot.add( vertexArr[i] ); //make child of pivot so rotateOnWorldAxis works


}

scene.add( pivot );

$("#c4Button").on("click", function() {
    cube.rotateOnWorldAxis(new THREE.Vector3( 1/Math.sqrt(3), 1/Math.sqrt(3), 1/Math.sqrt(3) ), THREE.Math.degToRad(90) );   
 
    pivot.rotateOnWorldAxis(new THREE.Vector3( 1/Math.sqrt(3), 1/Math.sqrt(3), 1/Math.sqrt(3) ), THREE.Math.degToRad(90) );   

    scene.add(new THREE.Vector3( 2, 2, 2 ));

});

function animate() {

    controls.update();
    requestAnimationFrame( animate );  
    renderer.render(scene, camera);
    renderer.render( scene, camera );

}

animate();