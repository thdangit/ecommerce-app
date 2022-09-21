
import "./scss/_index.scss";
import Routes from "./routes/useRoutes"
import { Provider } from "react-redux"
import store from "./redux/store"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    < >
      <Provider store={store}>
        <Routes />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
