import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-gray-600 mb-6">Last updated: March 19, 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and enable certain features to function properly.
        </p>
        <p className="mb-4">
          Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
        <p className="mb-4">We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Essential cookies: Required for the website to function properly</li>
          <li>Performance cookies: Help us understand how visitors interact with our website</li>
          <li>Functionality cookies: Remember your preferences and settings</li>
          <li>Third-party cookies: Used by our service providers (WhatsApp, social media platforms)</li>
          <li>Analytics cookies: Help us analyze website traffic and usage patterns</li>
          <li>Security cookies: Protect our website and users from security threats</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable core functionality such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Form submission and validation</li>
            <li>Navigation and routing</li>
            <li>Security features</li>
            <li>User authentication</li>
            <li>Session management</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
          <p className="mb-4">
            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Measure website performance</li>
            <li>Track page load times</li>
            <li>Monitor error rates</li>
            <li>Analyze user behavior patterns</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
          <p className="mb-4">
            These cookies enable enhanced functionality and personalization, such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Remembering your form inputs</li>
            <li>Storing your preferences</li>
            <li>Enabling animations and transitions</li>
            <li>Maintaining your language preferences</li>
            <li>Customizing your experience</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Third-Party Cookies</h3>
          <p className="mb-4">
            We use cookies from third-party services such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>WhatsApp for communication</li>
            <li>Social media platforms (Facebook, LinkedIn, Twitter, Instagram)</li>
            <li>Analytics services</li>
            <li>Payment processors</li>
            <li>Content delivery networks</li>
          </ul>
          <p className="mb-4">
            These third-party cookies may collect information about you and your online activities across different websites.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
        <p className="mb-4">
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.
        </p>
        <p className="mb-4">
          To manage cookies in your browser:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
          <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
          <li>Safari: Preferences → Privacy → Cookies and website data</li>
          <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookie Duration</h2>
        <p className="mb-4">
          The length of time a cookie remains on your computer or mobile device depends on whether it is a "persistent" or "session" cookie. Session cookies last only until you stop browsing, and persistent cookies last until they expire or are deleted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
        <p className="mb-4">For any questions about our use of cookies, please contact us at:</p>
        <p className="text-gray-600">Email: info@occoto.com</p>
      </section>
    </div>
  );
} 