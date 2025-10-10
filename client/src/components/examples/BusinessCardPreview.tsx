import { BusinessCardPreview } from "../BusinessCardPreview";

export default function BusinessCardPreviewExample() {
  const mockData = {
    firstName: "Олена",
    lastName: "Коваленко",
    profession: "UX/UI Дизайнер",
    phone: "+380 95 123 45 67",
    email: "olena.kovalenko@example.com",
    website: "www.olena-design.com",
    address: "м. Київ, Україна",
  };

  return (
    <div className="p-8 bg-background">
      <BusinessCardPreview
        data={mockData}
        template="creative"
        primaryColor="#8b5cf6"
        secondaryColor="#ec4899"
        scale={0.8}
      />
    </div>
  );
}
