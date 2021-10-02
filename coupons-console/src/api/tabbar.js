import request from '@/utils/request'

const api = {
  commonApi: '/tabbar'
}

export default api

export function getPageList (params) {
  return request('form', true)({
    url: api.commonApi,
    method: 'get',
    params: params
  })
}

export function getTabBarById (tabBarId) {
  const params = {
    tabBarId: tabBarId,
    currentPage: 1,
    pageSize: 1
  }
  return request('form', true)({
    url: api.commonApi,
    method: 'get',
    params: params
  })
}

export function add (params) {
  return request('json', true)({
    url: api.commonApi,
    method: 'post',
    data: params
  })
}

export function update (params) {
  return request('json', true)({
    url: api.commonApi,
    method: 'put',
    data: params
  })
}

export function updateStatus (id, status) {
  return request('json', true)({
    url: `${api.commonApi}/${id}/${status}`,
    method: 'put'
  })
}

export function deleteById (id) {
  return request('json', true)({
    url: `${api.commonApi}/${id}`,
    method: 'delete'
  })
}