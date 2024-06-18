import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, NotFound } from "../../components";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = ['https://i.ibb.co/QYQ6mM5/interfaz-web-2.png', 'https://i.ibb.co/cgsC8TW/plastic.jpg']

    cacheImages(images)
  }, [])

  const cacheImages = async (srcArray: Array<string>) => {
    const promises = await srcArray.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.addEventListener('load', () => {
          resolve();
        });
        img.addEventListener('error', () => {
          reject();
        });
      })
    })

    await Promise.all(promises);
    setIsLoading(false)
  }
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <div className="d-flex-col">
      {/* Navigation */}
      <Navbar />

      {/* PageContent */}
      <Routes>
        {Object.entries(pathMapping).map(
          ([path, { component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  {isLoading &&
                    <Loading />
                  }
                  {!isLoading &&
                    <div className="page-container"><Component /></div>

                  }
                </>
              }
            />
          ),
        )}
        <Route
          path="*"
          element={
            <>
              <div className="page-container"><NotFound /></div>
            </>
          }
        />
      </Routes>

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />
    </div>
  );
};

export default App;
