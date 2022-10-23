
    import {useRoutes} from "react-router-dom";
    import DashboardLayout from '../Dashboard';
    import Dashboard from '../Pages/DashboardApp'
    import CreateCat from '../components/CreateCat';
    import Cats from '../components/Cats';
    import UpdateCat from '../components/UpdateCat';
    export default function Router() {
        return useRoutes([
          {
            path: '/',
            element: <DashboardLayout />,
            children: [
              { path: 'app', element: <Dashboard /> },
              { path: 'create-cat', element: <CreateCat /> },
              { path: 'cats', element: <Cats /> },
              { path: 'update-cat/:id', element: <UpdateCat /> },
              
            ],
          },
        
        ]);
      }
    