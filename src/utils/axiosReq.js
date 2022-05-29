import axios from 'axios'
import { ElNotification } from 'element-plus'
let requestData
let loadingE
const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // 超时时间
})

const appLocal = localStorage.getItem('language');
const localSet = appLocal && appLocal.indexOf('english') > -1 ? 'en' : 'zh-CN'

axios.defaults.xsrfHeaderName = 'Admin-Token'
// 请求拦截
service.interceptors.request.use(
  (request) => {
    /* 下载文件*/
    if (request.isDownLoadFile) {
      request.responseType = 'blob'
    }
    if (request.isUploadFile) {
      request.headers['Content-Type'] = 'multipart/form-data'
    }
    requestData = request
    if (request.method === 'get' && request.data) {
      request.params = request.data
      request.params['local'] = localSet
      request.data = {}
    }
    return request
  },
  (err) => {
    Promise.reject(err)
  }
)

// 响应拦截
service.interceptors.response.use(
  (res) => {
    if (requestData.afHLoading && loadingE) {
      loadingE.close()
    }
    // 如果是下载文件直接返回
    if (requestData.isDownLoadFile) {
      return res.data
    }
    const { status, message } = res.data
    if (!status || status !== -1) {
      if (message) {
        ElNotification({
          title: "Success",
          message: message,
          type: 'success',
          duration: 3 * 1000,
          position: "bottom-right"
        })
      }
      return res.data
    } else {
      if (message) {
        ElNotification({
          title: "Error",
          message: message,
          type: 'error',
          duration: 3 * 1000,
          position: "bottom-right"
        })
        return res.data
      } else {
        return res.data
      }
    }
  },
  (err) => {
    if (loadingE) loadingE.close()
    if (err && err.response && (err.response.code || err.response.status)) {
      const status = err.response.code ? err.response.code : err.response.status
      window.location.href = `/${status}`
      ElNotification({
        title: "错误",
        message: err,
        type: 'error',
        duration: 3 * 1000,
        position: "bottom-right"
      })
    } else {
      ElNotification({
        title: "错误",
        message: err,
        type: 'error',
        duration: 3 * 1000,
        position: "bottom-right"
      })
    }
    return Promise.reject(err)
  }
)

export default function khReqMethod({
  url,
  data,
  method,
  isParams,
  bfLoading,
  afHLoading,
  isUploadFile,
  isDownLoadFile,
  baseURL,
  timeout,
  isAlertErrorMsg
}) {
  return service({
    url: url,
    method: method ?? 'post',
    data: data ?? {},
    isParams: isParams ?? false,
    bfLoading: bfLoading ?? true,
    afHLoading: afHLoading ?? true,
    isUploadFile: isUploadFile ?? false,
    isDownLoadFile: isDownLoadFile ?? false,
    isAlertErrorMsg: isAlertErrorMsg ?? true,
    baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL, // 设置基本基础url
    timeout: timeout ?? 15000 // 配置默认超时时间
  })
}
