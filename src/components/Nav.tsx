import Link from "next/link";

export function Nav(){
    return(
        <header className="menu-header">
            <div className="menu-nav">
                <h2>Mais opções</h2>

                <Link className="menu-item" href="/">Home</Link>
            </div>
            <ul className="menu-nav">
                <Link className="menu-item" href="/">Alterar a senha do Aplicativo</Link>
                <Link className="menu-item" href="/clients">Clientes</Link>
                <Link className="menu-item" href="/products">Produtos</Link>
                <Link className="menu-item" href="/users"> Usuários</Link>
            </ul>
        </header>
    )
}