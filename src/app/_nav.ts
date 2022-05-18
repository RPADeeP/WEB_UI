import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    
  },
 
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },

  {
    name: 'Users',
    url: '/users',
    icon: 'icon-user'
  },

  {
    name: 'Special',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Create roles',
        url: '/create-role',
        icon: 'icon-star'
      },
    ]
  },

  {
    divider: true
  },
  
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Create department',
        url: '/create-department',
        icon: 'icon-star'
      },
      {
        name: 'Departments',
        url: '/departments',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'BPM',
        url: '/bpm',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  
];
