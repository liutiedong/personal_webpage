import ColorMode from "../islands/ColorMode.tsx";

type HeaderProps = { active: string };

export default function Header({ active }: HeaderProps) {
  const menus = [
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];
  return (
    <header
      class={`w-full bg-gray-100 dark:bg-gray-700 py-6 px-8 flex flex-col md:flex-row gap-6 text-gray-700 dark:text-gray-300 text-md font-bold ${
        active === "/" ? "justify-end" : ""
      }`}
    >
      {active !== "/" &&
        (
          <div class="flex-1">
            <a
              href="/"
              class="hover:(text-gray-900 dark:text-gray-100)"
              id="name-in-header"
            >
              Guillaume Comte
            </a>
          </div>
        )}
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"hover:(text-gray-900 dark:text-gray-100) py-1 border-gray-500 dark:border-gray-300" +
                (menu.href === active ? " border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
      <div class="flex gap-6">
        <button class="hover:(text-gray-900 dark:text-gray-100) font-bold">
          FR
        </button>
        <ColorMode />
      </div>
    </header>
  );
}
