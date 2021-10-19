window.onload = function() {

    var scene, camera, renderer, controls, light, manualRender;

    function init() {
        scene = new THREE.Scene();

        const width = window.innerWidth;
        const height = window.innerHeight;
        camera = new THREE.PerspectiveCamera(90, width / height, .1, 100000);
        camera.position.set(0, 50, 10000);
        camera.lookAt(scene.position);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        document.body.appendChild(renderer.domElement);

        light = new THREE.PointLight(0xffffff);
        light.position.set(0, 2500, 0);
        scene.add(light);

        scene.background = new THREE.CubeTextureLoader()
            .setPath('./img/skybox/')
            .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        manualRender = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(manualRender);
        };
    }
    init();
    manualRender();


}