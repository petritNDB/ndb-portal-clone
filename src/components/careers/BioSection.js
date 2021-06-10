import React from "react"
import Container from "../Container"

const BioSection = () => {
  return (
    <Container>
      <div className="careers_bio-section">
        <div className="bio">
          <p className="number">1</p>
          <div className="bio__content">
            <p className="title">Massive Project</p>
            <p className="desc">
              take part in building the future: We will be proud of and work
              closely with engineers, lawyers, marketers, designers, developers
              to realize and deploy massive projects that affect our daily lives
              and the future.
            </p>
          </div>
        </div>
        <div className="bio">
          <p className="number">2</p>
          <div className="bio__content">
            <p className="title">Exeptional People</p>
            <p className="desc">
              We work hard, dream big, and come from all corners of the world.
              Join our international team, 30 nationalities from 5 continents,
              15 languages spoken, and even more.
            </p>
          </div>
        </div>
        <div className="bio">
          <p className="number">3</p>
          <div className="bio__content">
            <p className="title">Change the world</p>
            <p className="desc">
              NDB produces energy solutions that will revolutionize the world!
              Be part of that change.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BioSection
