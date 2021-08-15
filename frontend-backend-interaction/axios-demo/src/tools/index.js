export function getFormData(object) {
    const formData = new FormData()
    Object.keys(object).forEach(key => formData.append(key, object[key]))
    return formData
}


/**
 * 对象转化为url参数
 * @param {*} obj
 */
 export function getParams(obj) {
    return Object.keys(obj)
        .map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
        })
        .join('&')
}


export function getObjByUrl(str){
    return   Object.fromEntries(new URLSearchParams(str));
}