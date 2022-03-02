var scene, renderer;
var stereoEffect;
var camera;
var controls;
var murakit;

var mesh;
var mesh2;
var mesh3;
var mesh4;
var mesh5;
var mesh6;
var mesh7;
var mesh8;
var mesh9;
var mesh10;
var mesh11;
var mesh12;
var mesh13;


var heartMesh;
var heartMesh2;
var heartMesh3;
var heartMesh4;
var heartMesh5;
var heartMesh6;
var heartMesh7;
var heartMesh8;
var heartMesh9;
var heartMesh10;
var heartMesh11;
var heartMesh12;
var heartMesh13;



var raycaster = new THREE.Raycaster();
var intersects = raycaster.intersectObjects( objects, true );
var mouse = new THREE.Vector2();
var distance = 400;
var objects = [];

setUp();


function setUp() {
    setupWorld();
    animate();
}

function setupWorld() {
    $container = $('#cont');
    scene = new THREE.Scene();
    scene.background =  new THREE.Color( 0xffffff );
    camera = new THREE.PerspectiveCamera(80, 1, 0.001, 10000);
    camera.target = new THREE.Vector3(75, -10, 0);
    camera.position.set(74.5, -10, 0);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerHeight,window.innerWidth);
    document.body.appendChild(renderer.domElement);
    renderer.setPixelRatio(window.devicePixelRatio);
    element = renderer.domElement;
    $container.append(element);


    var width  = $container.width();
    var height = $container.height();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);

    var light = new THREE.HemisphereLight( 0xFFFFFFF );
    scene.add( light );
    var morelight = new THREE.HemisphereLight( 0xFFFFFFF, 0.2 );
    scene.add( morelight );
    var pointlight = new THREE.PointLight( 0xFFFFFFF );
    pointlight.position.y = 450;
    pointlight.position.x = 50;
    //scene.add( pointlight );
    var point = new THREE.PointLight( 0xFFFFFFF );
    point.position.y = 520;
    //pointlight.position.x = -100;
    //scene.add( pointlight );

    var pointwo = new THREE.PointLight( 0xFFFFFFF,2 );
    pointwo.position.y =520;
    pointwo.position.x = 1220;
    //scene.add( pointwo);


    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 0.2;
    controls.panSpeed = 0.8;
    //controls.staticMoving = true;
    //controls.dynamicDampingFactor = 1;
    //controls.autoRotate= true;
    controls.target.set(70,-10, 0);

    controls.update();

   // loadCubeMap ('js/cubemap/sky-s_' , '.jpg');

 createMeshes();


}




function createMeshes() {
  var loader = new THREE.OBJLoader();
  loader.load('models/heartPRUEBA.obj', onLoadHeart, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart2, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart3, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart4, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart5, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart6, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart7, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart8, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart9, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart10, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart11, onProgressOBJ, onErrorOBJ);
  //loader.load('models/heartPRUEBA.obj', onLoadHeart12, onProgressOBJ, onErrorOBJ);
  loader.load('models/heartPRUEBA.obj', onLoadHeart13, onProgressOBJ, onErrorOBJ);

}

function onLoadHeart (objectLoaded) {
  var mesh = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh.geometry);
  console.log(geometry.faces);
  var heartTexture = new THREE.TextureLoader().load( 'mtl/Video.jpg' );
  var heartMaterial = new THREE.MeshBasicMaterial( { map: heartTexture, side: THREE.DoubleSide } );
  heartMesh = new THREE.Mesh(geometry, heartMaterial);
  heartMesh.scale.set(0.5, 0.5, 0.5);
  heartMesh.position.x = 70;
  heartMesh.position.z = 4;
  heartMesh.position.y = -8;
  heartMesh.userData = { URL: "https://vimeo.com/ondemand/gillesclementespanol"};
  scene.add(heartMesh);
  animateHeart();
}


