import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./msalConfig";

import App from "../src/App";
import { Provider } from "react-redux";
import store from "../src/store";
import { MemoryRouter } from "react-router-dom";

const pca = new PublicClientApplication(msalConfig);

//En caso de no tener la api base, comentar los componentes provider y msalprovider
export const MsalProviderComponent = () => {
  return (
    <Provider store={store}>
      <MsalProvider instance={pca}>
        <App />
      </MsalProvider>
    </Provider>
  );
};
