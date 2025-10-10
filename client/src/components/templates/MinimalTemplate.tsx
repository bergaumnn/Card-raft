import { BusinessCardData } from "@shared/schema";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

interface MinimalTemplateProps {
  data: BusinessCardData;
  primaryColor: string;
  secondaryColor: string;
}

export function MinimalTemplate({ data, primaryColor, secondaryColor }: MinimalTemplateProps) {
  return (
    <div className="w-[800px] h-[450px] bg-white rounded-md overflow-hidden shadow-lg relative">
      <div className="h-full flex flex-col justify-between p-12">
        {/* Top section */}
        <div className="flex items-start justify-between">
          <div>
            <h1
              className="font-light text-4xl mb-1 tracking-wide font-heading"
              style={{ color: primaryColor }}
            >
              {data.firstName} {data.lastName}
            </h1>
            <div className="h-px w-16 my-3" style={{ backgroundColor: primaryColor }} />
            <p className="text-lg text-gray-600 font-light">{data.profession}</p>
          </div>
          
          {data.avatar && (
            <img
              src={data.avatar}
              alt="Avatar"
              className="w-20 h-20 rounded-sm object-cover"
              style={{ border: `1px solid ${primaryColor}` }}
            />
          )}
        </div>

        {/* Bottom section */}
        <div className="space-y-2">
          {data.phone && (
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm text-gray-600 font-light">{data.phone}</span>
            </div>
          )}
          {data.email && (
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm text-gray-600 font-light">{data.email}</span>
            </div>
          )}
          {data.website && (
            <div className="flex items-center space-x-3">
              <Globe className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm text-gray-600 font-light">{data.website}</span>
            </div>
          )}
          {data.address && (
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm text-gray-600 font-light">{data.address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
