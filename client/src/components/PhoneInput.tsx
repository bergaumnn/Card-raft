import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface CountryCode {
  code: string;
  country: string;
  flag: string;
  maxDigits: number;
}

const countryCodes: CountryCode[] = [
  { code: "+380", country: "UA", flag: "🇺🇦", maxDigits: 9 },
  { code: "+1", country: "US", flag: "🇺🇸", maxDigits: 10 },
  { code: "+44", country: "GB", flag: "🇬🇧", maxDigits: 10 },
  { code: "+49", country: "DE", flag: "🇩🇪", maxDigits: 11 },
  { code: "+33", country: "FR", flag: "🇫🇷", maxDigits: 9 },
  { code: "+39", country: "IT", flag: "🇮🇹", maxDigits: 10 },
  { code: "+34", country: "ES", flag: "🇪🇸", maxDigits: 9 },
  { code: "+48", country: "PL", flag: "🇵🇱", maxDigits: 9 },
];

export function PhoneInput({ value, onChange, placeholder }: PhoneInputProps) {
  const { i18n } = useTranslation();

  const defaultCountry = i18n.language === "uk" ? "+380" : "+1";

  const getCountryCodeFromValue = (val: string): string => {
    const matched = countryCodes.find((c) => val.startsWith(c.code));
    return matched ? matched.code : defaultCountry;
  };

  const getNumberFromValue = (val: string): string => {
    const code = getCountryCodeFromValue(val);
    return val.replace(code, "").trim();
  };

  const [countryCode, setCountryCode] = useState(getCountryCodeFromValue(value || defaultCountry));
  const [phoneNumber, setPhoneNumber] = useState(getNumberFromValue(value));

  const selectedCountry = countryCodes.find((c) => c.code === countryCode);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    const maxDigits = selectedCountry?.maxDigits || 15;
    const limitedDigits = digits.slice(0, maxDigits);
    setPhoneNumber(limitedDigits);
    onChange(`${countryCode} ${limitedDigits}`);
  };

  const handleCountryChange = (newCode: string) => {
    setCountryCode(newCode);
    onChange(`${newCode} ${phoneNumber}`);
  };

  return (
    <div className="flex gap-2">
      <Select value={countryCode} onValueChange={handleCountryChange}>
        <SelectTrigger className="w-[110px]" data-testid="select-country-code">
          <SelectValue>
            <span className="flex items-center gap-2">
              {selectedCountry?.flag} {countryCode}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg">
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code} className="flex items-center gap-2">
              <span>{country.flag}</span>
              <span>{country.code}</span>
              <span className="text-gray-500 dark:text-gray-400">({country.country})</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={phoneNumber}
        onChange={handleNumberChange}
        placeholder={placeholder || "XX XXX XX XX"}
        className="flex-1"
        data-testid="input-phone-number"
      />
    </div>
  );
}