import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PhotoConvert from "./Components/PhotoConvert/PhotoConvert";
function App() {
  return (
    <>
      <div>
        <Header />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/photo/convert",
        element: <PhotoConvert />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default appRouter;
