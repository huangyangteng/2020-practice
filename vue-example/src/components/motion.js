export function getAnim(item){
    let {id,startTime,endTime,inTime,outTime,motionInClass,motionOutClass}=item
    //motionIn
    //retention
    //motionOut
    if(!motionInClass && !motionOutClass)return null
    let duration=endTime-startTime-inTime-outTime
    const delayTime=duration*1000


    return {
        targets: '.attach_'+id,
        keyframes: [
               ...getMotionIn({inTime,startTime,motionInClass}),
                ...getMotionOut({outTime,motionOutClass,delayTime})
        ]
    }

}
export const ANIM_MAP={
    fadeIn(duration){
        return {
             duration,
             opacity:[0,1],
        }
    },
    fadeInLeft(duration){
        return {
            translateX:['-100%',0],
            opacity:[0,1],
            duration,
        }
    },
    fadeInRight(duration){
        return {
            translateX:['100%',0],
            opacity:[0,1],
            duration,
        }
    },
    fadeInDown(duration){
        return {
            translateY:['-100%',0],
            opacity:[0,1],
            duration,
        }
    },
    fadeInUp(duration){
        return {
            translateY:['100%',0],
            opacity:[0,1],
            duration,
        }
    },

    bounceInLeft(duration){
        return [
                {
                    duration: duration*0.6,
                    opacity: [0, 1],
                    translateX: [-3000, 25],
                    scale: [3, 1],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.15,
                    translateX: [25, -10],
                    scale: [1, 0.98],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.15,
                    translateX: [-10, 5],
                    scale: [0.98, 0.995],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.1,
                    translateX: [5, 0],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                }
            ]

    },
    bounceInDown(duration){
        return [
                {
                    duration: duration*0.6,
                    opacity: [0, 1],
                    translateY: [-3000, 25],
                    scale: [3, 1],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.15,
                    translateY: [25, -10],
                    scale: [1, 0.98],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.15,
                    translateY: [-10, 5],
                    scale: [0.98, 0.995],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.1,
                    translateY: [5, 0],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                }
            ]

    },
    bounceInRight(duration){
        return [
                {
                    duration: duration*0.6,
                    opacity: [0, 1],
                    translateX: [3000, -25],
                    scale: [3, 1],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.15,
                    translateX: [-25, 10],
                    scale: [1, 0.98],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.15,
                    translateX: [10, -5],
                    scale: [0.98, 0.995],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.1,
                    translateX: [-5, 0],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                }
            ]

    },
    bounceInUp(duration){
        return [
                {
                    duration: duration*0.6,
                    opacity: [0, 1],
                    translateY: [3000, -20],
                    scale: [5, 0.9],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.15,
                    translateY: [-20, 10],
                    scale: [0.9, 0.95],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.15,
                    translateY: [10, -5],
                    scale: [0.95, 0.985],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: duration*0.1,
                    translateY: [-5, 0],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                }
            ]

    },

    fadeOut(duration){
        return {
             opacity:[1,0],
             duration
        }
    },
    fadeOutRight(duration){
        return {
             opacity:[1,0],
             translateX:[0,'100%'],
             duration
        }
    },
    fadeOutLeft(duration){
        return {
             opacity:[1,0],
             translateX:[0,'-100%'],
             duration
        }
    },
    fadeOutDown(duration){
        return {
             opacity:[1,0],
             translateY:[0,'100%'],
             duration
        }
    },
    fadeOutUp(duration){
        return {
             opacity:[1,0],
             translateY:[0,'-100%'],
             duration
        }
    },
    
}

function getMotionIn({inTime,startTime,motionInClass}){
    if(!motionInClass){
        return []
    }
    let [first,...reset]=format(ANIM_MAP[motionInClass](inTime*1000)) 
    return [
        {delay:startTime*1000,...first},
        ...reset
    ]

}


function getMotionOut({outTime,motionOutClass,delayTime}){
    if(!motionOutClass)return []
    const [first,...rest]=format(ANIM_MAP[motionOutClass](outTime*1000))
    return [
        {delay:delayTime,...first},
        ...rest
    ]
}



function format(obj){
    if(Array.isArray(obj)){
        return obj
    }else{
        return [obj]
    }

}