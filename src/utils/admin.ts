interface IListMenu {
  label: string;
  href?: string;
}
export const listMenu: Array<IListMenu> = [
  { label: "Request List", href: "/admin/product" },
  { label: "Order List", href: "/admin/product" },
  { label: "Product", href: "/admin/product" },
  { label: "Transaction History", href: "/admin/report" },
  { label: "Complain List", href: "/admin/report" },
];
