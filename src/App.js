import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Authentication, Shop, Checkout } from "./routes";

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='signin' element={<Authentication />} />
          <Route path='shop' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;
