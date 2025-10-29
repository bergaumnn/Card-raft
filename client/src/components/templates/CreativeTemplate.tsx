import { BusinessCardData } from "@shared/schema";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

interface CreativeTemplateProps {
  data: BusinessCardData;
  primaryColor: string;
  secondaryColor: string;
  textColor?: string;
}

export function CreativeTemplate({
  data,
  primaryColor,
  secondaryColor,
  textColor = "#000000",
}: CreativeTemplateProps) {
  return (
    <div className="w-[800px] h-[450px] rounded-md overflow-hidden shadow-lg relative bg-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        }}
      />

      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-10"
        style={{ backgroundColor: primaryColor }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: secondaryColor }}
      />

      <div className="relative z-10 h-full flex items-center px-12">
        <div className="flex items-center space-x-8">
          {data.avatar && (
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-lg opacity-30"
                style={{ backgroundColor: primaryColor }}
              />
              <img
                src={data.avatar}
                alt="Avatar"
                className="relative w-32 h-32 rounded-full object-cover"
                style={{ border: `4px solid ${primaryColor}` }}
              />
            </div>
          )}

          <div className="flex-1">
            <div className="mb-6">
              <h1 className="font-bold text-5xl mb-1 font-heading" style={{ color: primaryColor }}>
                {data.firstName} {data.lastName}
              </h1>
              <div
                className="h-1 w-24 mt-2 mb-3 rounded-full"
                style={{ backgroundColor: secondaryColor }}
              />
              <p className="text-2xl font-medium" style={{ color: textColor }}>
                {data.profession}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {data.phone && (
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                  <span className="text-sm font-medium leading-tight" style={{ color: textColor }}>
                    {data.phone}
                  </span>
                </div>
              )}
              {data.email && (
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                  <span className="text-sm font-medium leading-tight" style={{ color: textColor }}>
                    {data.email}
                  </span>
                </div>
              )}
              {data.website && (
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                  <span className="text-sm font-medium leading-tight" style={{ color: textColor }}>
                    {data.website}
                  </span>
                </div>
              )}
              {data.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                  <span className="text-sm font-medium leading-tight" style={{ color: textColor }}>
                    {data.address}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}