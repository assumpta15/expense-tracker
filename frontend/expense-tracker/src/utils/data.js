import {
    LuLayoutDashboard,
    LuHandCoins,
    LuWalletMinimal,
    LuLogOut,
    LuHouse,   // <-- Replace LuHome with LuHouse
} from "react-icons/lu";

export const SIDE_MENU_DATA = [
    {
        id: "00",
        label: "Home",
        icon: LuHouse,
        path: "/",
    },

    {
        id: "01",
        label: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/dashboard",
    },

    {
        id: "02",
        label: "Income",
        icon: LuWalletMinimal,
        path: "/income",
    },

    {
        id: "03",
        label: "Expense",
        icon: LuHandCoins,
        path: "/expense",
    },

    {
        id: "06",
        label: "Logout",
        icon: LuLogOut,
        path: "/logout",
    },
];
