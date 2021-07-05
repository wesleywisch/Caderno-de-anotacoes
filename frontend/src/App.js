import './global.css';
import './app.css';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';

import { ContextProvider } from './provider/ContextAll';

function App() {

  return (
    <div id="app">
      <ContextProvider>
        <Sidebar />
        <Main />
      </ContextProvider>

    </div>
  );
}

export default App;
