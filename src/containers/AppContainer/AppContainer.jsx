import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "@store";
import { App } from "@components/feature";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import "@styles/index.scss";
import { WithTranslations } from "@helpers/hoc";

export default function AppContainer() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <WithTranslations>
          <Suspense fallback={"loading..."}>
            <App />
          </Suspense>
        </WithTranslations>
      </BrowserRouter>
    </Provider>
  );
}
