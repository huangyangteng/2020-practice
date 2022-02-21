import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    DirectionalLight,
    HemisphereLight,
    AmbientLight, Color, DirectionalLightShadow, Vector3, CameraHelper, PCFShadowMap
} from 'three'
import {useEffect, useRef, useState} from "react";
import styles from './model-preview.less'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {
    addAxis,
    addCube,
    loadFile,
    addLookAtGeom,
    MODELS_PATH,
    TEXTURE,
    addSpotLight,
    addPlane, addSphere
} from "./modal-preview-tools";


export default function ModelPreview() {
    const box = useRef(null)

    let scene, renderer, camera, directionalLight, hemisphereLight, dhelper, hHelper, controls,lookAtMesh,plane,cube,spotLight, lookAtSpotLight

    const [boxSize, setBoxSize] = useState({width: 1920, height: 500})

    //更新boxSize
    const updateBoxSize = () => {
        box.current = document.getElementById('model-box')
        setBoxSize({
            width: box.current.offsetWidth,
            height: box.current.offsetHeight
        })
    }


    //1.创建场景
    const setScene = () => {
        scene = new Scene()
        renderer = new WebGLRenderer()
        renderer.setSize(boxSize.width, boxSize.height)
        renderer.setClearColor(new Color(0x000000))
        renderer.shadowMapEnabled=true
        renderer.shadowMapType=PCFShadowMap
        const dom = document.getElementById('model-box')
        dom.innerHTML = ''
        dom.appendChild(renderer.domElement)
    }

    //2.创建相机
    const defaultMap = {
        x: -10, y: 10, z: 10
    }
    const setCamera = () => {
        const {x, y, z} = defaultMap
        camera = new PerspectiveCamera(45, boxSize.width / boxSize.height, 1, 1000)
        camera.position.set(x, y, z)
        camera.lookAt(scene.position);

    }

    //3.设置灯光
    const setLight = () => {
        // directionalLight = new DirectionalLight(0xffffff, 0.5)
        // directionalLight.position.set(-4, 8, 4)
        // hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 0.4)
        // hemisphereLight.position.set(0,8,0)
        // hHelper=new HemisphereLightHelper(hemisphereLight,5)
        // scene.add(directionalLight)
        // scene.add(hemisphereLight)

        //自然光
        const ambient = new AmbientLight(0xffffff, 1)
        ambient.position.set(10, 10, 10)
        scene.add(ambient)

        //
        // spotLight=addSpotLight(scene)
        // spotLight.target=cube
        // spotLight.position.set(-30,20,20)
        // lookAtSpotLight=addLookAtGeom(scene,spotLight)

    }
    //5.添加元素
    const setMesh = async () => {
        //加载模型
        // const gltf = await loadFile(MODELS_PATH.plane)
        // console.log(gltf)
        // scene.add(gltf.scene)

        //---辅助查看摄像机的位置
        lookAtMesh=addLookAtGeom(scene)
        lookAtMesh.position.copy(new Vector3(defaultMap.x,2,0))
        //---添加刻度尺
        addAxis(scene)
        //---添加立方体
        cube=addCube(scene,TEXTURE.test1)
        //---添加平面
        plane=addPlane(scene)
        //---添加球
        const sphere=addSphere(scene)


        //添加spotLight
        // const spotLight=addSpotLight(scene)




    }


    //6. 设置动画循环
    var i=0
    const loop = () => {
        requestAnimationFrame(loop)
        //动画逻辑
        // lookAtSpotLight.position.x=i+=0.001
        // lookAtSpotLight.position.y=i+=0.001
        // lookAtSpotLight.position.z=i+=0.001
        // spotLight.position.copy(lookAtSpotLight.position)
        cube.rotation.x+=0.01
        cube.rotation.y+=0.01
        cube.rotation.z+=0.01
        renderer.render(scene, camera)
        controls.update()
    }

    //4.设置控制器
    const setControls = () => {
        controls = new OrbitControls(camera, renderer.domElement)
        controls.maxPolarAngle = Math.PI
        controls.enableZoom = true
        controls.addEventListener('change', render)
    }
    //操作controls控制坐标
    const render = () => {
        defaultMap.x = Number.parseInt(camera.position.x)
        defaultMap.y = Number.parseInt(camera.position.y)
        defaultMap.z = Number.parseInt(camera.position.z)
        lookAtMesh.position.copy(new Vector3(defaultMap.x,2,0))
    }

    //执行所有的初始化操作
    const init = async () => {
        setScene()
        setCamera()

        setControls()
        await setMesh()
        setLight()
        loop()
    }


    useEffect(() => {
        //更新尺寸信息
        updateBoxSize()
        //模型初始化
        setTimeout(()=>{
            init()
        },1000)
    }, [])

    return <div className={styles.modalWrapper} id={'model-box'}>

    </div>
}