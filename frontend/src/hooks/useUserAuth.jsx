import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";

export const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      clearUser();
      navigate("/login");
      return;
    }

    if (!user) {
      updateUser(JSON.parse(storedUser));
    }
  }, [user, updateUser, clearUser, navigate]);
};