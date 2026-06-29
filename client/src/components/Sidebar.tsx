import {
  CalendarDaysIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  UserIcon,
  Wand2Icon,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => {
  const { logout, user } = useAuth();

  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboardIcon },
    { name: "Accounts", path: "/accounts", icon: UserIcon },
    { name: "Scheduler", path: "/schedule", icon: CalendarDaysIcon },
    { name: "AI Composer", path: "/ai-composer", icon: Wand2Icon },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col h-full transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-6 pb-4">
        <div className="text-xl tracking-tight text-slate-800 flex items-center gap-1.5">
          <img src="/logo.svg" alt="logo" className="size-10" />
          OmniPost
        </div>
      </div>

      <div className="px-6 py-2">
        <span className="text-xs text-slate-500 uppercase tracking-wider">
          Menu
        </span>
      </div>

      <nav className="px-3 flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-all duration-150 border ${
                isActive
                  ? "bg-purple-50 text-purple-600 border-purple-100"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700 border-transparent"
              }`}
            >
              <item.icon
                className={`size-4.5 shrink-0 ${isActive ? "text-purple-500" : "text-slate-500"}`}
              />
              {item.name}
              {isActive && (
                <span className="ml-auto w-[5px] h-5 rounded-full bg-purple-500" />
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="size-8 rounded-full bg-linear-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-sm font-medium shrink-0">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-sm text-slate-800 truncate">{user?.name}</div>
            <div className="text-xs text-slate-400 truncate">{user?.email}</div>
          </div>
        </div>

        <button
          onClick={logout}
          className="mt-1 flex items-center gap-2 px-3 py-2 w-full rounded text-sm text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all duration-150"
        >
          <LogOutIcon className="size-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
