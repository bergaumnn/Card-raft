import { BusinessCardForm } from "../BusinessCardForm";

// Демонстраційний компонент, який показує, як працює BusinessCardForm
export default function BusinessCardFormExample() {
  return (
    // Контейнер з відступами та обмеженням ширини
    <div className="p-8 max-w-md">
      <BusinessCardForm
        // Функція, яка викликається при будь-якій зміні даних у формі
        onDataChange={(data) => {
          console.log("Form data changed:", data);
        }}
      />
    </div>
  );
}