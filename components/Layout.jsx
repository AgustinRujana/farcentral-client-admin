import Header from './general/Header';

export default function Layout({ children }) {
  return (
    <>
      <div className='flex'>
        <header className='relative'>
          <Header />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
