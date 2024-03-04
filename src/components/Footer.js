import React from "react";
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <section className={style.section}>
      <div className={`container`}>
        <div className="row">
          <div className={`col-md-4 col-sm-6 `}>
            <div className={style.quickLinks}>Quick Links</div>
            <ul>
              <li>- Home</li>
              <li>- Contact Us</li>
              <li>- Services</li>
              <li>- Blog</li>
              <li>- Privacy Policy</li>
            </ul>
          </div>
          <div className={`col-md-4 col-sm-6 `}>
            <div className={style.getInTouch}>Get in Touch</div>
            <ul>
              <li className={style.address}>
                <FontAwesomeIcon icon={faLocationDot} />
                G/F, 1137, GH 14 Paschim Vihar, GH 14, Paschim Vihar, New Delhi,
                West Delhi, Delhi, 110087
              </li>
              <li>metromancastingyards@gmail.com</li>
              <li>91 8218327600</li>
            </ul>
          </div>
          <div className={`col-md-4 col-sm-12`}>
            <div className={style.outerSocialDiv}>
              <div className={style.socialIconsOuter}>
                <Link to="https://www.facebook.com/profile.php?id=61556734166198">
                  <FontAwesomeIcon
                    className={style.socialIcons}
                    icon={faFacebook}
                  />
                </Link>
              </div>
              <div className={style.socialIconsOuter}>
                <Link to="">
                  <FontAwesomeIcon
                    className={style.socialIcons}
                    icon={faInstagram}
                  />
                </Link>
              </div>
              <div className={style.socialIconsOuter}>
                <Link to="https://www.linkedin.com/company/metroman-casting-yards/">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className={style.socialIcons}
                  />
                </Link>
              </div>
              <div className={style.socialIconsOuter}>
                <Link to="https://www.youtube.com/@MetromanCastingYards">
                  <FontAwesomeIcon
                    className={style.socialIcons}
                    icon={faYoutube}
                  />
                </Link>
              </div>
              <div className={style.socialIconsOuter}>
                <Link to="https://twitter.com/MetroManGS?t=fAD-AmMdgTKmyoPNak8xoQ&s=09">
                  <FontAwesomeIcon
                    className={style.socialIcons}
                    icon={faTwitter}
                  />
                </Link>
              </div>
            </div>
            <div className={style.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674.6913461245846!2d77.1001810093421!3d28.693661610030354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d058933d5108f%3A0xcc7189618a9e93e!2sMetroman%20Casting%20Yards!5e0!3m2!1sen!2sin!4v1709288973857!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Metroman Casting Yards Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
