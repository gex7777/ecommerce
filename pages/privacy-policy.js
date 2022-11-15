import React from "react";
import { BUSINESS_ADDRESS } from "../constants";
import { BUSINESS_EMAIL } from "./../constants";

const Ppolicy = () => {
  return (
    <div className="container mx-auto my-7">
      <p className="font-bold text-lg">
        Jancy Teachers Food Products Privacy Policy
      </p>

      <p>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from
        jancyteachersfoodproducts.com (the &ldquo;Site&rdquo;).
      </p>

      <p className="font-bold text-xs"> PERSONAL INFORMATION WE COLLECT</p>

      <p>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as &ldquo;Device Information.&rdquo;
      </p>

      <p>
        When we talk about &ldquo;Personal Information&rdquo; in this Privacy
        Policy, we are talking both about Device Information and Order
        Information.
      </p>

      <p className="font-bold text-xs">
        HOW DO WE USE YOUR PERSONAL INFORMATION?
      </p>

      <p>
        We use the Order Information that we collect generally to fulfill any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices
        and/or order confirmations). Additionally, we use this Order Information
        to: Communicate with you; Screen our orders for potential risk or fraud;
        and When in line with the preferences you have shared with us, provide
        you with information or advertising relating to our products or
        services. We use the Device Information that we collect to help us
        screen for potential risk and fraud (in particular, your IP address),
        and more generally to improve and optimize our Site (for example, by
        generating analytics about how our customers browse and interact with
        the Site, and to assess the success of our marketing and advertising
        campaigns).
      </p>

      <p>
        Finally, we may also share your Personal Information to comply with
        applicable laws and regulations, to respond to a subpoena, search
        warrant or other lawful request for information we receive, or to
        otherwise protect our rights.
      </p>
      <p className="font-bold text-xs"> DATA RETENTION</p>
      <p>
        When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
      </p>

      <p>
        CHANGES We may update this privacy policy from time to time in order to
        reflect, for example, changes to our practices or for other operational,
        legal or regulatory reasons. CONTACT US For more information about our
        privacy practices, if you have questions, or if you would like to make a
        complaint, please contact us by e-mail at
        {BUSINESS_EMAIL} or by mail using the details provided below:
      </p>

      <p> {BUSINESS_ADDRESS}</p>
    </div>
  );
};

export default Ppolicy;
