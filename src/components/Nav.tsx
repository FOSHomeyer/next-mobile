import Link from "next/link";

export function Nav(){
    return(
        <header className="menu-header">
            <ul className="menu-nav">
                <Link className="menu-item" href="/">Home</Link>
                <Link className="menu-item" href="/clients">Clientes</Link>
                <Link className="menu-item" href="/products">Produtos</Link>
                <Link className="menu-item" href="/users"> Usuários</Link>
            </ul>
        </header>
    )
}