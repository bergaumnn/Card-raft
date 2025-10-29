import { Moon, Sun } from "lucide-react";
// Імпортуємо іконки Місяця та Сонця з бібліотеки lucide-react для відображення темного/світлого режимів.

import { Button } from "@/components/ui/button";
// Імпортуємо готовий компонент кнопки з UI-бібліотеки проєкту.

import { useEffect, useState } from "react";
// Імпортуємо хуки React: useState (для збереження стану теми) та useEffect (для ініціалізації теми при завантаженні).

export function ThemeToggle() {
  // Створюємо компонент ThemeToggle — це кнопка для перемикання між світлою та темною темами.

  const [theme, setTheme] = useState<"light" | "dark">("light");
  // Ініціалізуємо стан "theme" зі значенням "light" за замовчуванням.

  useEffect(() => {
    // Виконується один раз після завантаження компонента.

    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    // Отримуємо тему, яку користувач вибрав раніше, з localStorage (якщо вона є).

    const initialTheme = savedTheme || "light";
    // Якщо збереженої теми немає — використовуємо "light" як початкову.

    setTheme(initialTheme);
    // Зберігаємо цю тему в локальному стані компонента.

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    // Додаємо або прибираємо клас "dark" у тег <html> — це активує темну тему в Tailwind CSS.
  }, []);
  // [] — порожній масив залежностей, тому ефект виконується лише один раз при монтуванні.

  const toggleTheme = () => {
    // Функція, яка перемикає тему при натисканні кнопки.

    const newTheme = theme === "light" ? "dark" : "light";
    // Якщо поточна тема світла — перемикаємо на темну, і навпаки.

    setTheme(newTheme);
    // Оновлюємо стан компонента.

    localStorage.setItem("theme", newTheme);
    // Зберігаємо вибрану тему в localStorage, щоб зберегти її після перезавантаження сторінки.

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    // Оновлюємо клас <html> відповідно до вибраної теми.
  };

  return (
    // Відображення кнопки перемикача.
    <Button
      variant="outline" // Встановлює стиль кнопки з рамкою (не суцільну).
      size="icon" // Робить кнопку квадратною, призначеною для іконки.
      onClick={toggleTheme} // Обробник кліку — викликає toggleTheme.
      data-testid="button-theme-toggle" // Атрибут для автоматизованих тестів.
    >
      {theme === "light" ? (
        // Якщо активна світла тема — показуємо іконку Місяця.
        <Moon className="h-5 w-5" />
      ) : (
        // Якщо темна — показуємо іконку Сонця.
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}