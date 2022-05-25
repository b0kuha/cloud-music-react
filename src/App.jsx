import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './router/index';
import { useRoutes } from 'react-router';

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { element }
    </>
  );
}

export default App;
