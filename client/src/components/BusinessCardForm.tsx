import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { businessCardSchema, InsertBusinessCard } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/PhoneInput";
import { Upload } from "lucide-react";
import { useRef } from "react";

interface BusinessCardFormProps {
  onDataChange: (data: InsertBusinessCard & { avatar?: string }) => void;
  initialData?: InsertBusinessCard & { avatar?: string };
}

export function BusinessCardForm({ onDataChange, initialData }: BusinessCardFormProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<InsertBusinessCard & { avatar?: string }>({
    resolver: zodResolver(businessCardSchema),
    defaultValues: initialData || {
      firstName: "",
      lastName: "",
      profession: "",
      phone: "",
      email: "",
      website: "",
      address: "",
      avatar: "",
    },
  });

  const watchedValues = form.watch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        form.setValue("avatar", base64);
        onDataChange({ ...watchedValues, avatar: base64 });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = () => {
    const values = form.getValues();
    onDataChange(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.firstName")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("form.placeholders.firstName")}
                    data-testid="input-firstName"
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.lastName")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("form.placeholders.lastName")}
                    data-testid="input-lastName"
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.profession")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t("form.placeholders.profession")}
                  data-testid="input-profession"
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.phone")}</FormLabel>
              <FormControl>
                <PhoneInput
                  value={field.value || ""}
                  onChange={(value) => {
                    field.onChange(value);
                    handleChange();
                  }}
                  placeholder={t("form.placeholders.phone")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.email")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder={t("form.placeholders.email")}
                  data-testid="input-email"
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.website")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t("form.placeholders.website")}
                  data-testid="input-website"
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.address")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t("form.placeholders.address")}
                  data-testid="input-address"
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <label className="text-sm font-medium">{t("form.image")}</label>
          <div
            className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover-elevate transition-all"
            onClick={() => fileInputRef.current?.click()}
            data-testid="upload-zone"
          >
            {watchedValues.avatar ? (
              <div className="space-y-2">
                <img
                  src={watchedValues.avatar}
                  alt="Preview"
                  className="w-24 h-24 mx-auto rounded-md object-cover"
                />
                <p className="text-sm text-muted-foreground">{t("form.upload.change")}</p>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {t("form.upload.click")}
                </p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </form>
    </Form>
  );
}
