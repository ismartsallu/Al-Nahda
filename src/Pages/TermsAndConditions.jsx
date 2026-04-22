import { Link } from "react-router-dom";

export default function TermsAndConditions({ effectiveDate = "25th July, 2025", lastUpdated = (new Date()).toLocaleDateString() }) {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-12 px-4 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-8 md:px-10 bg-[#085733] text-white">
          <h1 className="text-2xl md:text-3xl font-bold">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm opacity-90">
            Effective Date: <span className="font-semibold">{effectiveDate}</span> · 
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
              to="/privacy-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-[#085733] hover:underline"
            >
              View Privacy Policy
            </Link>
          </div>

          <div className="text-sm text-gray-600">
            By using this platform, you agree to these terms.
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-10 md:py-10 space-y-6 text-gray-800 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing the website or engaging services of <strong>AlNahda Walimran Alkhaleejia Company Holding</strong>,
              you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
              If you do not agree, you must discontinue use immediately.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">2. Scope of Services</h2>
            <p>
              The Company provides integrated solutions across multiple sectors including but not limited to:
              infrastructure, construction, maintenance services, trading, IT solutions, and manpower services.
              Specific deliverables, pricing, and timelines are defined in individual contractual agreements.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">3. Use of Website</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Users must utilize this website for lawful and legitimate purposes only.</li>
              <li>Unauthorized copying, distribution, or modification of content is strictly prohibited.</li>
              <li>Any misuse of the platform may result in legal action.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">4. Client Obligations</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clients must provide accurate, complete, and up-to-date information.</li>
              <li>Clients are responsible for compliance with applicable local and international laws.</li>
              <li>Improper use of services or workforce shall remain the client’s responsibility.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">5. Commercial Terms & Payments</h2>
            <p>
              All commercial terms are governed by mutually agreed contracts. Payments must be made
              as per agreed schedules. Delays may result in service suspension or additional charges.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain strict confidentiality of all proprietary, financial,
              and operational information shared during engagements.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">7. Limitation of Liability</h2>
            <p>
              The Company shall not be liable for indirect, incidental, or consequential damages.
              While all services are delivered with due diligence, the Company does not assume
              liability for third-party actions or client-side operational decisions.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">8. Intellectual Property Rights</h2>
            <p>
              All materials, trademarks, branding, and digital assets are the intellectual property
              of AlNahda Walimran Alkhaleejia Company Holding and are protected under applicable laws.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">9. Third-Party Integrations</h2>
            <p>
              The website may include links or integrations with third-party platforms.
              The Company is not responsible for their content, security, or practices.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">10. Suspension & Termination</h2>
            <p>
              The Company reserves the right to suspend or terminate access or services in case of
              contractual breaches, non-payment, or unlawful usage.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">11. Governing Law</h2>
            <p>
              These Terms shall be governed in accordance with applicable laws of the Kingdom of Saudi Arabia
              and other jurisdictions where the Company operates, depending on the nature of engagement.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">12. Amendments</h2>
            <p>
              The Company reserves the right to update these Terms at any time. Continued use of the platform
              constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">13. Contact Information</h2>
            <p>For inquiries regarding these Terms, please contact:</p>

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

          {/* 14 */}
          <section>
            <h2 className="text-lg font-semibold mb-2">14. Legal Disclaimer</h2>
            <p>
              This document is provided for general informational purposes and does not constitute
              legal advice. For full compliance with regional and international regulations,
              legal consultation is recommended.
            </p>
          </section>

          {/* Agreement */}
          <div className="pt-4 border-t flex items-center justify-between">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">
                I agree to the Terms & Conditions
              </span>
            </label>
          </div>

        </div>
      </div>
    </div>
  );
}