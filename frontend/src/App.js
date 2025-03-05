import './App.css';
import Navbar from './components/navbar/Navbar';
import MatchNavbar from './components/match-navbar/MatchNavbar';
import Login from './components/login/Login';
import TabList from './components/tab-list/TabList';
import ImageSlider from './components/image-slider/ImageSlider';
import Tabs from './components/tabs/Tabs';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MatchNavbar />
      <div className='main'>
        <div className='main-div'>
          <div className='first-div'>
            <TabList />
            <ImageSlider />
          </div>
          <div className='second-div'>
            <Tabs />
          </div>
          <div className='third-div'>
            <SideBar />
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
}

export default App;
