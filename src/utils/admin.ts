interface IListMenu {
  label: string;
  href?: string;
}
export const listMenu: Array<IListMenu> = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Request List", href: "/admin/request" },
  { label: "Order List", href: "/admin/order" },
  { label: "Product", href: "/admin/product" },
  { label: "Transaction History", href: "/admin/report" },
  // { label: "Complain List", href: "/admin/complain" },
];

export const listMenuSuperAdmin: Array<IListMenu> = [
  { label: "Dashboard", href: "/super-admin" },
  { label: "TopUp", href: "/super-admin/top-up" },
  { label: "ConfirmTransaction", href: "/super-admin/transfer" },
];
