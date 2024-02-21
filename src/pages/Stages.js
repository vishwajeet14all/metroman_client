import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Stages.module.css"
import Carousel from '../components/Carousel'

export default function Stages() {
  return (
    <div>
      <Carousel/>
        <section>
        <div className={style.constructionStages}>
          <div className="container text-center">
            <h2>Construction Stages</h2>
            <p>
              Knowing every step of construction is important to make informed
              decisions. Below are all the stages of homebuilding with detailed
              benefits, product usage tips and a lot more. All you have to do is
              pick your desired stage and explore!
            </p>
          </div>
        </div>
      </section>
      <section className={style.constructionStagesPic}>
        <div
          className={`container text-center ${style.constructionPicContainer}`}
        >
          <div className="d-flex justify-content-evenly flex-wrap">
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/sub_structure.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>1</div>
                <span className={style.stageText}>Site Clearing</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapperBg}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/plinth_level.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>2</div>
                <span className={style.stageText}>Foundation</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/super_structure.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>3</div>
                <span className={style.stageText}>Plinth Beam Or Slab</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapperBg}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/masonary_builder.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>4</div>
                <span className={style.stageText}>Brick Masonry Work</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/sub_structure.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>5</div>
                <span className={style.stageText}>Superstructure</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapperBg}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/plaster.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>6</div>
                <span className={style.stageText}>The Lintel</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/water_proof.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>7</div>
                <span className={style.stageText}>Roofing Coating</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapperBg}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/paint_application.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>8</div>
                <span className={style.stageText}>Painting</span>
              </Link>
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="	https://nuvonirmaan.com/wp-content/uploads/2020/04/electrical.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>9</div>
                <span className={style.stageText}>Electrical and Plumbing</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/wall_putty.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>10</div>
                <span className={style.stageText}>
                  Exterior and Interior Finishing
                </span>
              </Link>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
