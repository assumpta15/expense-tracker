import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";

export const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return;

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      updateUser(JSON.parse(storedUser));
    } else {
      clearUser();
      navigate("/login");
    }
  }, [user, updateUser, clearUser, navigate]);
};