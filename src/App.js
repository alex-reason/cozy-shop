import { Home, Navigation, Authentication, Shop } from "./routes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='signin' element={<Authentication />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;
