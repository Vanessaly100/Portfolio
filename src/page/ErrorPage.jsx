import { Link } from 'react-router-dom'
import errorimg from '../assets/404.svg'

const Errorpage = () => {
  return (
    <div>
      <div className='h-screen'>
        <Link
          to="/"
          className="text-6xl text-center border bg-SecondaryColor border-PrimaryColor hover:bg-PrimaryColor hover:text-orange-400"
        >
          {" "}
          click to go back Home
        </Link>
        <img src={errorimg} alt="" className='h-full w-full' />
      </div>
    </div>
  );
}

export default Errorpage