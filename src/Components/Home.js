import React from "react";
import Nav from "./Nav";
import "./Home.css";
import Activity from "./Activity";
import ShowPost from "./ShowPost";
const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="divide">
        <div className="leftDivide">
          <Activity />
          <ShowPost />
        </div>
        <div className="rightDivide">
          <div className="profile">
            <h3>Complete your Profile</h3>
            <div className="multigraph">
              {/* <span className="tooltip">73%</span> */}
              <span className="graph"></span>
              <h3 id="percentageProfile">73 %</h3>
              <p id="completePara">Complete</p>
            </div>
            <div className="profileInfo">
              <div>
                <table>
                  <tr>
                    <td>
                      <i className="fa-regular fa-circle"></i>
                    </td>
                    <td>General Information</td>
                    <td>5/6</td>
                  </tr>
                  <tr>
                    <td className="green">
                      <i className="fa-regular fa-circle-check"></i>
                    </td>
                    <td>Work Experience</td>
                    <td className="green">3/3</td>
                  </tr>
                  <tr>
                    <td className="green">
                      <i className="fa-regular fa-circle-check"></i>
                    </td>
                    <td>Profile Photo</td>
                    <td className="green">1/1</td>
                  </tr>
                  <tr>
                    <td className="green">
                      <i className="fa-regular fa-circle-check"></i>
                    </td>
                    <td> Cover Photo</td>
                    <td className="green">1/1</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          {/* ACTIVE MEMBERS  */}
          <div className="active">
            <h3>Recently Active Members</h3>
            <div className="members">
              <div>
                <img src="member1.png" alt="" />
              </div>
              <div>
                <img src="member2.png" alt="" />
              </div>
              <div>
                <img src="member3.png" alt="" />
              </div>
              <div>
                <img src="member4.png" alt="" />
              </div>
              <div>
                <img src="member5.png" alt="" />
              </div>
              <div>
                <img src="member6.png" alt="" />
              </div>
              <div>
                <img src="member7.png" alt="" />
              </div>
              <div>
                <img src="member8.png" alt="" />
              </div>
              <div>
                <img src="member9.png" alt="" />
              </div>
              <div>
                <img src="member10.png" alt="" />
              </div>
            </div>
          </div>

          {/* GROUPS  */}
          <div className="groups">
            <h3>Groups</h3>
            <div className="singleGroup">
              <div className="groupImage">
                <img src="group1.png" alt="" />
              </div>
              <div>
                <p>Mountain Riders</p>
                <p style={{ color: "gray", fontSize: "14px" }}>20 members</p>
              </div>
            </div>
            <div className="singleGroup">
              <div className="groupImage">
                <img src="group2.jpg" alt="" />
              </div>
              <div>
                <p>Graphic Design</p>
                <p style={{ color: "gray", fontSize: "14px" }}>20 members</p>
              </div>
            </div>
            <div className="singleGroup">
              <div className="groupImage">
                <img src="group3.jpg" alt="" />
              </div>
              <div>
                <p>Nature Lovers</p>
                <p style={{ color: "gray", fontSize: "14px" }}>18 members</p>
              </div>
            </div>
            <div className="singleGroup">
              <div className="groupImage">
                <img src="group4.jpg" alt="" />
              </div>
              <div>
                <p>Coffee Addicts</p>
                <p style={{ color: "gray", fontSize: "14px" }}>25 members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