function onLoadHeart2 (objectLoaded) {
  var mesh2 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh2.geometry);
  console.log(geometry.faces);
  var heartTexture2 = new THREE.TextureLoader().load( 'mtl/Audio.jpg' );
  var heartMaterial2 = new THREE.MeshBasicMaterial( { map: heartTexture2, side: THREE.DoubleSide } );
  heartMesh2 = new THREE.Mesh(geometry, heartMaterial2);
  heartMesh2.scale.set(0.5, 0.5, 0.5);
  heartMesh2.position.x = 70;
  heartMesh2.position.z = 2;
  heartMesh2.position.y = -10;
  heartMesh2.userData = { URL: "https://heartothere.org/"};
  scene.add(heartMesh2);
  animateHeart();
}

function onLoadHeart3 (objectLoaded) {
  var mesh3 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh3.geometry);
  console.log(geometry.faces);
  var heartTexture3 = new THREE.TextureLoader().load( 'mtl/Texto.jpg' );
  var heartMaterial3 = new THREE.MeshBasicMaterial( { map: heartTexture3, side: THREE.DoubleSide } );
  heartMesh3 = new THREE.Mesh(geometry, heartMaterial3);
  heartMesh3.scale.set(0.5, 0.5, 0.5);
  heartMesh3.position.x = 70;
  heartMesh3.position.z = 2.2;
  heartMesh3.position.y = -8.5;
  heartMesh3.userData = { URL: "http://www.projectprobe.net/essay/43/"};
  scene.add(heartMesh3);
  animateHeart();
}

function onLoadHeart4 (objectLoaded) {
  var mesh4 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh4.geometry);
  console.log(geometry.faces);
  var heartTexture4 = new THREE.TextureLoader().load( 'mtl/Web.jpg' );
  var heartMaterial4 = new THREE.MeshBasicMaterial( { map: heartTexture4, side: THREE.DoubleSide } );
  heartMesh4 = new THREE.Mesh(geometry, heartMaterial4);
  heartMesh4.scale.set(0.5, 0.5, 0.5);
  heartMesh4.position.x = 70;
  heartMesh4.position.z = -3.6;
  heartMesh4.position.y = -8.5;
  heartMesh4.userData = { URL: "https://missing.pictures/"};
  scene.add(heartMesh4);
  animateHeart();
}

function onLoadHeart5 (objectLoaded) {
  var mesh5 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh5.geometry);
  console.log(geometry.faces);
  var heartTexture5 = new THREE.TextureLoader().load( 'mtl/Audio.jpg' );
  var heartMaterial5 = new THREE.MeshBasicMaterial( { map: heartTexture5, side: THREE.DoubleSide } );
  heartMesh5 = new THREE.Mesh(geometry, heartMaterial5);
  heartMesh5.scale.set(0.5, 0.5, 0.5);
  heartMesh5.position.x = 69;
  heartMesh5.position.z = -3.6;
  heartMesh5.position.y = -10;
  heartMesh5.userData = { URL: "https://open.spotify.com/playlist/7Km8NwXs7hjlkDqejP0wtB"};
  scene.add(heartMesh5);
  animateHeart();
}

function onLoadHeart6 (objectLoaded) {
  var mesh6 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh6.geometry);
  console.log(geometry.faces);
  var heartTexture6 = new THREE.TextureLoader().load( 'mtl/Texto.jpg' );
  var heartMaterial6 = new THREE.MeshBasicMaterial( { map: heartTexture6, side: THREE.DoubleSide } );
  heartMesh6 = new THREE.Mesh(geometry, heartMaterial6);
  heartMesh6.scale.set(0.6, 0.6, 0.6);
  heartMesh6.position.x = 68;
  heartMesh6.position.z = -2.6;
  heartMesh6.position.y = -10;
  heartMesh6.userData = { URL: "https://www.curating.online/interview/field-broadcast/"};
  scene.add(heartMesh6);
  animateHeart();
}

