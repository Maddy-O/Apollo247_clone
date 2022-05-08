import React from "react";

let liStyle = {
  fontSize: "14px",
  color: "#02475b",
  listStyle: "none",
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  height: "100%",
  minWidth: "95px",
};
let aTag = {
  fontSize: "14px",
  listStyle: "none",
  margin: "0",
  boxSizing: "border-box",
  textDecoration: "none",
  color: "inherit",
  outline: "0",
  display: "flex",
  padding: "12px 16px",
  position: "relative",
  height: "100%",
  width: "100%",
  cursor: "pointer",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "unset",
  textAlign: "start",
};
let spanTag = {
  listStyle: "none",
  color: "inherit",
  cursor: "pointer",
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  fontSize: "12px",
  lineHeight: "16px",
  opacity: ".6",
  display: "block",
  textAlign: "start",
  fontWeight: "600",
  verticalAlign: "baseline",
};
let pTag = {
  listStyle: "none",
  color: "inherit",
  cursor: "pointer",
  boxSizing: "border-box",
  fontWeight: "600",
  fontSize: "13px",
  lineHeight: "20px",
  textTransform: "uppercase",
  margin: "0 0 3px",
  padding: "0 0 3px",
  borderBottom: "1px solid #02475b",
  display: "inline-block",
};
let iTag = {
  listStyle: "none",
  color: "inherit",
  cursor: "pointer",
  padding: "0",
  boxSizing: "border-box",
  fontStyle: "normal",
  fontWeight: "400",
  fontFeatureSettings: "normal",
  fontVariant: "normal",
  textTransform: "none",
  fontSize: "24px",
  lineHeight: "1",
  webkitFontSmoothing: "antialiased",
  display: "none",
  width: "24px",
  height: "24px",
  margin: "0 auto",
};

