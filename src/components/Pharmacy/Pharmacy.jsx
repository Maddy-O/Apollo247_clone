import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MedCard } from "./MedCard";
import { HealthConditions } from "./HealthCondition";
import axios from "axios";

let styleAtag = {
  color: "#81a4ae",
  textDecoration: "none",
  marginBottom: "0px",
};

const healthConditions = [
  "COVID Care",
  "COVID Protrction",
  "Dabetes Care",
  "Mind Care",
  "Liver Care",
  "Cardiac",
  "Pain Relief",
  "Oral Care",
  "Respiratory",
  "Cold & Immunity",
  "Stomach Care",
  "Sexual Health",
  "Eye and Ear Care",
  "Elderly Care",
];

const obj = {
  COVID_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  COVID_Protrction:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png",
  Dabetes_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png",
  Mind_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg",
  Liver_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg",
  Cardiac:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png",
  Pain_Relief:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png",
  Oral_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/o/r/oral_care_2.png",
  Respiratory:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_lungs.png",
  Cold_and_Immunity:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png",
  Stomach_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_stomach.png",
  Sexual_Health:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_condom.png",
  Eye_and_Ear_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_eyeear.png",
  Elderly_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/a/d/adult.png",
};


const medName = [
  "COVID Care",
  "COVID Protrction",
  "Dabetes Care",
  "Mind Care",
  "Liver Care",
  "Cardiac",
  "Pain Relief",
  "Oral Care",
  "Respiratory",
  "Cold & Immunity",
  "Stomach Care",
  "Sexual Health",
  "Eye and Ear Care",
  "Elderly Care",
];
const medObj = {
  COVID_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  COVID_Protrction:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png",
  Dabetes_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png",
  Mind_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg",
  Liver_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg",
  Cardiac:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png",
  Pain_Relief:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png",
  Oral_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/o/r/oral_care_2.png",
  Respiratory:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_lungs.png",
  Cold_and_Immunity:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png",
  Stomach_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_stomach.png",
  Sexual_Health:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_condom.png",
  Eye_and_Ear_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_eyeear.png",
  Elderly_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/a/d/adult.png",
};



const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  color: red;
`;

const Second = styled.div`
  display: flex;
  gap: 25px;
