import http from './my-axios'
const TEST_URL = 'http://111.229.14.189/gk-api/util/test'
const STREAM_URL = 'http://111.229.14.189/gk-api/util/download'

const getList=(data)=>
    http.request({
        url:TEST_URL,
        method:'post',
        data
    })
const getFile=(file)=>http.request({
    url:STREAM_URL,
    params:{
        file
    },
    responseType:'blob'
})

const testUpload=(data,process)=>http.request({
    url:TEST_URL,
    method:'post',
    data,
    onUploadProgress:process
})

export const USER_API={
    getList,
    getFile,
    testUpload
}