function onLoadHeart7 (objectLoaded) {
  var mesh7 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh7.geometry);
  console.log(geometry.faces);
  var heartTexture7 = new THREE.TextureLoader().load( 'mtl/Web.jpg' );
  var heartMaterial7 = new THREE.MeshBasicMaterial( { map: heartTexture7, side: THREE.DoubleSide } );
  heartMesh7 = new THREE.Mesh(geometry, heartMaterial7);
  heartMesh7.scale.set(0.5, 0.5, 0.5);
  heartMesh7.position.x = 69;
  heartMesh7.position.z = -2.6;
  heartMesh7.position.y = -12;
  heartMesh7.userData = { URL: "https://www.single.earth/"};
  scene.add(heartMesh7);
  animateHeart();
}

function onLoadHeart8 (objectLoaded) {
  var mesh8 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh8.geometry);
  console.log(geometry.faces);
  var heartTexture8 = new THREE.TextureLoader().load( 'mtl/Video.jpg' );
  var heartMaterial8 = new THREE.MeshBasicMaterial( { map: heartTexture8, side: THREE.DoubleSide } );
  heartMesh8 = new THREE.Mesh(geometry, heartMaterial8);
  heartMesh8.scale.set(0.7, 0.7, 0.7);
  heartMesh8.position.x = 65;
  heartMesh8.position.z = 4.3;
  heartMesh8.position.y = -13;
  heartMesh8.userData = { URL: "http://hsoderstrom.international/polyecoly.html"};
  scene.add(heartMesh8);
  animateHeart();
}

function onLoadHeart9 (objectLoaded) {
  var mesh9 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh9.geometry);
  console.log(geometry.faces);
  var heartTexture9 = new THREE.TextureLoader().load( 'mtl/Texto.jpg' );
  var heartMaterial9 = new THREE.MeshBasicMaterial( { map: heartTexture9, side: THREE.DoubleSide } );
  heartMesh9 = new THREE.Mesh(geometry, heartMaterial9);
  heartMesh9.scale.set(0.5, 0.5, 0.5);
  heartMesh9.position.x = 69;
  heartMesh9.position.z = 4;
  heartMesh9.position.y = -11.4;
  heartMesh9.userData = { URL: "https://www.instagram.com/p/CUvnvnKL-6s/"};
  scene.add(heartMesh9);
  animateHeart();
}

function onLoadHeart10 (objectLoaded) {
  var mesh10 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh10.geometry);
  console.log(geometry.faces);
  var heartTexture10 = new THREE.TextureLoader().load( 'mtl/Web.jpg' );
  var heartMaterial10 = new THREE.MeshBasicMaterial( { map: heartTexture10, side: THREE.DoubleSide } );
  heartMesh10 = new THREE.Mesh(geometry, heartMaterial10);
  heartMesh10.scale.set(1, 1, 1);
  heartMesh10.position.x = 60;
  heartMesh10.position.z = -2.6;
  heartMesh10.position.y = -10;
  heartMesh10.userData = { URL: "https://charlottemadelon.itch.io/the-rose-garden"};
  scene.add(heartMesh10);
  animateHeart();
}

function onLoadHeart11 (objectLoaded) {
  var mesh11 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh11.geometry);
  console.log(geometry.faces);
  var heartTexture11 = new THREE.TextureLoader().load( 'mtl/Texto.jpg' );
  var heartMaterial11 = new THREE.MeshBasicMaterial( { map: heartTexture11, side: THREE.DoubleSide } );
  heartMesh11 = new THREE.Mesh(geometry, heartMaterial11);
  heartMesh11.scale.set(0.5, 0.5, 0.5);
  heartMesh11.position.x = 68.5;
  heartMesh11.position.z = -2.6;
  heartMesh11.position.y = -7.5;
  heartMesh11.userData = { URL: "https://maggieappleton.com/garden-history"};
  scene.add(heartMesh11);
  animateHeart();
}

