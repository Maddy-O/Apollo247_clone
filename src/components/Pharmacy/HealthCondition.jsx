import { SwiperSlide } from "swiper/react";

export const HealthConditions = ({ id, name, imgURL }) => {
  console.log(imgURL);
  console.log(name);

  return (
    <SwiperSlide
      style={{
        flexShrink: "1",
        justifyContent: "center",
      }}
    >
      <div
        style={{
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
              key={id}
              src={imgURL}
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
              {name}
            </p>
          </div>
        </a>
      </div>
    </SwiperSlide>
  );
};
