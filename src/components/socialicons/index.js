import React from "react";
import "./style.css";
import {
  FaInstagram,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div
      className="stick_follow_icon"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="800"
    >
      <ul>
        {socialprofils.instagram && (
          <li>
            <a href="https://instagram.com/putone_official">
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p className="follow_sns">SNS</p>
    </div>
  );
};
