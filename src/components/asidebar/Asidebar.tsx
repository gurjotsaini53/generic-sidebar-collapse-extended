"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  icon: string; // path
  route: string; // route
  label: string; // Name to display
}

interface AsidebarProps {
  className?: string; // Custom className
  items: SidebarItem[]; // List of sidebar items
  icon: string; // Sidebar toggle icon
  collapsedWidth?: number; // Width when collapsed
  expandedWidth?: number; // Width when expanded
}

const Asidebar: React.FC<AsidebarProps> = ({
  className = "",
  items,
  icon,
  collapsedWidth = 60,
  expandedWidth = 250,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <aside
      className={`relative h-screen bg-gray-800 text-white p-2 transition-all duration-300 ${
        isOpen ? `w-[${expandedWidth}px]` : `w-[${collapsedWidth}px]`
      } ${className}`}
    >
      {/* Toggle Button */}
      <button
        className="border-2 border-gray-500 rounded p-2 mb-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image src={icon} alt="Toggle Sidebar" width={30} height={30} />
      </button>

      {/* Sidebar Items */}
      <nav className="space-y-2">
        {items.map((item, index) => {
          const isActive = pathname == item.route;

          return (
            <Link
              key={index}
              href={item.route}
              className={` flex items-center gap-3 p-2 rounded transition-all duration-200  
                ${isActive ? "bg-gray-600" : "hover:bg-gray-700 "}`}
            >
              <Image src={item.icon} alt={item.label} width={30} height={30} />
              {isOpen && <span className="font-bold">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Asidebar;
