const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles:status=>status.user.roles,
  permission_roles:state=>state.permission.routes
}
export default getters
