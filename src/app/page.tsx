import Link from "next/link";
import { LiaUserSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home(){
  return(
    <div className="w-full h-screen flex flex-col items-center justify-between">
      
      <header className="menu-header">
            <ul className="menu-nav">
                <Link className="menu-item" href="/">Home</Link>
                <Link className="menu-item" href="/clients">Clientes</Link>
                <Link className="menu-item" href="/products">Produtos</Link>
                <Link className="menu-item" href="/users"> Usuários</Link>
            </ul>
        </header>
      
      <div className="flex-1">
        <h1 className="hidden lg:flex">Welcome to Next.js!</h1>
      </div>
      <div className=" text-white flex-col h-screen w-full flex md:hidden p-10">
        
        <div className="flex items-center justify-between w-full h-16">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400">
            <LiaUserSolid size={25} className="text-green-700" />
          </div>
          <div className="flex ml-3 flex-col text-black flex-1">
            <h2>Felipe</h2>
            <p>Editar</p>
          </div>
          <MdOutlineKeyboardArrowRight size={35} className="text-green-500" />
        </div>

        <div className="flex items-center justify-between w-full h-16">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400">
            <LiaUserSolid size={25} className="text-green-700" />
          </div>
          <div className="flex ml-3 flex-col text-black flex-1">
            <h2>Felipe</h2>
            <p>Editar</p>
          </div>
          <MdOutlineKeyboardArrowRight size={35} className="text-green-500" />
        </div>

        <div className="flex items-center justify-between w-full h-16">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400">
            <LiaUserSolid size={25} className="text-green-700" />
          </div>
          <div className="flex ml-3 flex-col text-black flex-1">
            <h2>Felipe</h2>
            <p>Editar</p>
          </div>
          <MdOutlineKeyboardArrowRight size={35} className="text-green-500" />
        </div>

      </div>
    </div>
  )
}