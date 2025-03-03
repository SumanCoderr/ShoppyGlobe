import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          margin: "10rem 0 1rem",
          fontSize: "3rem",
        }}
      >
        Page Not Found
      </h1>
      <h3
        style={{
          textAlign: "center",
          color: "white",
          margin: "0rem 0 1rem",
          fontSize: "2rem",
        }}
      >
        <b>Status Code : </b> 404
      </h3>
      <p
        style={{
          textAlign: "center",
          color: "white",
          margin: "0rem 0 1rem",
          fontSize: "1.5rem",
        }}
      >
        Oops! Something Went Wrong
      </p>
      <div style={{display:"flex", justifyContent:"center"}}>
        {" "}
        <Link to={"/"}>
          <button
            style={{ textAlign: "center", color: "black", fontSize: "1rem", padding: ".5rem", backgroundColor: "cyan", borderRadius: "20px", cursor: "pointer", boxShadow: "2px 2px 10px white"}}
          >
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
