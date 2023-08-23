/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    // 用户信息中的userRole字段，是管理员的话
    canAdmin: currentUser && currentUser.userRole === 1,
  };
}
