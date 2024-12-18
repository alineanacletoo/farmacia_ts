import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';
import { ProdutosController } from './controller/ProdutosController';
import { Medicamentos } from './src/model/Medicamentos';
import { Consmeticos } from './src/model/Cosmeticos';

export function main(){

    let opcao, valor, tipo, estoque, id;
    let generico, fragrancia, nome: string;
    const categorias = ['Medicamento', 'Cosmetico']

    const produto = new ProdutosController();



    let continuar = true;
    while(continuar){
        console.log(colors.bg.black, colors.fg.yellow)
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("                    Farmácia F                       ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log(colors.reset);

        console.log("Digite a opcao desejada: ")
        opcao = readlineSync.questionInt('')

        switch(opcao){
            case 1:
                console.log("\nCadastrar novo Produto!\n")

                //nome do produto
                console.log("Digite o nome do Produto: ");
                nome = readlineSync.question('');

               
                //Categoria do produto
                console.log("\nEscolha a categoria do Produto:");
                console.log("================================");
                tipo = readlineSync.keyInSelect(categorias, "", {cancel:false}) + 1;


                //valor do produto
                console.log("Digite o valor do Produto: ");
                valor = readlineSync.questionFloat();
                

                //quantidade em estoque
                console.log("Digite a quantidade em estoque: ");
                estoque = readlineSync.questionInt();

                switch (tipo) {
                    case 1:
                        // Criar Medicamento
                        console.log("Digite o seguimento do medicamento: ");
                        generico = readlineSync.question('');
                        produto.cadastrar(new Medicamentos(produto.gerarId(), nome, tipo, valor, estoque, generico));
                        break;
                    case 2:
                        // Criar Cosmetico
                        console.log("Digite o seguimento do cosmetico: ");
                        fragrancia = readlineSync.question('');
                        produto.cadastrar(new Consmeticos(produto.gerarId(), nome, tipo, valor, estoque, fragrancia));

                        break;
                    default:
                        console.log("Opcao invalida! Tente novamente.");
                        break;
                }

                keypress()
                break;

            case 2:
                // Listar Todos os Produtos
                console.log("\nLista de produtos cadastrados: \n")

                produto.listarProdutos();

                keypress()
                break;

            case 3:
                // Consultar Produto por Id
                console.log("Digite o Id do Produto: ");
                id = readlineSync.questionInt('');

                produto.procurarPorId(id);

                keypress()
                break;

            case 4:
                console.log("Atualizar dados do Produto!");
                // Produto a ser atualizado
                console.log("\nDigite o Id do Produto que deseja atualizar: ");
                id = readlineSync.questionInt('');

                let produtoAtualizar = produto.buscarNoArray(id)

                if(produtoAtualizar){
                    console.log("Digite o novo nome do Produto: ");
                    nome = readlineSync.question('');
                    console.log("Digite o novo valor do Produto: ");
                    valor = readlineSync.questionFloat();
                    console.log("Digite a nova quantidade em estoque: ");
                    estoque = readlineSync.questionInt();

                    tipo = produtoAtualizar.tipo;

                    switch (tipo) {
                        case 1:
                            // Atualizar Medicamento
                            console.log("Digite o novo seguimento do medicamento: ");
                            generico = readlineSync.question('');
                            produto.atualizar(new Medicamentos(id, nome, tipo, valor, estoque, generico));
                            break;
                        case 2:
                            // Atualizar Cosmetico
                            console.log("Digite o novo seguimento do cosmetico: ");
                            fragrancia = readlineSync.question('');
                            produto.atualizar(new Consmeticos(id, nome, tipo, valor, estoque, fragrancia));
                            break;
                    } 
                }else {
                    console.log("Produto não encontrado!");
                }

                keypress()
                break;

            case 5:
                // Deletar Produto
                console.log("Deletar Produto!");
                // Produto a ser deletado
                console.log("\nDigite o Id do Produto que deseja deletar: ");
                id = readlineSync.questionInt('');

                produto.deletar(id)

                keypress()
                break;

            case 0:
                console.log("\nSaindo do sistema...Volte sempre!");
                console.log("====================================================");
                sobre();

                continuar = false;
                break;
            default:
                console.log("Opcao invalida! Tente novamente.");
        }
    }
}

function keypress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    console.log("=====================================================");
    readlineSync.prompt();
}

export function sobre(): void {
    console.log(colors.bg.black, colors.fg.green)
    console.log("\nFarmácia F - Seu Bem estar !");
    console.log("\n===================================================");
    console.log("Projeto Desenvolvido por: ");
    console.log("Aline Anacleto - alineo@generation.org");
    console.log("https://github.com/alineanacletoo");
    console.log("====================================================");
    console.log(colors.reset);
}

main();