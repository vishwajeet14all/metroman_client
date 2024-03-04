import React from "react";
import style from "./Termsandcondition.module.css";
export default function Termsandcondition() {
  return (
    <div>
      <div className={`${style.outerImageDiv}`}>
        <img
          src="https://i.ibb.co/yq0h9h2/closeup-hands.jpg"
          alt="Banner"
          className={style.image}
        />
      </div>
      <div className={style.background}>
        <div className={`container`}>
          <h1 className={style.heading}>Terms and Conditions</h1>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              These Terms and Conditions govern your use of MetroMan Casting
              Yards Website By accessing or using the Website, you agree to
              comply with these Terms and Conditions.
            </p>
          </div>

          <h3 className={style.policyPurpose}>Use of Website</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              You must be at least 18 years old to use the Website. You agree to
              use the Website for lawful purposes only and not to violate any
              applicable laws or regulations.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Intellectual Property:</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              The content, design, and graphics on the Website are owned or
              licensed by us and are protected by intellectual property laws.
              You may not reproduce, distribute, or modify any content from the
              Website without our prior written consent.
            </p>
          </div>
          <h3 className={style.policyPurpose}>User Content</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              You may submit content to the Website, such as comments or
              reviews. By submitting content, you grant us a non-exclusive,
              royalty-free, perpetual, and worldwide license to use, reproduce,
              and distribute your content.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Disclaimer of Warranties</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              The information provided on the Website is for general
              informational purposes only. We make no representations or
              warranties of any kind, express or implied, about the accuracy,
              reliability, or completeness of the information. We do not
              guarantee that the Website will be error-free, uninterrupted, or
              secure. We may use your personal information to respond to
              inquiries, provide information, and communicate with you about our
              services.
            </p>
          </div>
          <h3 className={style.policyPurpose}> Limitation of Liability</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We will not be liable for any direct, indirect, incidental,
              special, or consequential damages arising out of or in any way
              connected with your use of the Website or reliance on the
              information provided.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Links to Third-Party Websites</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              The Website may contain links to third-party websites for your
              convenience. We do not endorse or control these websites and are
              not responsible for their content or privacy practices.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Modification of Terms</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We reserve the right to modify these Terms and Conditions at any
              time without prior notice. Changes will be effective immediately
              upon posting on the Website. Your continued use of the Website
              after the posting of changes constitutes your acceptance of the
              revised terms.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Termination</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We reserve the right to terminate or suspend your access to the
              Website at any time without prior notice for any reason, including
              if we believe that you have violated these Terms and Conditions.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Governing Law</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of India. Any dispute arising out of or
              relating to these Terms and Conditions will be subject to the
              exclusive jurisdiction of the courts of India.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Contact Us</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at metromancastingyards@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
