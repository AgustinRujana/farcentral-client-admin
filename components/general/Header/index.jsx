import Header from './Header';
import Navbar from './Navbar';

export default function index() {
  return (
    <>
      <div className='absolute -z-50'>
        <Header />
      </div>
      <Navbar />
    </>
  );
}
