import { BusinessCardData } from "@shared/schema";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

interface ClassicTemplateProps {
  data: BusinessCardData;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  forExport?: boolean; // прапорець для рендеру в PNG
}

  export function ClassicTemplate({
    data,
    primaryColor,
    secondaryColor,
    textColor,
    forExport = false, // дефолт
  }: ClassicTemplateProps) {
    const iconStyle = {
      color: primaryColor,
      transform: forExport ? "translateY(1px)" : "none", // зміщуємо іконки лише при експорті
    };

  return (
    <div
      className="w-[800px] h-[450px] rounded-md overflow-hidden shadow-lg relative font-serif"
      style={{ backgroundColor: secondaryColor }}
    >
      {/* Верхня декоративна лінія */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="flex h-full">
        {/* Ліва частина з ім'ям та професією */}
        <div className="flex-1 flex flex-col justify-center px-12">
          {data.avatar && (
            <img
              src={data.avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover mb-6"
              style={{ border: `3px solid ${primaryColor}` }}
            />
          )}
          <h1 className="font-bold text-5xl mb-2" style={{ color: primaryColor }}>
            {data.firstName}
          </h1>
          <h2 className="font-bold text-5xl mb-4" style={{ color: primaryColor }}>
            {data.lastName}
          </h2>
          <p className="text-2xl font-sans" style={{ color: textColor }}>
            {data.profession}
          </p>
        </div>

        <div className="w-px my-12" style={{ backgroundColor: primaryColor, opacity: 0.3 }} />

        {/* Права частина з контактами */}
        <div className="w-80 flex flex-col justify-center px-8 space-y-4">
          {data.phone && (
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0" style={iconStyle} />
              <span className="text-base font-sans" style={{ color: textColor }}>
                {data.phone}
              </span>
            </div>
          )}

          {data.email && (
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0" style={iconStyle} />
              <span className="text-base font-sans break-all" style={{ color: textColor }}>
                {data.email}
              </span>
            </div>
          )}

          {data.website && (
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 flex-shrink-0" style={iconStyle} />
              <span className="text-base font-sans" style={{ color: textColor }}>
                {data.website}
              </span>
            </div>
          )}

          {data.address && (
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 flex-shrink-0" style={iconStyle} />
              <span className="text-base font-sans" style={{ color: textColor }}>
                {data.address}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}