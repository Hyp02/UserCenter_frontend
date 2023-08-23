// @ts-ignore
/* eslint-disable */

import request from '@/plugins/globalRequset';
/** 获取当前的用户 GET /api/user/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 删除用户 DELETE /api/user/{id} */
export async function deleteUser(userId: number) {
  return request(`/api/user/delete/${userId}`, {
    method: 'DELETE',
  });
}
/** 编辑更新用户 POST /api/updateUser */
export async function updateUser(body:API.UpdateUser, options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>(`/api/user/updateUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });

}
/** 管理员获取所有用户信息 GET /api/user/currentUser */
export async function queryUsers(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/queryUsers', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse<string>>('/api/user/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}



/** 登录接口 POST /api/user/userLogin */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/api/user/userLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 注册接口 POST /api/user/userRegister */
export async function register(body: API.RegisterParams, options?: { [key: string]: number }) {
  return request<API.BaseResponse<number>>('/api/user/userRegister', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
