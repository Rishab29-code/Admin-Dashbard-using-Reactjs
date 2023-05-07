import './App.css';
import AppHeader from './Component/AppHeader';
import AppFooter from './Component/AppFooter';
import PageContent from './Component/PageConten';
import SideMenu from './Component/SideMenu';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <div className="SideMenuAndPageContent">
        <SideMenu/>
        <PageContent/>
      </div>
      <AppFooter/>
      
    </div>
  );
}

export default App;
