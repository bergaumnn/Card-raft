import { BusinessCardData } from "@shared/schema";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

interface ProfessionalTemplateProps {
  data: BusinessCardData;
  primaryColor: string;
  secondaryColor: string;
}

export function ProfessionalTemplate({ data, primaryColor, secondaryColor }: ProfessionalTemplateProps) {
  return (
    <div className="w-[800px] h-[450px] rounded-md overflow-hidden shadow-lg relative bg-white">
      <div
        className="absolute top-0 left-0 bottom-0 w-2/5"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="h-full flex flex-col justify-center items-center text-white px-8">
          {data.avatar && (
            <img
              src={data.avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-sm object-cover mb-6 shadow-lg"
              style={{ border: "3px solid white" }}
            />
          )}
          <h1 className="font-bold text-3xl text-center mb-2 font-heading">
            {data.firstName}
          </h1>
          <h2 className="font-bold text-3xl text-center mb-4 font-heading">
            {data.lastName}
          </h2>
          <div className="h-px w-20 bg-white/50 my-2" />
          <p className="text-lg text-center mt-2 font-medium opacity-90">
            {data.profession}
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 bottom-0 w-3/5 bg-white">
        <div className="h-full flex flex-col justify-center px-12 space-y-5">
          {data.phone && (
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <Phone className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span className="text-base text-gray-700 leading-tight pt-2">{data.phone}</span>
            </div>
          )}
          {data.email && (
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <Mail className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span className="text-base text-gray-700 break-all leading-tight pt-2">{data.email}</span>
            </div>
          )}
          {data.website && (
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <Globe className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span className="text-base text-gray-700 leading-tight pt-2">{data.website}</span>
            </div>
          )}
          {data.address && (
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span className="text-base text-gray-700 leading-tight pt-2">{data.address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
