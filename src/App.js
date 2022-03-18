import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/main";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import { observer } from 'mobx-react-lite'

const App = observer(() => {

  const {user} = useContext(Context)

  useEffect(() => {
    user.setAuth(false)
  }, [])

  return (
      <Main />
  );

});

export default App;
