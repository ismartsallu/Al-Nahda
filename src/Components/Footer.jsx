import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BranchesData from "../Components/BranchesData";

export default function Footer() {
  return (
    <footer className="bg-[#085733] text-gray-50">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Company Overview */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 leading-snug">
            AlNahda Walimran Alkhaleejia <br /> Company Holding
          </h2>

          <p className="text-sm leading-6">
            A Saudi-based multi-sector organization delivering integrated
            solutions across construction, infrastructure, maintenance,
            trading, and technology sectors.
          </p>

          <p className="mt-4 text-sm">
            We are committed to quality, compliance, and long-term strategic
            partnerships aligned with Saudi Vision 2030.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/" className="hover:text-white">Home</Link></li>
            <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/services" className="hover:text-white">Services</Link></li>
            <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/ourprojects" className="hover:text-white">Projects</Link></li>
            <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/ourteam" className="hover:text-white">Team</Link></li>
            <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Business Divisions */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Business Areas
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Construction & Infrastructure</li>
            <li>Maintenance & Facility Services</li>
            <li>Industrial & Technical Services</li>
            <li>Supply & General Trading</li>
            <li>IT & Technology Solutions</li>
            <li>Manpower & Workforce Solutions</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Head Office
          </h3>

          <p className="text-sm leading-6">
            {BranchesData.headOffice.address}
          </p>

          <p className="mt-3 text-sm">
            📞 {BranchesData.headOffice.phone}
          </p>

          <p className="mt-2 text-sm">
            📧 {BranchesData.headOffice.email}
          </p>

          <p className="mt-3 text-sm">
            🕒 {BranchesData.headOffice.workingHours.mondayToFriday}
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            <a href={BranchesData.headOffice.socialMedia.facebook} target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaFacebookF size={14} />
            </a>

            <a href={BranchesData.headOffice.socialMedia.twitter} target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaXTwitter size={14} />
            </a>

            <a href={BranchesData.headOffice.socialMedia.linkedin} target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaLinkedinIn size={14} />
            </a>

            <a href={BranchesData.headOffice.socialMedia.instagram} target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#857333] py-6 text-center text-sm text-gray-50">
        <p>
          © {new Date().getFullYear()} AlNahda Walimran Alkhaleejia Company Holding. All rights reserved.
        </p>

        <div className="mt-2 flex justify-center gap-6">
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>

    </footer>
  );
}