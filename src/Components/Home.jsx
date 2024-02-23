import location from '../assets/icons/location_pin.svg'
import Searchbar from "./Searchbar";
import Garb from './Garb'
import RootLayout from './layout';

export default function Home() {
  return (
    <>
    <RootLayout />
    <main className="px-[4.89vw] mt-[-10px]">
        <div className="w-full flex flex-row justify-between items-center">
            <div>
                <h1 className="font-bold">Good Morning Bola</h1>
                <span className="flex flex-row gap-[4px] items-center">
                    <img src={location} className='h-[14px] w-[14px]' alt="location"/>
                    <p className="text-semibold text-secondary-text">Yaba, Lagos. Nigeria</p>
                </span>
            </div>
            <button className="btn-primary w-[150px]">
                Add Waste
            </button>
        </div>
        <Searchbar />
        <Garb />
    </main>

    </>
  );
}
