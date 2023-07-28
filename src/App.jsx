import { useEffect, useState } from 'react'
// import AppChile from './chile/AppChile'
import AppPeru from './peru/AppPeru'
import { useIsAuthenticated, useMsal, useAccount } from "@azure/msal-react";
import { useDispatch } from 'react-redux';
import { InteractionStatus } from '@azure/msal-browser';
import { setToken, setUsuarioData } from './store/slices/usuario';
import { msalConfig } from '../auth/msalConfig';
import {  MemoryRouter } from "react-router-dom";



function App() {
  const [pais, setPais] = useState("")
  const dispatch = useDispatch();
  const isAutenticated = useIsAuthenticated();
  const { instance, accounts, inProgress  } = useMsal();
  const account = useAccount(accounts[0] || {});

  //Validamos si esta autenticado, sino se redirige a pantalla de login office
  if (inProgress === InteractionStatus.None && !isAutenticated) {
    instance.loginRedirect(msalConfig);
  }
  //Obtenemos token office y lo enviamos a la API.
  useEffect(() => {
    if (account) {
      instance
        .acquireTokenSilent({
          account: account,
        })
        .then((response) => {
          return response.idToken
        })
        .then((token) => {  
          fetch(`${import.meta.env.VITE_API_URL}Home/Login?token=${token}`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
              // token: token,
            },
          }).then((res) => {
            return res.json()
          }).then((data)=> {
            //Si el usuario no existe en colaboradores enviamos a pantalla de login office, sino guardamos data de colab, el pais y su token.
            if(data.FlgOK == -100){
              instance.logoutRedirect(msalConfig)
            }
            else{
              dispatch(setUsuarioData(data.colab))
              dispatch(setToken(data.token))
              setPais(data.colab.Pais)
            }
          })
        });
    }
  }, [account, instance]);


  return (
    <>
    {/* {
      pais == 'Chile' ? (
        <>
        <MemoryRouter>
          <AppChile>
          </AppChile>
        </MemoryRouter>  
       </>
      ) : ""
      
    } */}

{
      pais == 'Peru' ? (
        <>
        <MemoryRouter>
          <AppPeru>
          </AppPeru>
        </MemoryRouter>  
       </>
      ) : ""
      
    }

    </>
  )
}

export default App
