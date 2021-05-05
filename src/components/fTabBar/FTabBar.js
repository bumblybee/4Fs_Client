import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, Icon } from "semantic-ui-react";

const FTabBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];

  const [activeItem, setActiveItem] = useState("");
  // ea8b1c;

  useEffect(() => {
    setActiveItem(path);
  }, [path]);
  return (
    <div
      style={{
        position: "relative",
        background: "#daddde",
        height: "11.5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "inset 0 1px 5px 1px rgba(0,0,0,0.2), inset 0 -1px 4px 1px rgba(0,0,0,0.1)",
        padding: "1rem",
      }}
      centered
    >
      <Menu
        size="massive"
        style={{
          border: "2px solid #2b73ce",
          boxShadow: "0 0 2px rgba(0,0,0,0.6)",
          maxWidth: "90%",
          margin: "0",
        }}
      >
        <Link to="/focus">
          <Menu.Item
            name="focus"
            active={activeItem === "focus"}
            style={{
              background: activeItem === "focus" ? "#2b73ce" : "",
              color: activeItem === "focus" ? "hsl(217, 49%, 99%)" : "#2b73ce",
              padding: "1.25rem 1.75rem",
              borderRadius: 0,
              fontFamily: "Montserrat",
              fontWeight: 400,
            }}
            onClick={(e) => setActiveItem("focus")}
          >
            <Icon name="bullseye" size="large" />

            <span
              style={{
                fontWeight: 500,
              }}
            >
              Focus
            </span>
          </Menu.Item>
        </Link>
        <Link to="/fasting">
          <Menu.Item
            style={{
              background: activeItem === "fasting" ? "#2b73ce" : "",
              color:
                activeItem === "fasting" ? "hsl(217, 49%, 99%)" : "#2b73ce",
              padding: "1.25rem 1.75rem",
              borderRadius: 0,
              fontFamily: "Montserrat",
              fontWeight: 400,
            }}
            name="fasting"
            onClick={(e) => setActiveItem("fasting")}
          >
            <Icon name="wait" size="large" />
            Fasting
          </Menu.Item>
        </Link>
        <Link to="/food">
          <Menu.Item
            style={{
              background: activeItem === "food" ? "#2b73ce" : "",
              color: activeItem === "food" ? "hsl(217, 49%, 99%)" : "#2b73ce",
              padding: "1.25rem 1.75rem",
              borderRadius: 0,
              fontFamily: "Montserrat",
              fontWeight: 400,
            }}
            onClick={(e) => setActiveItem("food")}
            name="food"
          >
            <Icon name="food" size="large" />
            Food
          </Menu.Item>
        </Link>
        <Link to="/fitness">
          <Menu.Item
            style={{
              background: activeItem === "fitness" ? "#2b73ce" : "",
              color:
                activeItem === "fitness" ? "hsl(217, 49%, 99%)" : "#2b73ce",
              padding: "1.25rem 1.75rem",
              borderRadius: 0,
              fontFamily: "Montserrat",
              fontWeight: 400,
            }}
            onClick={(e) => setActiveItem("fitness")}
            name="fitness"
          >
            <Icon name="heartbeat" size="large" />
            Fitness
          </Menu.Item>
        </Link>
      </Menu>
      <Link
        to="/resources"
        style={{
          position: "absolute",
          top: "40%",
          right: "27%",
          fontSize: "1.2rem",
          fontWeight: "500",
          color: "#2b73ce",
        }}
      >
        Bonus Resources
      </Link>
    </div>
  );
};

export default FTabBar;
