import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BranchesData from "../Components/BranchesData.js";

export default function Topbar() {
  return (
    <div className="w-full bg-[#857333] text-white text-xs md:text-sm">
      
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* Phone (Priority) */}
          <a
            href={`tel:${BranchesData.headOffice.phone}`}
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <Phone size={14} />
            <span className="hidden md:inline">
              {BranchesData.headOffice.phone}
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${BranchesData.headOffice.email}`}
            className="hidden sm:flex items-center gap-2 hover:text-gray-200 transition"
          >
            <Mail size={14} />
            <span>{BranchesData.headOffice.email}</span>
          </a>

          {/* Address */}
          <a
            href="https://maps.app.goo.gl/uxDos1krkwqs8u4E9"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 hover:text-gray-200 transition"
          >
            <MapPin size={14} />
            <span>{BranchesData.headOffice.address}</span>
          </a>

        </div>

        {/* Right: Social + CTA */}
        <div className="flex items-center gap-3">

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={BranchesData.headOffice.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <FaFacebookF size={12} />
            </a>

            <a
              href={BranchesData.headOffice.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <FaXTwitter size={12} />
            </a>

            <a
              href={BranchesData.headOffice.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <FaLinkedinIn size={12} />
            </a>

            <a
              href={BranchesData.headOffice.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <FaInstagram size={12} />
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-4 w-px bg-white/40"></div>

          {/* CTA */}
          <a
            href={`tel:${BranchesData.headOffice.phone}`}
            className="hidden md:inline-block bg-white text-[#085733] px-3 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Call Now
          </a>

        </div>
      </div>
    </div>
  );
}