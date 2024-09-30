import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import Link from "next/link";
import Footer from "@/components/created/Footer";

export default function CadastrarVeiculo() {

    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />
                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                    <h1 className="text-3xl font-bold text-center">Cadastro de veículos</h1>
                    <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
                        <div className="w-1/2">
                            <Input type="text" id="modelo" placeholder="Modelo"></Input>
                        </div>
                        <div className="w-1/2">
                            <Input type="text" id="placa" placeholder="Placa"></Input>
                        </div>
                        <div className="w-1/2">
                            <Input type="text" id="renavam" placeholder="Renavam"></Input>
                        </div>
                        <div className="w-1/2">
                            <Input type="text" id="cor" placeholder="Cor"></Input>
                        </div>
                        <div className="w-1/2">
                            <Input type="text" id="bairro" placeholder="Bairro"></Input>
                        </div>
                        <Link href="#" className="bg-green-500 hover:bg-green-700 transition duration-200 font-bold text-center shadow-md text-white py-2 px-4 rounded w-1/2">Salvar</Link>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}