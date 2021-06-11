import React from "react"
import NDBWrapper from "../NDBWrapper"

const TeamMembers = ({ board, engineers, designers }) => {
  return (
    <NDBWrapper>
      <div className="team-members">
        <p className="profileTitle">Board Members</p>
        <div className="board">
          {board.map((person, index) => (
            <div className="profile" key={index}>
              <div className="profile-img">
                <img src={person.profileImg} alt="" />
                <div className="overlay top left">
                  <p className="quote">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, accusantium?{" "}
                  </p>
                  <a href="#">Linkedin</a>
                </div>
              </div>
              <p className="name">{`${person.name} ${person.surname}`}</p>
              <p className="position">{person.position}</p>
            </div>
          ))}
        </div>
        <p className="profileTitle">Engineers</p>{" "}
        <div className="engineers">
          {engineers.map((engineer, index) => (
            <div className="profile" key={index}>
              <div className="profile-img">
                <img src={engineer.profileImg} alt="" />
                <div className="overlay top left">
                  <p className="quote">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, accusantium?{" "}
                  </p>
                  <a href="#">Linkedin</a>
                </div>
              </div>
              <p className="name">{`${engineer.name} ${engineer.surname}`}</p>
              <p className="position">{engineer.position}</p>
            </div>
          ))}
        </div>
        <p className="profileTitle">Designers</p>{" "}
        <div className="designers">
          {designers.map((designer, index) => (
            <div className="profile" key={index}>
              <div className="profile-img">
                <img src={designer.profileImg} alt="" />
                <div className="overlay top left">
                  <p className="quote">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, accusantium?{" "}
                  </p>
                  <a href="#">Linkedin</a>
                </div>
              </div>
              <p className="name">{`${designer.name} ${designer.surname}`}</p>
              <p className="position">{designer.position}</p>
            </div>
          ))}
        </div>
      </div>
    </NDBWrapper>
  )
}

export default TeamMembers
