import React from "react"
import Container from "../container"
import NDBWrapper from "../wrapper"

const NDBsafetyStrategy = () => {
  return (
    <NDBWrapper>
      <div className="technology__gridOverlay">
        <Container>
          {" "}
          <div className="gridOverlay__head">
            <p className="grid-title">NDB Safety Strategy</p>
            <p className="grid-desc">
              The NDB safety strategy has been built to fulfill the
              international nuclear safety standards associated with systems,
              equipment, or materials according to three main strategies{" "}
            </p>
          </div>
        </Container>
        <div className="gridOverlay__content smallGrid">
          <div className="gridOverlay__item ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
              fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat nihil aperiam totam laudantium fuga impedit? Maiores aut,
              quis reprehenderit unde nobis voluptatibus quaerat ad distinctio
              officiis nisi accusantium ab voluptas?
            </p>
            <div className="overlay top left">
              <p className="overlay-title">Title</p>
              <span>Title</span>
            </div>
          </div>
          <div className="gridOverlay__item">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
              fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat nihil aperiam totam laudantium fuga impedit? Maiores aut,
              quis reprehenderit unde nobis voluptatibus quaerat ad distinctio
              officiis nisi accusantium ab voluptas?
            </p>
            <div className="overlay top left">
              <p className="overlay-title">Title</p>
            </div>
          </div>
          <div className="gridOverlay__item">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
              fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat nihil aperiam totam laudantium fuga impedit? Maiores aut,
              quis reprehenderit unde nobis voluptatibus quaerat ad distinctio
              officiis nisi accusantium ab voluptas?
            </p>
            <div className="overlay top left">
              <p className="overlay-title">Title</p>
            </div>
          </div>
        </div>
      </div>
    </NDBWrapper>
  )
}

export default NDBsafetyStrategy
