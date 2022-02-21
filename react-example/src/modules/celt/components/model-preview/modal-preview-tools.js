import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {
    AxesHelper,
    BoxGeometry, CameraHelper,
    ImageUtils,
    Mesh,
    MeshBasicMaterial,
    MeshLambertMaterial,
    MeshPhongMaterial, Object3D, PlaneGeometry,
    SphereGeometry, SpotLight, Vector3
} from "three";
/**
 * 获取资源公共路径
 * @returns {*}
 */
export function getPublicUrl() {
    let publicUrl = process.env.PUBLIC_URL
    if (publicUrl === '.') {
        publicUrl = ''
    }
    return publicUrl
}

const publicPath = getPublicUrl()

/**
 * 模型地址
 * @type {{plane: string}}
 */
export const MODELS_PATH = {
    plane: publicPath + '3d/plane/scene.gltf'
}

export const TEXTURE={
    test1:publicPath+'texture/2.jpeg'
}
/**
 * 加载模型文件
 * @param url
 * @returns {Promise<unknown>}
 */
export const loadFile = (url) => {
    const loader = new GLTFLoader()
    return new Promise((resolve) => {
        loader.load(url, (gltf) => {
            resolve(gltf)
        }, (args) => {
            console.log(args)
        })
    })
}


//新建刻度尺
export function addAxis(scene) {
    const axis = new AxesHelper(30)
    scene.add(axis)
    return axis
}

//添加平面
export function addPlane(scene){
    const planeGeometry=new PlaneGeometry(60,20,1,1)
    const planeMaterial=new MeshLambertMaterial({color:0x333333})
    const plane=new Mesh(planeGeometry,planeMaterial)
    plane.receiveShadow=true
    plane.rotation.x=-0.5*Math.PI
    plane.position.y=0
    plane.position.z=0
    plane.name='plane'
    scene.add(plane)
    return plane
}

//新建一个立方体
export function addCube(scene,imageFile) {

    let cubeGeometry = new BoxGeometry(4, 4, 4)

    //材质添加纹理
    const texture=ImageUtils.loadTexture(imageFile)
    let mat=new MeshPhongMaterial()
    mat.map=texture

    // let cubeMaterial = new MeshBasicMaterial({color: 0xff0000, wireframe: true})
    const cube = new Mesh(cubeGeometry, mat)
    scene.add(cube)
    cube.position.y=4
    cube.position.x=4
    cube.position.z=4
    cube.castShadow=true
    cube.name='cube'
    return cube
}

export function addSphere(scene){
    const sphereGeometry=new SphereGeometry(4,20,20)
    const sphereMaterial=new MeshLambertMaterial({color:0x7777ff})
    const sphere=new Mesh(sphereGeometry,sphereMaterial)
    sphere.castShadow=true
    sphere.position.x=20
    sphere.position.y=4
    sphere.position.z=2
    scene.add(sphere)
    return sphere

}

/**
 * 模拟摄像机的位置
 * @param scene
 * @returns {Mesh}
 */
export function addLookAtGeom(scene,target){
    const lookAtGeom=new SphereGeometry(0.2)
    const lookAtMesh=new Mesh(lookAtGeom,new MeshLambertMaterial(({color:0xff0000})))

    if(target){
        lookAtMesh.position.copy(new Vector3(target.x,target.y,target.z))

    }
    scene.add(lookAtMesh)
    return lookAtMesh
}







export function addSpotLight(scene){
    const spotLight=new SpotLight('#ffffff')
    spotLight.position.set(-40,60,-10)
    //阴影相关设置
    spotLight.shadow.camera.near = 2;
    spotLight.shadow.camera.far = 200;
    spotLight.shadow.camera.fov = 30;
    spotLight.angle=1

    // var target = new Object3D();
    // target.position.set(30, 0, 0);
    // target.name='test-target'
    // scene.add(target);
    //
    // spotLight.target=target
    // const helper=new CameraHelper(spotLight.shadow.camera)
    // scene.add(helper)


    scene.add(spotLight)



    return spotLight

}













