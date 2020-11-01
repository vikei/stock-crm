import {matchPath} from "react-router-dom";

const menuKeys: {[key: string]: string} = {
  stock: "/stock",
  orders: "/orders",
};
export function getActiveMenuByLocationPath(pathname: string) {
  return Object.keys(menuKeys).filter(menuKey =>
    Boolean(
      matchPath(pathname, {
        path: menuKeys[menuKey],
      }),
    ),
  );
}
