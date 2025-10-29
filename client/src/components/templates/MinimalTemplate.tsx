import { BusinessCardData } from "@shared/schema";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

// Визначаємо тип пропсів для шаблону
interface MinimalTemplateProps {
  data: BusinessCardData;   // Дані візитки 
  primaryColor: string;     // Основний колір елементів
  textColor: string;        // Колір тексту
}

// Компонент мінімалістичного шаблону
export function MinimalTemplate({ data, primaryColor, textColor }: MinimalTemplateProps) {
  const secondaryColor = "#ffffff"; // Фон завжди білий

  return (
    // Головний контейнер візитки
    <div
      className="w-[800px] h-[450px] rounded-md overflow-hidden shadow-lg relative"
      style={{ backgroundColor: secondaryColor }}
    >
      {/* Основний вміст з внутрішніми відступами */}
      <div className="h-full flex flex-col justify-between p-12">

        {/* Верхня частина: ім’я, професія, аватар */}
        <div className="flex items-start justify-between">
          <div>
            {/* Ім’я та прізвище */}
            <h1
              className="font-light text-4xl mb-1 tracking-wide font-heading"
              style={{ color: primaryColor }}
            >
              {data.firstName} {data.lastName}
            </h1>

            {/* Декоративна горизонтальна лінія */}
            <div className="h-px w-16 my-3" style={{ backgroundColor: primaryColor }} />

            {/* Професія */}
            <p
              className="text-lg font-light"
              style={{ color: textColor }}
            >
              {data.profession}
            </p>
          </div>

          {/* Аватар */}
          {data.avatar && (
            <img
              src={data.avatar}
              alt="Avatar"
              className="w-20 h-20 rounded-sm object-cover"
              style={{ border: `1px solid ${primaryColor}` }}
            />
          )}
        </div>

        {/* Нижня частина: контактна інформація */}
        <div className="space-y-2">
          {/* Телефон */}
          {data.phone && (
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm font-light" style={{ color: textColor }}>
                {data.phone}
              </span>
            </div>
          )}

          {/* Email */}
          {data.email && (
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm font-light break-all" style={{ color: textColor }}>
                {data.email}
              </span>
            </div>
          )}

          {/* Вебсайт */}
          {data.website && (
            <div className="flex items-center space-x-3">
              <Globe className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm font-light" style={{ color: textColor }}>
                {data.website}
              </span>
            </div>
          )}

          {/* Адреса */}
          {data.address && (
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm font-light" style={{ color: textColor }}>
                {data.address}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}