`;

export default function Pharmacy() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/healthConditions").then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <div
      style={{
        fontSize: "14px",
        color: "#02475b",
        backgroundColor: "white",
        width: "1064px",
        margin: "auto",
        marginTop: "90px",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          marginTop: "90px",
          color: "#02475b",
          padding: "0",
          boxSizing: "border-box",
          width: "1064px",
          margin: "auto",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: "20px",
            color: "#02475b",
            fontSize: "12px",
            marginBottom: "0px",
          }}
        >
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/baby-care"
          >
            <p>Baby Care</p>
          </a>
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/health-nutrition"
          >
            <p>Health & Nutrition</p>
          </a>
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/personal-care-1"
          >
            <p>Personal Care</p>
          </a>
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/ayurveda"
          >
            <p>Ayurveda</p>
          </a>
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/health-devices"
          >
            <p>Health Devices</p>
          </a>
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/home-essentials"
          >
            <p>Home Essentials</p>
          </a>
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/apollo-products"
          >
            <p>Apollo Life</p>
          </a>
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/otc"
          >
            <p>Health Condition</p>
          </a>
          <a
            style={styleAtag}
            href="https://www.apollopharmacy.in/shop-by-category/covid-essentials"
          >
            <p>Covid Essentials</p>
          </a>
        </div>
        <hr style={{ marginTop: "0px" }} />
        <div style={{ display: "flex" }}>
          <div>
            <div className="MedicineAutoSearch_medicineSearchForm__3fz_N">
              <div className="MuiFormControl-root MuiTextField-root MedicineAutoSearch_searchInput__1kk2n MuiFormControl-fullWidth">
                <div className="MuiInputBase-root MuiInput-root jss9 MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                  <input
                    type="text"
                    aria-invalid="false"
                    autocomplete="off"
                    id="searchProduct"
                    placeholder="Search medicines, brands and more"
                    value=""
                    className="MuiInputBase-input MuiInput-input"
                  ></input>
                </div>
              </div>
              <button className="AphButton_secondaryBtn__1zFnK AphButton_disable__kvKtr">
                <i className="icon-ic-search MedicineAutoSearch_searchIco__2Hi4p"></i>
              </button>
            </div>
            <div>
              <img
                src="https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/w/e/web_circle_pharmacy.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt=""></img>
              <p>Special Offers</p>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <p>Place your order via prescriptions</p>
                <button>UPLOAD</button>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/ic_prescription_pad.svg"
                  alt=""
                ></img>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <hr />
        {/* ------------------------------------------------------ */}
        <div>
          <div style={{ display: "flex", gap: "0px" }}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {Object.keys(obj).map((item, i) => {
                return (
                  <div style={{ marginLeft: "50px" }}>
                    <SwiperSlide
                      style={{
                        flexShrink: "1",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          // padding: "5px",
                          gap: "0px",
                          justifyContent: "center",
                        }}
                      >
                        <a
                          href="https://www.apollopharmacy.in/shop-by-health-conditions/respiratory"
                          style={{
                            textDecoration: "none",
                            margin: "0",
                          }}
                        >
                          <div
                            style={{
                              margin: "0",
                              boxSizing: "border-box",
                              boxShadow: "0 2px 4px 0 gray",
                              borderRadius: "10px",
                              padding: "14px 7px",
                              display: "flex",
                              // gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <img
                              key={i}
                              src={obj[item]}
                              style={{
                                width: "36px",
                                aspectRatio: "auto 36 / 36",
                                height: "36px",
                                margin: "0",
                                padding: "0",
                                boxSizing: "border-box",
                                marginRight: "12px",
                              }}
                              alt=""
                            ></img>
                            <p
                              style={{
                                margin: "0",
                                fontWeight: "400",
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                width: "80px",
                                justifyContent: "center",
                                textAlign: "left",
                              }}
                            >
                              {healthConditions[i]}
                            </p>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
              <br />
              <br />
            </Swiper>
          </div>
        </div>
        <hr></hr>
        {/* ----------------------------------------------------------- */}
        <div>
          <div style={{ display: "flex", gap: "0px" }}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {Object.keys(obj).map((item, i) => {
                return (
                  <div style={{ marginLeft: "50px" }}>
                    <SwiperSlide
                      style={{
                        flexShrink: "1",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          // padding: "5px",
                          gap: "0px",
                          justifyContent: "center",
                        }}
                      >
                        <a
                          href="https://www.apollopharmacy.in/shop-by-health-conditions/respiratory"
                          style={{
                            textDecoration: "none",
                            margin: "0",
                          }}
                        >
                          <div
                            style={{
                              margin: "0",
                              boxSizing: "border-box",
                              boxShadow: "0 2px 4px 0 gray",
                              borderRadius: "10px",
                              padding: "14px 7px",
                              display: "flex",
                              // gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <img
                              key={i}
                              src={obj[item]}
                              style={{
                                width: "36px",
                                aspectRatio: "auto 36 / 36",
                                height: "36px",
                                margin: "0",
                                padding: "0",
                                boxSizing: "border-box",
                                marginRight: "12px",
                              }}
                              alt=""
                            ></img>
                            <p
                              style={{
                                margin: "0",
                                fontWeight: "400",
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                width: "80px",
                                justifyContent: "center",
                                textAlign: "left",
                              }}
                            >
                              {healthConditions[i]}
                            </p>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
              <br />
              <br />
            </Swiper>
          </div>
        </div>

        {/* ---------------------------------------------- */}
        <div>
          <div
            style={{
              fontSize: "14px",
              fontFamily: "ibm_plex_sansregular",
              color: "#02475b",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 0 10px",
              margin: "0 0 10px",
              borderBottom: "1px solid rgba(2,71,91,.2)",
            }}
          >
            <h3
              style={{
                color: "#02475b",
                padding: "0",
                boxSizing: "border-box",
                fontWeight: "600",
                margin: "0",
                fontSize: "14px",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                marginLeft: "20px",
              }}
            >
              MUSCLETECH FLAT 35 PERCENT OFF
            </h3>
          </div>
        </div>
        <br />
        <div>
          <Main className="mainContainer">
            {healthConditions.map((el, i) => (
              <MedCard key={el._i} imageUrl={el} />
            ))}
          </Main>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}
