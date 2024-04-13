"use client";
import { Card, styled, Box, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <main>
      <Card
        sx={{
          textAlign: "center",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <h1 className=" font-bold text-2xl">PRIVACY POLICY</h1>
      </Card>
      <Container>
        <Card sx={{ height: "", padding: "20px" }}>
          <div>
            <p className=" text-center text-xl p-2">
              Welcome to Fastbricks&apos;s privacy policy (&quot;
              <span className="font-bold">
                Privacy Policy&quot; or &quot;Policy&quot;
              </span>
              ).
            </p>

            <p className="p-2">
              Fastbricks.in, represented by Fastbricks Pvt. Ltd. (&quot;we&quot;
              or &quot;us&quot;), is dedicated to safeguarding your privacy and
              ensuring the protection of your personal data. This Privacy Policy
              outlines our practices regarding the collection, usage, storage,
              and disclosure of personal information that you provide when
              accessing, using, or interacting with our website, Fastbricks.in
              (referred to as the &quot;Website&quot;).
            </p>

            <p className="p-2">
              By using Fastbricks.in, you acknowledge that you have read,
              understood, and agreed to the terms outlined in this Privacy
              Policy.
            </p>

            <p className="p-2 font-bold">1. COLLECTION OF PERSONAL DATA</p>

            <p className=" p-2">
              (a) Information We Collect: We collect various types of personal
              data to enhance your experience on Fastbricks.in. This includes
              but is not limited to:
            </p>

            <p className=" pl-10">
              <span className=" font-semibold"> Contact Information: </span>such
              as your name, email address, phone number, and mailing address.
              <br />{" "}
              <span className=" font-semibold">Account Information: </span>
              details used to create and manage your account on Fastbricks.in.{" "}
              <br />
              <span className=" font-semibold"> Transaction Details:</span>{" "}
              information related to purchases or transactions made on
              Fastbricks.in.
              <br />{" "}
              <span className=" font-semibold">
                Technical Information:
              </span>{" "}
              data regarding your device, browser, IP address, and usage
              patterns on Fastbricks.in. <br />
              <span className=" font-semibold">Other Information:</span> any
              additional data voluntarily provided by you during interactions
              with Fastbricks.in. <br />
            </p>

            <p className=" p-2">
              (b) Collection Methods: We may collect personal data directly from
              you, through your interactions with Fastbricks.in, or from
              third-party sources, where permitted by law.
            </p>

            <p className="p-2 font-bold">2. USE OF PERSONAL DATA</p>

            <p className=" p-2">
              We use the personal data collected for the following purposes:
            </p>

            <p className=" p-2">
              Providing Services: to facilitate and fulfill your requests for
              products or services offered on Fastbricks.in. Personalization: to
              tailor your experience on Fastbricks.in and customize content
              according to your preferences. Communication: to communicate with
              you regarding orders, inquiries, or updates related to
              Fastbricks.in. Analytics: to analyze usage patterns, trends, and
              performance of Fastbricks.in in order to improve our services.
              Legal Compliance: to comply with legal obligations and regulations
              applicable to Fastbricks.in operations.
            </p>
            <p className="p-2 font-bold">3. DISCLOSURE OF PERSONAL DATA</p>
            <p className=" p-2">
              We may disclose your personal data to third parties under the
              following circumstances:
            </p>

            <p className=" p-2">
              Service Providers: to third-party service providers engaged to
              assist in the operation of Fastbricks.in and provide services on
              our behalf. Legal Compliance: when required by law or to respond
              to legal requests, court orders, or government regulations.
              Business Transfers: in connection with any merger, acquisition, or
              sale of assets, personal data may be transferred to the acquiring
              entity.
            </p>
            <p className="p-2 font-bold">4. DATA SECURITY</p>
            <p className=" p-2">
              We implement appropriate security measures to safeguard your
              personal data from unauthorized access, disclosure, alteration, or
              destruction. However, no method of transmission over the internet
              or electronic storage is entirely secure, and we cannot guarantee
              absolute security.
            </p>

            <p className="font-bold p-2">5. USER RIGHTS</p>

            <p className=" p-2">
              You have the right to access, correct, or delete your personal
              data held by Fastbricks.in. You may also opt-out of receiving
              marketing communications from us at any time. To exercise your
              rights or for any inquiries regarding your personal data, please
              contact us at [insert contact information].
            </p>

            <p className="p-2 font-bold">6. POLICY UPDATES</p>

            <p className=" p-2">
              Fastbricks.in reserves the right to update this Privacy Policy
              periodically. Any changes will be effective immediately upon
              posting on Fastbricks.in. We encourage you to review this Privacy
              Policy regularly for updates.
            </p>

            <p className="p-2 font-bold">7. CONTACT US</p>

            <p className=" p-2">
              If you have any questions, concerns, or feedback regarding this
              Privacy Policy or the handling of your personal data by
              Fastbricks.in, please contact us at [insert contact information].
            </p>

            <p className=" p-2">
              By using Fastbricks.in, you consent to the collection, usage, and
              processing of your personal data as described in this Privacy
              Policy.
            </p>
          </div>
        </Card>
      </Container>
    </main>
  );
}
const Container = styled(Box)(({ theme }) => ({
  padding: "20px 200px",
  backgroundColor: "white",

  [theme.breakpoints.down("md")]: {
    padding: "20px 20px",
  },
}));
