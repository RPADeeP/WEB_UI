import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Departments',
    url: '/departments',
    icon: 'icon-briefcase',
    
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'icon-people'
  },
  {
    name: 'Actions',
    url: '/actions',
    icon: 'icon-docs'
  },
  {
    name: 'BPM',
    url: '/bpm',
    icon: 'icon-doc'
  },
  {
    name: 'Tasker',
    url: '/tasker',
    icon: 'icon-calendar'
  },

  {
    divider: true
  },

  {
    name: 'Special',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Create department',
        url: '/create-department',
        icon: 'icon-star'
      },
      {
        name: 'Create roles',
        url: '/create-role',
        icon: 'icon-star'
      },
    ]
  },
  
];
