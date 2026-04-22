import { Link } from "react-router-dom";

export default function PrivacyPolicy({
  effectiveDate = "25th July, 2025",
  lastUpdated = new Date().toLocaleDateString(),
}) {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-12 px-4 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-8 md:px-10 bg-[#857333] text-white">
          <h1 className="text-2xl md:text-3xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm opacity-90">
            Effective Date: <span className="font-semibold">{effectiveDate}</span>
            Last Updated: <span className="font-semibold">{lastUpdated}</span>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm"
            >
              Print
            </button>

            <Link
              to="/terms"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-[#857333] hover:underline"
            >
              View Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-10 md:py-10 space-y-6 text-gray-800 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
            <p>
              <strong>AlNahda Walimran Alkhaleejia Company Holding</strong> ("the Company") is committed to protecting
              your personal data and ensuring transparency in how information is collected, used, and safeguarded
              across all business operations and digital platforms.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Data:</strong> Name, email, phone number, and contact details.</li>
              <li><strong>Business Information:</strong> Company name, designation, and professional data.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device details, and analytics data.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">3. Purpose of Data Usage</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To deliver services across infrastructure, construction, IT, trading, and manpower sectors.</li>
              <li>To communicate with clients, partners, and stakeholders.</li>
              <li>To process inquiries, service requests, and contracts.</li>
              <li>To comply with regulatory and legal obligations.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">4. Data Sharing & Disclosure</h2>
            <p>
              The Company does not sell personal data. Information may be shared with trusted partners,
              affiliated entities, or authorities where required for operational, contractual, or legal purposes.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">5. Data Security</h2>
            <p>
              We implement industry-standard security measures including administrative, technical, and physical
              safeguards to protect your data. However, no digital system guarantees absolute security.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">6. Data Subject Rights</h2>
            <p>
              Depending on applicable laws, users may request access, correction, deletion, or restriction of their
              personal data. Requests can be made through official communication channels.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">7. Cookies & Tracking Technologies</h2>
            <p>
              Our website may use cookies and tracking tools to enhance user experience and analyze performance.
              Users can manage cookie preferences through browser settings.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">8. Third-Party Services</h2>
            <p>
              The Company may integrate with third-party platforms. We are not responsible for their privacy
              practices, and users are encouraged to review their respective policies.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">9. Cross-Border Data Transfers</h2>
            <p>
              As a global organization, data may be processed in multiple jurisdictions including the Kingdom of
              Saudi Arabia and other countries where the Company operates.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">10. Policy Updates</h2>
            <p>
              This Privacy Policy may be updated periodically. Continued use of the platform constitutes acceptance
              of the revised policy.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">11. Contact Information</h2>
            <div className="mt-3 bg-gray-50 p-4 rounded-lg border">
              <p className="text-sm">
                <strong>Company:</strong> AlNahda Walimran Alkhaleejia Company Holding
              </p>
              <p className="text-sm">
                <strong>Email:</strong> info@alnahdas.com
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> +966 530 709 823
              </p>
            </div>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">12. Legal Disclaimer</h2>
            <p>
              This policy is provided for general informational purposes and does not constitute legal advice.
              For full regulatory compliance (including GDPR and regional data protection laws), consultation
              with a qualified legal advisor is recommended.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}