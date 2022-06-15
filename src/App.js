import MainStyle from './styles/MainStyle.module.scss';
import Navbar from './pages/Navbar';
import PageContent from './pages/PageContent';

function App() {
  return (
    <div className={MainStyle.container}>
      <Navbar/>
      <PageContent/>
    </div>
  );
}

export default App;
