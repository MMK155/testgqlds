
    // component
    import Iconify from './Iconify';
    
    // ----------------------------------------------------------------------
    
    const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
    
    const navConfig = [
      {
        title: 'dashboard',
        path: '/',
        icon: getIcon('eva:pie-chart-2-fill'),
      },

      // {
      //   title: 'user',
      //   path: '/dashboard/user',
      //   icon: getIcon('eva:people-fill'),
      // },

      {
        title: 'Cats',
        path: '/Cats',
        icon: getIcon('eva:shopping-bag-fill'),
      },
      {
        title: 'Add Cats',
        path: '/create-Cat',
        icon: getIcon('eva:file-text-fill'),
      },

      // {
      //   title: 'login',
      //   path: '/login',
      //   icon: getIcon('eva:lock-fill'),
      // },


      // {
      //   title: 'register',
      //   path: '/register',
      //   icon: getIcon('eva:person-add-fill'),
      // },


      // {
      //   title: 'Not found',
      //   path: '/404',
      //   icon: getIcon('eva:alert-triangle-fill'),
      // },

    ];
    
    export default navConfig;
    
    