function onLoadHeart12 (objectLoaded) {
  var mesh12 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh12.geometry);
  console.log(geometry.faces);
  var heartTexture12 = new THREE.TextureLoader().load( 'mtl/Texto.jpg' );
  var heartMaterial12 = new THREE.MeshBasicMaterial( { map: heartTexture12, side: THREE.DoubleSide } );
  heartMesh12 = new THREE.Mesh(geometry, heartMaterial12);
  heartMesh12.scale.set(0.5, 0.5, 0.5);
  heartMesh12.position.x = 69;
  heartMesh12.position.z = -5;
  heartMesh12.position.y = -11;
  heartMesh12.userData = { URL: "https://maggieappleton.com/garden-history"};
  scene.add(heartMesh12);
  animateHeart();
}

function onLoadHeart13 (objectLoaded) {
  var mesh13 = objectLoaded.children[0];
  var geometry = new THREE.Geometry().fromBufferGeometry(mesh13.geometry);
  console.log(geometry.faces);
  var heartTexture13 = new THREE.TextureLoader().load( 'mtl/Web.jpg' );
  var heartMaterial13 = new THREE.MeshBasicMaterial( { map: heartTexture13, side: THREE.DoubleSide } );
  heartMesh13 = new THREE.Mesh(geometry, heartMaterial13);
  heartMesh13.scale.set(0.5, 0.5, 0.5);
  heartMesh13.position.x = 71;
  heartMesh13.position.z = 3;
  heartMesh13.position.y = -10;
  heartMesh13.userData = { URL: "https://weathergradient.com/"};
  scene.add(heartMesh13);
  animateHeart();
}



  function onProgressOBJ(xhr) {
    console.log('descargando...');
    console.log((xhr.loaded / xhr.total * 100) + '%');
  }

  function onErrorOBJ() {
    console.log('upsnoCargotuOBIJE');
    console.log('error');

  }

  function animateHeart()
  {
      requestAnimationFrame(animateHeart);
      render();
  }

  function render()
  {
      var rotSpeed = 0.0002;
      if (heartMesh)
      {
        heartMesh.rotation.y -= rotSpeed;
      }

      if (heartMesh2)
      {
        heartMesh2.rotation.y -= rotSpeed;
      }

      if (heartMesh3)
      {
        heartMesh3.rotation.y -= rotSpeed;
      }

      if (heartMesh4)
      {
        heartMesh4.rotation.y -= rotSpeed;
      }

      if (heartMesh5)
      {
        heartMesh5.rotation.y -= rotSpeed;
      }

      if (heartMesh6)
      {
        heartMesh6.rotation.y -= rotSpeed;
      }

      if (heartMesh7)
      {
        heartMesh7.rotation.y -= rotSpeed;
      }

      if (heartMesh8)
      {
        heartMesh8.rotation.y -= rotSpeed;
      }
      if (heartMesh9)
      {
        heartMesh9.rotation.y -= rotSpeed;
      }
      if (heartMesh10)
      {
        heartMesh10.rotation.y -= rotSpeed;
      }
      if (heartMesh11)
      {
        heartMesh11.rotation.y -= rotSpeed;
      }
      if (heartMesh12)
      {
        heartMesh12.rotation.y -= rotSpeed;
      }
      if (heartMesh13)
      {
        heartMesh13.rotation.y -= rotSpeed;
      }

      //renderer.render(VRWorld.scene, camera);
  }

  document.addEventListener('mousedown', onDocumentMouseDown, false);


  function onMouseMove(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouseX = event.clientX - window.innerWidth / 2;
    mouseY = event.clientY - window.innerHeight / 2;
    camera.position.x += (mouseX - camera.position.x) * 0.01;
    camera.position.y += (mouseY - camera.position.y) * 0.01;
    camera.lookAt(scene.position);
  
  };
  

  function onDocumentMouseDown(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
    //get a link from the userData object
        window.open(intersects[0].object.userData.URL);
    }
};


function animate() {

    //murakit.rotation.x += 0.005;
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );

}
