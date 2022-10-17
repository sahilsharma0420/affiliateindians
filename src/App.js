import {BrowserRouter, Routes, Route  } from "react-router-dom";
import './App.css';
import Leads from './leads/leads'
import Affiliate from './affiliate/affiliate'
import Home from "./Home/Home";
import Commision from "./commisions/commisions";
import Ewallet from "./ewallet/ewallet"
import  Members from "./members/members"
import  Rank from "./ranks/ranks"
import  Reports from "./reports/reports"
import  Traffic from "./traffic/traffic"
import  Stream from "./streams/streams"
import  LeaderBoard from "./leaderboard/leaderboard"
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/lead" element={<Leads/>}/>
      <Route path="/affiliate" element={<Affiliate/>}/>
      <Route path="/commisions" element={<Commision/>}/>
      <Route path="/ewallet" element={<Ewallet/>}/>
      <Route path="/leaderboard" element={<LeaderBoard/>}/>
      <Route path="/members" element={<Members/>}/>
      <Route path="/rank" element={<Rank/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/traffic" element={<Traffic/>}/>
      <Route path="/stream" element={<Stream/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
