import DashView from "@/components/Dash.vue";
import NotFoundView from "@/components/404.vue";

// Import Views - Dash
import Links from "@/components/views/Links.vue";

const routes = [{
  path: "/",
  component: DashView,
  children: [{
    path: "links",
    alias: "",
    component: Links,
    name: "Links",
    meta: {
      description: "蒐錄各種連結",
      showname: "連結",
      breadcrumb: [{
        name: "首頁",
        link: "/"
      }, {
        name: "連結"
      }]
      // }, {
      //   path: 'tables',
      //   component: TablesView,
      //   name: 'Tables',
      //   meta: {description: 'Simple and advance table in CoPilot'}
      // }, {
      //   path: 'tasks',
      //   component: TasksView,
      //   name: 'Tasks',
      //   meta: {description: 'Tasks page in the form of a timeline'}
      // }, {
      //   path: 'setting',
      //   component: SettingView,
      //   name: 'Settings',
      //   meta: {description: 'User settings page'}
      // }, {
      //   path: 'access',
      //   component: AccessView,
      //   name: 'Access',
      //   meta: {description: 'Example of using maps'}
      // }, {
      //   path: 'server',
      //   component: ServerView,
      //   name: 'Servers',
      //   meta: {description: 'List of our servers', requiresAuth: true}
      // }, {
      //   path: 'repos',
      //   component: ReposView,
      //   name: 'Repository',
      //   meta: {description: 'List of popular javascript repos'}
    } }]
}, {
  path: "*",
  component: NotFoundView
}];

export default routes;