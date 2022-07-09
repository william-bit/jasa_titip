interface IListMenu {
  label: string;
  href?: string;
}
export const listMenu: Array<IListMenu> = [
  { label: "Request List", href: "/admin/request" },
  { label: "Order List", href: "/admin/order" },
  { label: "Product", href: "/admin/product" },
  { label: "Transaction History", href: "/admin/report" },
  { label: "Complain List", href: "/admin/complain" },
];
