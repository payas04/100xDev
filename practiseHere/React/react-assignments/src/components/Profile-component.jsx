export default function ProfileComponent() {
  return (
    <div style={container}>
      <div
        style={{
          backgroundColor: "lightblue",
          height: "40%",
          minHeight: "120px",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          height: "40px",
        }}
      >
        <img
          src="/payas.jpg"
          alt=""
          width={80}
          style={{
            borderRadius: "100px",
            position: "absolute",
            top: "-50px",
            left: "37%",
          }}
        />
      </div>
      <div style={{
        padding:"10px 0px"
      }}>
        <h3>
          Payas Patel{" "}
          <span
            style={{
              color: "lightgray",
            }}
          >
            24
          </span>
        </h3>
        <p>Mumbai</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          borderTop: "solid 1px gray",
          
        }}
      >
        <span>
          <h4>80M</h4>
          <p>Followers</p>
        </span>
        <span>
          <h4>800M</h4>
          <p>Likes</p>
        </span>
        <span>
          <h4>800</h4>
          <p>Photos</p>
        </span>
      </div>
    </div>
  );
}

const container = {
  position: "relative",
  textAlign: "center",
  borderRadius: "8px",
  //   minHeight:'350px',

  height: "fit-content",
  width: "300px",
  backgroundColor: "white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};
