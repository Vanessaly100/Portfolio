// components/Button.jsx
export default function Button({ variant = "primary", children }) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer";

  const styles = {
    primary:
      "bg-amber-500 hover:bg-amber-600 text-white shadow-md dark:bg-amber-400 dark:hover:bg-amber-500",
    secondary:
      "bg-purple-600 hover:bg-purple-700 text-white shadow-md dark:bg-purple-500 dark:hover:bg-purple-600",
    outline:
      "border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white " +
      "dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400 dark:hover:text-gray-900",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
