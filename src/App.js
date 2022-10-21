import {HashRouter, Routes, Route  } from "react-router-dom";
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
import  Dashboard from "./Admin/Dashboard/Dashboard";
import  Registeredusers from "./Admin/Registeredusers/Registeredusers";
import  Lead from "./Admin/Lead/Lead";
import  Member from "./Admin/Members/Members";
import  Addadvisor from "./Admin/Addadvisor/Addadvisor";
import  Viewadvisor from "./Admin/Viewadvisor/Viewadvisor";
import  Schedulebooking from "./Admin/Schedulebooking/Schedulebooking";
import  Schedulecalls from "./Admin/Schedulecalls/Schedulecalls";
import  Mybooking from "./Admin/Mybooking/Mybooking";
import  Ewallets from "./Admin/Ewallets/Ewallets";
function App() {
  return (
    <div className="App">
        <HashRouter>
        
      <Routes>
      <Route path="/affiliateindians" element={<Home/>}/>
      <Route path="/lead" element={<Leads/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Viewadvisor" element={<Viewadvisor/>}/>
      <Route path="/Registeredusers" element={<Registeredusers/>}/>
      <Route path="/Leads" element={<Lead/>}/>
      <Route path="/Member" element={<Member/>}/>
      <Route path="/Addadvisor" element={<Addadvisor/>}/>
      <Route path="/Schedulebooking" element={<Schedulebooking/>}/>
      <Route path="/Schedulecalls" element={<Schedulecalls/>}/>
      <Route path="/Mybooking" element={<Mybooking/>}/>
      <Route path="/Ewallets" element={<Ewallets/>}/>
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
    </HashRouter>
    </div>
  );
}

export default App;
