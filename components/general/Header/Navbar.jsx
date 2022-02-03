import {
  HomeIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  IdentificationIcon,
  SpeakerphoneIcon,
  RefreshIcon,
  FolderOpenIcon,
} from '@heroicons/react/outline';

import Link from 'next/link';
import { useState } from 'react';
import NavBarSubMenu from './NavbarSubMenu';

export default function Navbar() {
  let NAVBAR_ITEMS = [
    { name: 'Inicio', icon: HomeIcon, href: '', active: false },
    {
      name: 'Pedidos',
      icon: ShoppingCartIcon,
      href: '',
      active: false,
      subMenu: [
        { name: 'Nuevos', icon: SpeakerphoneIcon, href: '', active: true },
        { name: 'En preparacion', icon: RefreshIcon, href: '', active: false },
        { name: 'Finalizados', icon: FolderOpenIcon, href: '', active: false },
      ],
    },
    { name: 'Productos', icon: ShoppingBagIcon, href: '', active: false },
    { name: 'Usuarios', icon: IdentificationIcon, href: '', active: false },
  ];

  const [navbar, setNavbar] = useState(NAVBAR_ITEMS);

  const hoverItem = (item) => {
    NAVBAR_ITEMS.forEach((x, i) => {
      if (x.name == item) {
        return (NAVBAR_ITEMS[i].active = true);
      }
      return (NAVBAR_ITEMS[i].active = false);
    });
    setNavbar(NAVBAR_ITEMS);
  };

  const leaveMouse = () => {
    NAVBAR_ITEMS.forEach((x, i) => {
      return (NAVBAR_ITEMS[i].active = false);
    });
    setNavbar(NAVBAR_ITEMS);
  };

  return (
    <nav className='h-screen max-w-max relative' style={navbarStyles.nav}>
      <div>
        <ul className='flex flex-col gap-4 pt-4'>
          {navbar.map((item, i) => (
            <li key={i} className='relative   mx-3'>
              <Link href={item.href}>
                <a
                  className=' flex items-center flex-col  mx-auto p-3 hover:bg-teal-500 rounded-lg transition-all text-teal-500 hover:text-white'
                  onMouseEnter={() => hoverItem(item.name)}
                  onMouseLeave={() => leaveMouse()}
                >
                  <span>
                    <item.icon className='h-10 w-10 mr-0' />
                  </span>
                  <span>
                    <p>{item.name}</p>
                  </span>
                  {item.active && item.subMenu && (
                    <NavBarSubMenu items={item.subMenu} />
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const navbarStyles = {
  nav: {
    boxShadow: '2px 0px 5px 0px #00000044',
  },
};
