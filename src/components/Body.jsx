import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Detail from "./Detail";
import ProtectedRoute from "./ProtectedRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    { 
      element:<ProtectedRoute/>,
      children:[
        {
          path: "/details/:movieId",
          element: <Detail />,
        },
      ]
    },

 
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
