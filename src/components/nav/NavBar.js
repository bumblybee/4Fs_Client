import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Image, Button } from "semantic-ui-react";

const NavBar = () => {
  // Using history push when click user profile so forces full page reload to ensure user date loaded - maybe send state with link instead?
  const history = useHistory();
  return (
    <div
      style={{
        padding: "1.25rem 2rem 1rem",
        background:
          "linear-gradient(135deg, rgba(105,165,232,1) -1%, rgba(49,103,158,1) 30%,rgba(40,124,202,1) 91%,rgba(115,165,232,1) 100%)",
        display: "flex",
        alignContent: "center",
        width: "100%",
      }}
    >
      <div style={{ marginRight: "auto" }}>
        <Link to="/home">
          <Button
            size="medium"
            title="home"
            style={{
              borderRadius: "50%",
              padding: "8px 7px",
              boxShadow: "0 0 10px 2px rgba(17,47,167,0.3)",
              border: "2px solid #2f528b",
              background:
                "linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%)",
            }}
          >
            <Image style={{ height: "2.45rem" }} src="/4flogo.png" circular />
          </Button>
        </Link>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <Button
          as="a"
          size="huge"
          icon="user"
          title="profile"
          style={{
            borderRadius: "50%",
            padding: "14px 14px",
            boxShadow: "0 0 10px 2px rgba(17,47,167,0.3)",
            color: "#2f528b",
            border: "2px solid #2f528b",
            marginRight: "0",
            background:
              "linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%)",
          }}
          onClick={() => history.push("/profile")}
        ></Button>
      </div>
    </div>
  );
};

export default NavBar;
