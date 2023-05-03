import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

import Community from "./pages/Community";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/Error";
import BrowseJob from "./pages/BrowseJob";
import PostJob from "./pages/PostJob";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resource from "./pages/Resource";
import Applied from "./components/Profile/Applied";
import Posted from "./components/Profile/Posted";
import Edit from "./components/Profile/Edit";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'BrowseJob',
        element: <BrowseJob />
      },
      {
        path: 'PostJob',
        element: <PostJob />
      },
      {
        path: 'Community',
        element: <Community />
      },
      {
        path: 'resource',
        element:<Resource/>
      },
      {
        path: 'Notification',
        element: <Notification />
      },
      {
        path: 'Profile',
        element: <Profile />,
        children: [
          {
            path:'applied',
            element: <Applied/>
          },
          {
            path: 'posted',
            element:<Posted/>
          },
          {
            path: 'edit',
            element:<Edit/>
            
          }
          
        ]
      },

      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }

    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
