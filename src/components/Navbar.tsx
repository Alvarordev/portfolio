import { GithubIcon, LinkedinIcon } from "@/ui/icons";
import MainNav from "./MainNav";

const Navbar = () => {
  return (
    <header className="fixed w-full z-20">
      <nav className='max-w-6xl w-full mx-auto h-28 py-6 px-4 xl:px-0'>
        <div className="flex justify-between border-2 border-neutral-700 rounded-lg p-6  text-white relative bg-[#0a0a0a18] backdrop-blur-md">
          <div className="flex basis-0 flex-grow font-extrabold">HAZARD</div>
          <div>
            <MainNav/>
          </div>
          <div className="flex flex-grow justify-end basis-0 gap-4">
            <a target="_blank" href={'https://github.com/Alvarordev'} className=" hover:text-indigo-600 transition-all duration-150">
              <GithubIcon/>
            </a>
            <a target="_blank" href={'https://www.linkedin.com/in/alvaro-rodr%C3%ADguez-6b9969210/'} className="hover:text-indigo-600 transition-all duration-150">
              <LinkedinIcon/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
