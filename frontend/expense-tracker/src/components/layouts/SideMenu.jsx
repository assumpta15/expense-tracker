import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../Cards/CharAvatar ';

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-61p)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20px">
      {/* PROFILE SECTION */}
      <div className="flex flex-col justify-center items-center mb-6">
       {
  user?.profileImageUrl ? (
    <img
      src={user.profileImageUrl}
      alt="Profile"
      className="w-20 h-20 rounded-full object-cover"
    />
  ) : (
    <CharAvatar
      fullName={user?.fullName}
      width="w-20"
      height="h-20"
      style={{ fontSize: "1.25rem" }}  // ← FIXED
    />
  )
}


        <h5 className="text-lg font-semibold">
          {user?.fullName || ""}
        </h5>
      </div>

      {/* MENU SECTION */}
      <div>
        {SIDE_MENU_DATA.map((item, index) => {
          const isActive = activeMenu === item.label;

          return (
            <button
              key={`menu_${index}`}
              onClick={() => handleClick(item.path)}
              className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 transition-all
                ${isActive ? "text-white bg-primary" : "text-gray-700 hover:bg-gray-200"}
              `}
            >
              <item.icon className="text-xl " />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
