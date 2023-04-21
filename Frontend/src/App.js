import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Follower from "./pages/Follower";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/Error";

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
        path: 'Follower',
        element:<Follower/>
      },
      {
        path: 'Community',
        element:<Community/>
      },
      {
        path: 'Blog',
        element:<Blog/>
      },
      {
        path: 'Notification',
        element:<Notification/>
      },
      {
        path: 'Profile',
        element:<Profile/>
      }

    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
