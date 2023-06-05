import Router from "./router/Router";
import { AxiosInterceptor } from "./interceptors/axios.interceptor";
import { HashRouter } from "react-router-dom";

function App() {
  AxiosInterceptor();
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
