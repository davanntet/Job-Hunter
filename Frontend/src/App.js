import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

import Community from "./pages/Community";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/Error";
import BrowseJob from "./pages/BrowseJob";
import Login from "./pages/Login";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: 'BrowseJob',
        element:<BrowseJob/>
      },
      {
        path: 'Community',
        element:<Community/>
      },
      {
        path: 'Notification',
        element:<Notification/>
      },
      {
        path: 'Profile',
        element:<Profile/>
      },
      {
        path: 'users',
        children: [
          {
            path: 'login',
            element:<Login/>
          },
          {
            path: 'register',
            element:<Register/>
          }
        ]
      }

    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
