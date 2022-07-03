interface IListMenu {
  label: string;
  href?: string;
}
export const listMenu: Array<IListMenu> = [
  { label: "Request", href: "/admin/product" },
  { label: "Order", href: "/admin/product" },
  { label: "Product", href: "/admin/product" },
  { label: "List Transaction", href: "/admin/report" },
  { label: "List Complain", href: "/admin/report" },
];
