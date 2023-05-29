import Router from "./router/Router";
import { AxiosInterceptor } from "./interceptors/axios.interceptor";

function App() {
  AxiosInterceptor();
  return (
    <>
      <Router />
    </>
  );
}

export default App;
