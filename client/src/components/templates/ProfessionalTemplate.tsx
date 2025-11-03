import { BusinessCardData } from "@shared/schema";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

interface ProfessionalTemplateProps {
  data: BusinessCardData;
  primaryColor: string;
  secondaryColor: string;
  textColor?: string;
}

export function ProfessionalTemplate({
  data,
  primaryColor,
  secondaryColor,
  textColor = "#000000",
}: ProfessionalTemplateProps) {
  return (
    <div
      className="w-[800px] h-[450px] rounded-md overflow-hidden shadow-lg relative"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Ліва частина з фоном основного кольору */}
      <div
        className="absolute top-0 left-0 bottom-0 w-2/5"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="h-full flex flex-col justify-center items-center px-8 text-center">
          {data.avatar && (
            <img
              src={data.avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-sm object-cover mb-6 shadow-lg"
              style={{ border: `3px solid ${secondaryColor}` }}
            />
          )}
          <h1
            className="font-bold text-3xl mb-2 font-heading"
            style={{ color: secondaryColor }}
          >
            {data.firstName}
          </h1>
          <h2
            className="font-bold text-3xl mb-4 font-heading"
            style={{ color: secondaryColor }}
          >
            {data.lastName}
          </h2>
          <div
            className="h-px w-20 my-2"
            style={{ backgroundColor: secondaryColor }}
          />
          <p
            className="text-lg mt-2 font-medium opacity-90"
            style={{ color: secondaryColor }}
          >
            {data.profession}
          </p>
        </div>
      </div>

      {/* Права частина з фоном secondaryColor */}
      <div
        className="absolute top-0 right-0 bottom-0 w-3/5"
        style={{ backgroundColor: secondaryColor }}
      >
        <div className="h-full flex flex-col justify-center px-12 space-y-5">
          {data.phone && (
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${primaryColor}15`,
                }}
              >
                <Phone className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span
                className="text-base leading-tight pt-2"
                style={{ color: textColor }}
              >
                {data.phone}
              </span>
            </div>
          )}

          {data.email && (
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${primaryColor}15`,
                }}
              >
                <Mail className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span
                className="text-base break-all leading-tight pt-2"
                style={{ color: textColor }}
              >
                {data.email}
              </span>
            </div>
          )}

          {data.website && (
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${primaryColor}15`,
                }}
              >
                <Globe className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span
                className="text-base leading-tight pt-2"
                style={{ color: textColor }}
              >
                {data.website}
              </span>
            </div>
          )}

          {data.address && (
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${primaryColor}15`,
                }}
              >
                <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span
                className="text-base leading-tight pt-2"
                style={{ color: textColor }}
              >
                {data.address}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}