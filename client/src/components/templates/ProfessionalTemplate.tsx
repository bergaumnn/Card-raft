import { BusinessCardData } from "@shared/schema"; // Імпорт типу даних візитки
import { Phone, Mail, Globe, MapPin } from "lucide-react"; // Іконки для контактів

// Пропси для шаблону Professional
interface ProfessionalTemplateProps {
  data: BusinessCardData; // Дані для заповнення візитки
  primaryColor: string; // Основний колір шаблону
  secondaryColor: string; // Вторинний колір (фон)
  textColor: string; // Колір тексту правої панелі
}

export function ProfessionalTemplate({ data, primaryColor, secondaryColor, textColor }: ProfessionalTemplateProps) {
  return (
    <div
      className="w-[800px] h-[450px] rounded-md overflow-hidden shadow-lg relative"
      style={{ backgroundColor: secondaryColor }} // Фон усієї візитки
    >
      {/* Ліва кольорова панель */}
      <div
        className="absolute top-0 left-0 bottom-0 w-2/5"
        style={{ backgroundColor: primaryColor }} // Ліва панель завжди основного кольору
      >
        <div className="h-full flex flex-col justify-center items-center text-white px-8">
          {/* Аватар користувача */}
          {data.avatar && (
            <img
              src={data.avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-sm object-cover mb-6 shadow-lg"
              style={{ border: "3px solid white" }} // Біла рамка
            />
          )}
          {/* Ім’я та прізвище */}
          <h1 className="font-bold text-3xl text-center mb-2 font-heading">{data.firstName}</h1>
          <h2 className="font-bold text-3xl text-center mb-4 font-heading">{data.lastName}</h2>
          <div className="h-px w-20 bg-white/50 my-2" /> {/* Роздільна лінія */}
          <p className="text-lg text-center mt-2 font-medium opacity-90">{data.profession}</p> {/* Посада */}
        </div>
      </div>

      {/* Права біла панель */}
      <div
        className="absolute top-0 right-0 bottom-0 w-3/5"
        style={{ backgroundColor: secondaryColor }} // Завжди білий фон
      >
        <div className="h-full flex flex-col justify-center px-12 space-y-5">
          {/* Контактна інформація */}
          {data.phone && (
            <div className="flex items-center space-x-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }} // Світлий фон іконки
              >
                <Phone className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span className="text-base" style={{ color: textColor }}>{data.phone}</span>
            </div>
          )}
          {data.email && (
            <div className="flex items-center space-x-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <Mail className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span className="text-base break-all" style={{ color: textColor }}>{data.email}</span>
            </div>
          )}
          {data.website && (
            <div className="flex items-center space-x-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <Globe className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span className="text-base" style={{ color: textColor }}>{data.website}</span>
            </div>
          )}
          {data.address && (
            <div className="flex items-center space-x-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
              </div>
              <span className="text-base" style={{ color: textColor }}>{data.address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}