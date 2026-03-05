export const BASE_URL =
  "https://expense-tracker-2-tx8p.onrender.com/api/v1";

export const API_PATHS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },

  DASHBOARD: {
    DASHBOARD_DATA: "/dashboard",
  },

  INCOME: {
    ADD_INCOME: "/income/add",
    GET_ALL_INCOME: "/income/get",
    DELETE_INCOME: (id) => `/income/${id}`,
    DOWNLOAD_INCOME: "/income/downloadexcel",
  },

  EXPENSE: {
    ADD_EXPENSE: "/expense/add",
    GET_ALL_EXPENSE: "/expense/get",
    DELETE_EXPENSE: (id) => `/expense/${id}`,
    DOWNLOAD_EXPENSE: "/expense/downloadexcel",
  },
};