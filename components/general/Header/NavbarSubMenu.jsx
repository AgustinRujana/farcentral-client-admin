import Link from 'next/link';

export default function NavBarSubMenu({ items }) {
  return (
    <ul
      className='absolute z-10 bg-teal-500 top-0 min-w-min rounded-r-xl overflow-hidden flex flex-col py-1 shadow-2xl'
      style={{ left: '6.7rem' }}
    >
      {items?.map((item, i) => (
        <li key={i} className='text-center px-3 py-1'>
          <Link href={item.href}>
            <a
              className={`flex flex-col items-center text-white cursor-pointer rounded-xl ${
                item.active ? 'bg-white bg-opacity-50' : ''
              }`}
            >
              <span>
                <item.icon className='h-10 w-10' />
              </span>
              <span>
                <p>{item.name}</p>
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
