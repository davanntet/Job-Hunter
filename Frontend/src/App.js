import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Follower from "./pages/Follower";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
