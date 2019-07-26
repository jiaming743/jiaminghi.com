import Axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

const timeout = 10

export function get(url, data, config) {
  // 组装配置
  const conf = {
    ...config,
    method: 'get',
    url,
    params: data || null,
  }

  return request(conf)
}

export function post(url, data, config) {
  // 组装配置
  const conf = {
    transformRequest(data) {
      return qs.stringify(data)
    },
    ...config,
    method: 'post',
    url,
    data: data || null,
  }

  return request(conf)
}

async function request(config) {
  try {
    // 发起网络请求
    const res = await Axios.request(config)

    return res
  } catch (e) {
    return false
  }
}

// 网络请求拦截处理
Axios.defaults.timeout = timeout

export default {
  get,
  post,
}
