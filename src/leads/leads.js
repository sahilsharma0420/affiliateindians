import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { leadsdata } from "./leadsdata";
import Leadstable from "./leadstable";
import WebIcon from "@mui/icons-material/Web";
import ErrorIcon from '@mui/icons-material/Error';
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import RampRightIcon from "@mui/icons-material/RampRight";
import "../Home/Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import "./leads.css";
function Leads() {
  const [ham, setham] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1030px)").matches
  );


  useEffect(() => {
    window
      .matchMedia("(max-width: 1030px)")
      .addEventListener("change", (e) => setMatches(e.matches));
      
  }, []);
  const cross = () => {
    setham(!ham);
  };
  return (
    <>
      <nav className={ham ? "main-nav1" : "main-nav"}>
        {/* 1st logo part  */}
        <div className="logo">
          {ham ? (
            <img
              className="logopic"
              src="https://affiliateindians.com/ai/assets/logo-small.png"
              alt="location"
            ></img>
          ) : (
            <img
              className="logopic1"
              src={
                matches
                  ? "https://affiliateindians.com/ai/assets/logo-small.png"
                  : "https://affiliateindians.com/ai/assets/logo_white.png"
              }
              alt="location"
            ></img>
          )}
        </div>
        <div className="ham">
          <span className={ham ? "top topcross" : "top"} onClick={cross}></span>
          <span
            className={ham ? "middle middlecross" : "middle"}
            onClick={cross}
          ></span>
          <span
            className={ham ? "bottom bottomcross" : "bottom"}
            onClick={cross}
          ></span>
        </div>
        {/* 2nd menu part  */}

        <div className="course">
          <NavLink to="#">
            <div className="course-inner">
              <div>
                <WorkOutlineIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                My Courses
              </div>
            </div>
          </NavLink>
        </div>
        <div className="account">
          <NavLink to="#">
            <div className="account-inner">
              <div>
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                Acccount <KeyboardArrowDownIcon />
              </div>
            </div>
          </NavLink>
        </div>

        <div className="support">
          <NavLink to="#">
            <div className="support-inner">
              <div>
                <AttachFileOutlinedIcon
                  style={{
                    fontSize: "30px",
                    transform: "rotate(45deg)",
                    marginTop: "5px",
                  }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                Support <KeyboardArrowDownIcon />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="affiliate">
          <NavLink to="#">
            <div className="affiliate-inner">
              <div>
                <CurrencyRupeeOutlinedIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                
                Affiliates
              </div>
            </div>
          </NavLink>
        </div>
        <div className="advisor">
          <NavLink to="#">
            <div className="advisor-inner">
              <div>
                <ContactMailOutlinedIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                {" "}
                My Advisor
              </div>
            </div>
          </NavLink>
        </div>
      </nav>
      <div className="home">
        {/* sidebar */}
 
        <div className="sidebar-container">
        {ham ? (
          <div>
            {matches ? (
              <div>
                <div className="home-left">
                  <div className="start">
                    <NavLink to="/">
                      <WebIcon style={{ marginRight: "10px" }} /> Start Here
                    </NavLink>
                  </div>
                  <div className="wallet">
                    <NavLink to="/ewallet">
                      <FolderOpenIcon style={{ marginRight: "10px" }} />{" "}
                      eWallet
                    </NavLink>
                  </div>
                  <div className="links">
                    <NavLink to="/affiliate">
                      <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                      Affiliate Links
                    </NavLink>
                  </div>
                  <div className="leads">
                    <NavLink to="/lead">
                      <FormatListBulletedIcon
                        style={{ marginRight: "10px" }}
                      />
                      Leads
                    </NavLink>
                  </div>
                  <div className="members">
                    <NavLink to="/members">
                      <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                      Members
                    </NavLink>
                  </div>
                  <div className="reports">
                    <NavLink to="/reports">
                      <ArticleOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                      Reports
                    </NavLink>
                  </div>
                  <div className="rank">
                    <NavLink to="/rank">
                      <ShowChartOutlinedIcon
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Rank
                    </NavLink>
                  </div>
                  <div className="leader">
                    <NavLink to="/leaderboard">
                      <FormatListBulletedIcon
                        style={{ marginRight: "10px" }}
                      />{" "}
                      LeaderBoard
                    </NavLink>
                  </div>
                  <div className="commisions">
                    <NavLink to="/commisions">
                      <DiamondOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                      Commissions
                    </NavLink>
                  </div>
                  <div className="stream">
                    <NavLink to="/stream">
                      <RampRightIcon style={{ marginRight: "10px" }} /> [PRO]
                      Streams of Income
                    </NavLink>
                  </div>
                  <div className="traffic">
                    <NavLink to="/traffic">
                      <DragHandleIcon style={{ marginRight: "10px" }} /> [PRO]
                      Get Traffic
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="home-left1">
                  <div className="start1">
                    <NavLink to="/">
                      <WebIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="wallet1">
                    <NavLink to="/ewallet">
                      <FolderOpenIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="links1">
                    <NavLink to="/affiliate">
                      <PeopleOutlineIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="leads1">
                    <NavLink to="/lead">
                      <FormatListBulletedIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="members1">
                    <NavLink to="/members">
                      <PeopleOutlineIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="reports1">
                    <NavLink to="/reports">
                      <ArticleOutlinedIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="rank1">
                    <NavLink to="/rank">
                      <ShowChartOutlinedIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="leader1">
                    <NavLink to="/leaderboard">
                      <FormatListBulletedIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="commisions1">
                    <NavLink to="/commisions">
                      <DiamondOutlinedIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="stream1">
                    <NavLink to="/stream">
                      <RampRightIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                  <div className="traffic1">
                    <NavLink to="traffic">
                      <DragHandleIcon style={{ fontSize: "25px" }} />
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {matches ? (
              <div>
              <div className="home-left1">
              <div className="start1">
                <NavLink to="/">
                  <WebIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="wallet1">
                <NavLink to="/ewallet">
                  <FolderOpenIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="links1">
                <NavLink to="/affiliate">
                  <PeopleOutlineIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="leads1">
                <NavLink to="/lead">
                  <FormatListBulletedIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="members1">
                <NavLink to="/members">
                  <PeopleOutlineIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="reports1">
                <NavLink to="/reports">
                  <ArticleOutlinedIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="rank1">
                <NavLink to="/rank">
                  <ShowChartOutlinedIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="leader1">
                <NavLink to="/leaderboard">
                  <FormatListBulletedIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="commisions1">
                <NavLink to="/commisions">
                  <DiamondOutlinedIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="stream1">
                <NavLink to="/stream">
                  <RampRightIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
              <div className="traffic1">
                <NavLink to="traffic">
                  <DragHandleIcon style={{ fontSize: "25px" }} />
                </NavLink>
              </div>
            </div>
              </div>
            ) : (
              <div>
              <div className="home-left">
                  <div className="start">
                    <NavLink to="/">
                      <WebIcon style={{ marginRight: "10px" }} /> Start Here
                    </NavLink>
                  </div>
                  <div className="wallet">
                    <NavLink to="/ewallet">
                      <FolderOpenIcon style={{ marginRight: "10px" }} />{" "}
                      eWallet
                    </NavLink>
                  </div>
                  <div className="links">
                    <NavLink to="/affiliate">
                      <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                      Affiliate Links
                    </NavLink>
                  </div>
                  <div className="leads">
                    <NavLink to="/lead">
                      <FormatListBulletedIcon
                        style={{ marginRight: "10px" }}
                      />
                      Leads
                    </NavLink>
                  </div>
                  <div className="members">
                    <NavLink to="/members">
                      <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                      Members
                    </NavLink>
                  </div>
                  <div className="reports">
                    <NavLink to="/reports">
                      <ArticleOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                      Reports
                    </NavLink>
                  </div>
                  <div className="rank">
                    <NavLink to="/rank">
                      <ShowChartOutlinedIcon
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Rank
                    </NavLink>
                  </div>
                  <div className="leader">
                    <NavLink to="/leaderboard">
                      <FormatListBulletedIcon
                        style={{ marginRight: "10px" }}
                      />{" "}
                      LeaderBoard
                    </NavLink>
                  </div>
                  <div className="commisions">
                    <NavLink to="/commisions">
                      <DiamondOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                      Commissions
                    </NavLink>
                  </div>
                  <div className="stream">
                    <NavLink to="/stream">
                      <RampRightIcon style={{ marginRight: "10px" }} /> [PRO]
                      Streams of Income
                    </NavLink>
                  </div>
                  <div className="traffic">
                    <NavLink to="/traffic">
                      <DragHandleIcon style={{ marginRight: "10px" }} /> [PRO]
                      Get Traffic
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {ham && (
        <div className="home-left2">
          <div className="start">
            <NavLink to="/">
              <WebIcon style={{ marginRight: "10px" }} /> Start Here
            </NavLink>
          </div>
          <div className="wallet">
            <NavLink to="/ewallet">
              <FolderOpenIcon style={{ marginRight: "10px" }} /> eWallet
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="/affiliate">
              <PeopleOutlineIcon style={{ marginRight: "10px" }} /> Affiliate
              Links
            </NavLink>
          </div>
          <div className="leads">
            <NavLink to="/lead">
              <FormatListBulletedIcon style={{ marginRight: "10px" }} />
              Leads
            </NavLink>
          </div>
          <div className="members">
            <NavLink to="/members">
              <PeopleOutlineIcon style={{ marginRight: "10px" }} /> Members
            </NavLink>
          </div>
          <div className="reports">
            <NavLink to="/reports">
              <ArticleOutlinedIcon style={{ marginRight: "10px" }} /> Reports
            </NavLink>
          </div>
          <div className="rank">
            <NavLink to="/rank">
              <ShowChartOutlinedIcon style={{ marginRight: "10px" }} /> Rank
            </NavLink>
          </div>
          <div className="leader">
            <NavLink to="/leaderboard">
              <FormatListBulletedIcon style={{ marginRight: "10px" }} />{" "}
              LeaderBoard
            </NavLink>
          </div>
          <div className="commisions">
            <NavLink to="/commisions">
              <DiamondOutlinedIcon style={{ marginRight: "10px" }} />{" "}
              Commissions
            </NavLink>
          </div>
          <div className="stream">
            <NavLink to="/stream">
              <RampRightIcon style={{ marginRight: "10px" }} /> [PRO] Streams
              of Income
            </NavLink>
          </div>
          <div className="traffic">
            <NavLink to="/traffic">
              <DragHandleIcon style={{ marginRight: "10px" }} /> [PRO] Get
              Traffic
            </NavLink>
          </div>
        </div>
      )}
          <div className="home-left2">
          <div className="start">
            <NavLink to="#">
              <WebIcon style={{ marginRight: "10px" }} /> Start Here
            </NavLink>
          </div>
          <div className="wallet">
            <NavLink to="#">
              <FolderOpenIcon style={{ marginRight: "10px" }} /> eWallet
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="#">
              <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
              Affiliate Links
            </NavLink>
          </div>
          <div className="leads">
            <NavLink to="#">
              <FormatListBulletedIcon style={{ marginRight: "10px" }} />
              Leads
            </NavLink>
          </div>
          <div className="members">
            <NavLink to="#">
              <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
              Members
            </NavLink>
          </div>
          <div className="reports">
            <NavLink to="#">
              <ArticleOutlinedIcon style={{ marginRight: "10px" }} />{" "}
              Reports
            </NavLink>
          </div>
          <div className="rank">
            <NavLink to="#">
              <ShowChartOutlinedIcon style={{ marginRight: "10px" }} />{" "}
              Rank
            </NavLink>
          </div>
          <div className="leader">
            <NavLink to="#">
              <FormatListBulletedIcon style={{ marginRight: "10px" }} />{" "}
              LeaderBoard
            </NavLink>
          </div>
          <div className="commisions">
            <NavLink to="#">
              <DiamondOutlinedIcon style={{ marginRight: "10px" }} />{" "}
              Commissions
            </NavLink>
          </div>
          <div className="stream">
            <NavLink to="#">
              <RampRightIcon style={{ marginRight: "10px" }} /> [PRO]
              Streams of Income
            </NavLink>
          </div>
          <div className="traffic">
            <NavLink to="#">
              <DragHandleIcon style={{ marginRight: "10px" }} /> [PRO] Get
              Traffic
            </NavLink>
          </div>
      
          </div>}
        {/* sidebar */}
        {matches ?<div>
          <div className={ham ? "home-right" : "home-right1"}>
          <div className="right-header">
            <div
              style={{ color: "#000", fontSize: "18px", paddingLeft: "10px" }}
            >
            Leads
            </div>
            <div className="sidewords">
              <NavLink
                style={{
                  color: "#9BA3AA",
                  fontSize: "18px",
                  paddingLeft: "10px",
                }}
                to="#"
              >
                Home
              </NavLink>
              <p
                style={{
                  color: "#9BA3AA",
                  fontSize: "18px",
                  paddingLeft: "10px",
                }}
              >
                >
              </p>
              <p
                style={{
                  color: "#9BA3AA",
                  fontSize: "18px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
              Leads
              </p>
            </div>
          </div>
          <div className="right-block-container">
            <div className="right-block1">
              <div className="right-block1-part1-container">
                <div className="right-block1-part1">
                  <p style={{ fontSize: "28px", color: "#fff" }}>
                    Welcome to Affiliate Indians
                  </p>
                  <p style={{ fontSize: "18px", color: "#fff" }}>
                    Complete the assignment below and get Your Rankings
                  </p>
                </div>
              </div>
              <div className="right-block1-part2"></div>
            </div>
            <div style={{fontSize:"16px",paddingLeft:"25px",paddingTop:"0px",paddingBottom:"10px",fontWeight:"900"}}><ErrorIcon style={{marginRight:"7px"}}/><i>Tables can be scrolled horizontally</i></div>
            <div className="leads-right-block2-container">
            <div className="leads-right-block2">
            <div className="leads-header">
            <div className="leads-header1">S.No.</div>
            <div className="leads-header2">Date</div>
            <div className="leads-header3">Tag</div>
            <div className="leads-header4">Name</div>
            <div className="leads-header5">Email</div>
            <div className="leads-header6">Phone</div>
            </div>
            <Leadstable details={leadsdata}/>
            </div>
            </div>
          </div>
          <div className="copyright">2020 © copyright</div>
        </div>
          </div>:<div>
          <div className={ham ? "home-right1" : "home-right"}>
          <div className="right-header">
            <div className="header-heading"
              
            >
            Leads
            </div>
            <div className="sidewords">
              <NavLink
                style={{
                  color: "#9BA3AA",
                  fontSize: "18px",
                  paddingLeft: "10px",
                }}
                to="#"
              >
                Home
              </NavLink>
              <p
                style={{
                  color: "#9BA3AA",
                  fontSize: "18px",
                  paddingLeft: "10px",
                }}
              >
                >
              </p>
              <p
                style={{
                  color: "#9BA3AA",
                  fontSize: "18px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
              Leads
              </p>
            </div>
          </div>
          <div className="right-block-container">
            <div className="right-block1">
              <div className="right-block1-part1-container">
                <div className="right-block1-part1">
                  <p style={{ fontSize: "28px", color: "#fff" }}>
                    Welcome to Affiliate Indians
                  </p>
                  <p style={{ fontSize: "18px", color: "#fff" }}>
                    Complete the assignment below and get Your Rankings
                  </p>
                </div>
              </div>
              <div className="right-block1-part2"></div>
            </div>
            <div style={{fontSize:"16px",paddingLeft:"25px",paddingTop:"0px",paddingBottom:"10px",fontWeight:"900"}}><ErrorIcon style={{marginRight:"7px"}}/><i>Tables can be scrolled horizontally</i></div>
            <div className="leads-right-block2-container">
            <div className="leads-right-block2">
            <div className="leads-header">
            <div className="leads-header1">S.No.</div>
            <div className="leads-header2">Date</div>
            <div className="leads-header3">Tag</div>
            <div className="leads-header4">Name</div>
            <div className="leads-header5">Email</div>
            <div className="leads-header6">Phone</div>
            </div>
            <Leadstable details={leadsdata}/>
            </div>
            </div>
          </div>
          <div className="copyright">2020 © copyright</div>
        </div>
          </div>}
      </div>
    </>
  );
}

export default Leads;
