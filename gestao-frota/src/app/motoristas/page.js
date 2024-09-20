import Link from "next/link";
import Input from "@/components/created/Input";
import NavAdmin from "@/components/created/NavAdmin";
import Table from "@/components/created/Table";

export default function Motoristas() {
    const headers = ['#', 'Nome', 'CPF'];
    
    
    return (
        <main className="flex h-screen bg-gray-200">
            <aside className="flex flex-col items-center h-full min-w-20 shadow-inner bg-gray-400 pt-10">
                <NavAdmin />
            </aside>

            <section className="w-1/2 p-4 ml-8 space-y-6">
                <div className="w-3/4">
                    <Input id="pesquisa" type="text" placeholder="Pesquisar" />
                </div>

                <div className="flex flex-col space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                    <Table headers={headers} />

                    <div className="self-end sticky bottom-2 text-end mr-4">
                        <Link href="/motoristas/novo" className="bg-green-500 hover:bg-green-600 transition duration-200 shadow-md rounded-md text-white p-2">Novo +</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}