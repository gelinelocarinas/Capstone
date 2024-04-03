import AppRouteNames from './app_route_names.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { 
  MainPage
} from "../../components";

function AppRoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key={"/"}
          path={AppRouteNames.default}
          element={
              <MainPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutesConfig;
