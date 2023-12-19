import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Elementaru",
  description:
    "This website focuses on preserving your privacy and using your data responsibly.",
};

function PrivacyPolicy() {
  return (
    <main className="container min-h-adjusted max-w-screen-lg my-12">
      <h1>Privacy Policy</h1>

      <p>Last Updated: 2023-12-19</p>

      <p>
        This Privacy Policy explains how Elementaru MB (we) collect, use,
        disclose, and protect your information when you use our website{" "}
        <a href="https://elementaru.com">elementaru.com</a> (the
        &quot;Service&quot;). By accessing or using the Service, you agree to
        the terms of this Privacy Policy.
      </p>

      <h2>Information We Collect</h2>

      <h3>Personal Information</h3>

      <p>
        We may collect personal information that you provide to us, such as:
      </p>

      <ul className="styled">
        <li>
          <strong>Contact Information:</strong> Name, email address, phone
          number, or other similar information.
        </li>
        <li>
          <strong>Project Information:</strong> Project budget, title,
          description, or other similar information.
        </li>
      </ul>

      <h3>Automatically Collected Information</h3>

      <p>
        We may automatically collect data about your device and usage of the
        Service, including:
      </p>

      <ul className="styled">
        <li>
          <strong>Log Data:</strong> IP address, browser type, pages visited,
          and access times.
        </li>
        <li>
          <strong>Device Information:</strong> Device type, operating system,
          and device identifiers.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>

      <p>We use your information for various purposes, including:</p>

      <ul className="styled">
        <li>Providing and maintaining the Service</li>
        <li>
          Processing transactions and delivering products or services you
          request
        </li>
        <li>Improving and personalizing the Service</li>
        <li>Analyzing usage patterns and trends</li>
        <li>Communicating with you, including responding to inquiries</li>
        <li>Complying with legal obligations</li>
      </ul>

      <h2>Information Sharing and Disclosure</h2>

      <p>
        We may share your information with third parties in the following
        situations:
      </p>

      <ul className="styled">
        <li>With your consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect and defend our rights and property</li>
      </ul>

      <h2>Your Choices</h2>

      <p>You have the right to:</p>

      <ul className="styled">
        <li>
          Access, update, or delete your personally identifiable information.
        </li>
        <li>Opt-out of receiving marketing communications.</li>
      </ul>

      <h2>Security</h2>

      <p>
        All reasonable security measures are used to protect your information
        from unauthorized access and disclosure. However, no data transmission
        over the internet is completely secure, and we cannot guarantee the
        security of your information.
      </p>

      <h2>Changes</h2>

      <p>
        Any changes to this Privacy Policy will be posted on this page with the
        updated date. Your continued use of the Service after such changes
        constitutes your acceptance of the updated Privacy Policy.
      </p>

      <h2>Contact</h2>

      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a href="mailto:laurynas@elementaru.com">laurynas@elementaru.com</a>.
      </p>
    </main>
  );
}

export default PrivacyPolicy;
