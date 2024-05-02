import SingleBanner from "../../components/singleBanner/SingleBanner";
import style from "./PrivacyPolicy.module.css";
import Copywrite from "../../components/copyWrite/Copywrite";

export default function PrivacyPolicy() {
  return (
    <>
      <div className={style.background}>
        <SingleBanner />
        <div className={`container`}>
          <h1 className={style.heading}>PRIVACY POLICY</h1>
          <h3 className={style.policyPurpose}>PURPOSE OF PRIVACY POLICY</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              This Privacy Policy describes how information is collected, used,
              and disclosed by [MetroMan Casting Yards] when we visit or use our
              website. By accessing or using our website, you agree to the terms
              outlined in this Privacy Policy.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Personal Information</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We may collect personal information such as names, email
              addresses, and phone numbers when voluntarily provided by users
              through forms or contact requests.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Non-Personal Information</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We may automatically collect non-personal information such as IP
              addresses, browser types, and device information when you interact
              with our website. This information helps us improve the user
              experience and track website analytics.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Cookies</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We use cookies to enhance user experience and collect data on
              website usage. You can control cookie preferences through your
              browser settings.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Communication</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We may use your personal information to respond to inquiries,
              provide information, and communicate with you about our services.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Analytics</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              Non-personal information is used for website analytics to
              understand user behavior, improve our content, and enhance the
              overall user experience.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Marketing</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              With your consent, we may use your contact information to send
              promotional materials, updates, or newsletters related to our
              services.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Legal Compliance</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We may disclose your information in response to a legal request,
              such as a court order or government demand.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Business Transfers</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              In the event of a merger, acquisition, or sale of all or a portion
              of our assets, your information may be transferred as part of the
              transaction.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Opt-Out</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              You can opt-out of receiving marketing communications by following
              the unsubscribe instructions in the emails we send.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Communication</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We may use your personal information to respond to inquiries,
              provide information, and communicate with you about our services.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Cookie Preferences</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              You can manage cookie preferences through your browser settings.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Security</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We take reasonable measures to protect the confidentiality and
              security of your information, but no method of transmission over
              the internet or electronic storage is 100% secure.
            </p>
          </div>
          <h3 className={style.policyPurpose}>
            Changes to this Privacy Policy
          </h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              We reserve the right to update or change this Privacy Policy at
              any time. Changes will be effective immediately upon posting. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </div>
          <h3 className={style.policyPurpose}>Contact Us</h3>
          <div className={style.privacyContent}>
            <p className={style.innerContent}>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at metromancastingyards@gmail.com.
            </p>
          </div>
        </div>
      </div>
      <Copywrite />
    </>
  );
}
