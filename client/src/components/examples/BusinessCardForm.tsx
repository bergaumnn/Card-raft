import { BusinessCardForm } from "../BusinessCardForm";

export default function BusinessCardFormExample() {
  return (
    <div className="p-8 max-w-md">
      <BusinessCardForm
        onDataChange={(data) => {
          console.log("Form data changed:", data);
        }}
      />
    </div>
  );
}
