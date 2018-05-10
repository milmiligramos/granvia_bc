/**
 * babylon.js v3.1.0
 *
 * 01-basic-geometries
 */

// Step 1, initialization.
let canvas = document.getElementById('render');
let engine = new BABYLON.Engine(canvas, true)

// Step 2, scene, camera & light setup.
let scene = new BABYLON.Scene(engine);
//let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 2, -5), scene);
let light = new BABYLON.HemisphericLight('hemi-light', new BABYLON.Vector3(0, 1, 0), scene);


// This creates and positions a free camera (non-mesh)
var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);

// This targets the camera to scene origin
camera.setTarget(BABYLON.Vector3.Zero());

// This attaches the camera to the canvas
camera.attachControl(canvas, true);

var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 3, scene);
sphere.position.z = 9;
sphere.position.y = 2;

var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", 
   {diameter: 180, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);

var mat = new BABYLON.StandardMaterial("", scene);
mat.diffuseTexture = new BABYLON.Texture("img/360_0001_Stitch_XHC.jpg", scene);
sphere2.material = mat;

/*
// Step 3, mesh setup.
let cube = BABYLON.Mesh.CreateBox('box', 1, scene);
let ground = BABYLON.Mesh.CreateGround('ground', 3, 3, 2, scene);

cube.material = new BABYLON.StandardMaterial('blueMaterial', scene);
cube.material.diffuseColor = new BABYLON.Color3.FromHexString('#0099CC');

// Step 4, configuration.
scene.clearColor = new BABYLON.Color3.FromHexString('#282c34')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
cube.position.y = 0.5;

*/

// Step 5, rendering.
engine.runRenderLoop(() => {
    scene.render();
});