export default function Navbar() {
  return (
    <div
      style={{
        fontSize: "14px",
        color: "#02475b",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        position: "fixed",
        left: "0",
        right: "0",
        height: "90px",
        zIndex: "10",
        top: "0px",
      }}
    >
      <div
        class="Header_container__2upDz"
        style={{
          fontSize: "14px",
          color: "#02475b",
          padding: "0",
          boxSizing: "border-box",
          width: "1064px",
          margin: "auto",
          height: "100%",
        }}
      >
        <div
          class="Header_headerContent__1YeCK "
          style={{
            fontSize: "14px",
            color: "#02475b",
            margin: "0",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fff",
            padding: "0",
            height: "100%",
            boxShadow: "0 2px 10px 0 rgba(0,0,0,.1)",
            position: "relative",
          }}
        >
          <div
            class="Header_logoWrapper__vGXQZ"
            style={{
              fontSize: "14px",
              color: "#02475b",
              margin: "0",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              justifyContent: "unset",
            }}
          >
            <h1>
              <a
                class="Header_logo__2ZGlx"
                href="/"
                style={{
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  color: "inherit",
                  outline: "0",
                  width: "70px",
                  display: "block",
                }}
              >
                <img
                  src="https://newassets.apollo247.com/images/pharmacy_logo.svg"
                  title="Online Doctor Consultation & Medicines"
                  alt="Online Doctor Consultation & Medicines"
                  style={{
                    fontWeight: "400",
                    color: "inherit",
                    height: "100%",
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                ></img>
              </a>
            </h1>
          </div>
          <div
            class="Header_menuContainer__1Q0Sd"
            style={{
              fontSize: "14px",
              color: "#02475b",
              margin: "0",
              padding: "0",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "unset",
            }}
          >
            <div
              class="Header_specialOffer__2MDtQ"
              style={{
                fontSize: "14px",
                color: "#02475b",
                margin: "0",
                padding: "0",
                boxSizing: "border-box",
                display: "none",
              }}
            ></div>
            <ul
              class="Navigation_navigationList__2hpDt"
              style={{
                fontSize: "14px",
                color: "#02475b",
                boxSizing: "border-box",
                padding: "0",
                listStyle: "none",
                margin: "0",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "unset",
                height: "100%",
              }}
            >
              <li
                style={{
                  fontSize: "14px",
                  color: "#02475b",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  boxSizing: "border-box",
                  height: "100%",
                  width: "98px",
                  display: "none",
                }}
              >
                <a
                  href="https://www.apollopharmacy.in/login?continue=/"
                  style={aTag}
                >
                  <i style={iTag}></i>
                  <p style={pTag}>Login</p>
                  <span style={spanTag}></span>
                </a>
              </li>
              <li style={liStyle}>
                <a href="https://apollo247.com/specialties" style={aTag}>
                  <i style={iTag}></i>
                  <p style={pTag}>Doctors</p>
                  <span style={spanTag}>
                    Consult
                    <br />
                    Online
                  </span>
                </a>
              </li>
              <li style={liStyle}>
                <a href="/pharmacy" style={aTag}>
                  <i style={iTag}></i>
                  <p style={pTag}>Pharmacy</p>
                  <span style={spanTag}>
                    Medicines &
                    <br />
                    other products
                  </span>
                </a>
              </li>
              <li style={liStyle}>
                <a href="https://apollo247.com/lab-tests" style={aTag}>
                  <i style={iTag}></i>
                  <p style={pTag}>Lab Tests</p>
                  <span style={spanTag}>
                    Health
                    <br />
                    check-ups
                  </span>
                </a>
              </li>
              <li style={liStyle}>
                <a href="https://www.apollopharmacy.in/blog" style={aTag}>
                  <i style={iTag}></i>
                  <p style={pTag}>Blog</p>
                  <span style={spanTag}>
                    Latest
                    <br />
                    Updates
                  </span>
                </a>
              </li>
            </ul>
            <div
              class="Header_cartContainer__ZYDh7"
              style={{
                fontSize: "14px",
                fontFamily: "ibm_plex_sansregular",
                color: "#02475b",
                margin: "0",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                height: "100%",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              <img
                class="icon-ic_cart"
                style={{
                  color: "#02475b",
                  cursor: "pointer",
                  margin: "0",
                  padding: "0",
                  boxSizing: "border-box",
                  fontFamily: "icomoon!important",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontFeatureSettings: "normal",
                  fontVariant: "normal",
                  textTransform: "none",
                  fontSize: "24px",
                  lineHeight: "1",
                  webkitFontSmoothing: "antialiased",
                  width: "24px",
                  height: "24px",
                }}
                src="https://img.icons8.com/material-rounded/344/shopping-cart-loaded.png"
              ></img>
              <span
                class="Header_badge__8TidP"
                style={{
                  cursor: "pointer",
                  margin: "0",
                  padding: "0",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "25px",
                  right: "10px",
                  width: "14px",
                  height: "14px",
                  background: "#ff748e",
                  color: "#fff",
                  fontSize: "8px",
                  borderRadius: "14px",
                  opacity: "1",
                }}
              >
                0
              </span>
            </div>
            <a
              href="/login"
              class="Header_userOptions__1o5ZI"
              style={{
                fontSize: "14px",
                fontFamily: "ibm_plex_sansregular",
                color: "#02475b",
                margin: "0",
                boxSizing: "border-box",
                padding: "10px",
              }}
            >
              <span
                class="Header_userCircle__3IK1L"
                style={{
                  fontSize: "14px",
                  fontFamily: "ibm_plex_sansregular",
                  color: "#02475b",
                  margin: "0",
                  padding: "0",
                  boxSizing: "border-box",
                  display: "flex",
                  width: "48px",
                  height: "48px",
                  background: "white",
                  borderRadius: "50%",
                  textAlign: "center",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  class="icon-ic_account_white"
                  style={{
                    color: "white",
                    textAlign: "center",
                    cursor: "pointer",
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box",
                    fontFamily: "icomoon!important",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontFeatureSettings: "normal",
                    fontVariant: "normal",
                    texTransform: "none",
                    fontSize: "24px",
                    lineHeight: "1",
                    webkitFontSmoothing: "antialiased",
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://img.icons8.com/external-bearicons-glyph-bearicons/344/external-User-essential-collection-bearicons-glyph-bearicons.png"
                ></img>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
