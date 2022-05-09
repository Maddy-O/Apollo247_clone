import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="body">
        <div className="content">
          <div className="one">
            <div className="onecontent">
              <div className="oneimg">
                <img
                  className="img1"
                  src="https://newassets.apollo247.com/images/img-doctors@1x.jpg"
                  alt="Online Doctor Consultation &amp; Medicines"
                />
              </div>

              <div className="leftone">
                <span className="lspan1">hello there!</span>
                <p>
                  {" "}
                  Always caring about your health, we are here to help you!
                </p>
                <div className="ldiv">
                  <div className="ldivs">
                    <a href="https://www.apollo247.com/specialties">
                      <div className="ldivimg">
                        <img
                          alt=""
                          src="https://newassets.apollo247.com/images/ic-doctor.svg"
                        />
                      </div>

                      <div className="ldivh">
                        <h1>Book Appointment with Apollo Doctors</h1>
                      </div>
                      <img
                        src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg"
                        alt=""
                        className="limg"
                      ></img>
                    </a>
                  </div>

                  <div className="ldivs">
                    <a href="https://www.apollopharmacy.in/?_ga=2.95784092.1028415345.1651496790-542201307.1651496790">
                      <div className="ldivimg">
                        <img
                          alt=""
                          src="https://newassets.apollo247.com/images/ic_medicines.svg"
                        />
                      </div>

                      <div className="ldivh">
                        <h1>Buy Medicines and Essentials</h1>
                      </div>
                      <img
                        src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg"
                        alt=""
                        className="limg"
                      ></img>
                    </a>
                  </div>

                  <div className="ldivs">
                    <a href="">
                      <div className="ldivimg">
                        <img
                          alt=""
                          src="https://newassets.apollo247.com/images/ic_home_test.svg"
                        ></img>
                      </div>

                      <div className="ldivh">
                        <h1>Book Lab Tests</h1>
                      </div>
                      <img
                        src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg"
                        alt=""
                        className="limg"
                      ></img>
                    </a>
                  </div>

                  <div className="ldivs">
                    <a href="">
                      <div className="ldivimg">
                        <img
                          alt=""
                          src="https://newassets.apollo247.com/images/ic-prescription.svg"
                        />
                      </div>

                      <div className="ldivh">
                        <h1>View Health Records</h1>
                      </div>
                      <img
                        src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg"
                        alt=""
                        className="limg"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="two">
              <div className="pic">
                <a href="/apollo-prohealth" className="apic">
                  <img src="https://newassets.apollo247.com/images/prohealth/prohealthSliderTwo.jpg" />
                </a>
              </div>

              <div className="tdiv1">
                <div className="tdiv">
                  <div className="tdivs">
                    <div className="tdivh">
                      <div className="tdivn">
                        For COVID-19 Vaccination related queries
                      </div>
                      <div className="options">
                        <div className="btns">
                          <a href="" className="abtns">
                            <span></span>
                            <span>FAQ's & Articles</span>
                          </a>
                        </div>
                        <div className="btns">
                          <a href="" className="abtns">
                            <span></span>
                            <span>Vaccination Queries</span>
                          </a>
                        </div>
                        <div className="btns">
                          <a href="" className="abtns">
                            <span></span>
                            <span>Chat with us</span>
                          </a>
                        </div>
                        <div className="btns">
                          <a href="" className="abtns">
                            <span></span>
                            <span>Cowin Registration</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
