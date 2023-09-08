import { useParams, useNavigate } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProdutos"

export default function EditarProduto(){
    const lista = ListaProdutos
    const navegacao = useNavigate()
    const {id}= useParams()

    const proc = lista.filter(prod=> prod.id == id)
    const produto = proc[0]

    const salvar = ()=>{
        alert (`Produto: ${produto.nome} editado com sucesso`)
        return navegacao('/produtos')
    }
    return(
        <main>
            <h1>Editando produtos</h1>
        </main>
    )
}