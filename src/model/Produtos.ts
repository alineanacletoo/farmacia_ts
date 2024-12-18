import { colors } from "../util/Colors";

//Super classe abstrata 
export abstract class Produtos {

    private _id: number;
    private _nome: string;
    private _tipo: number;
	private _valor: number;
    private _estoque: number;

	constructor(id: number, nome: string, tipo: number, valor: number, estoque: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._valor = valor;
		this._estoque = estoque;
	}


	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get valor(): number {
		return this._valor;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get estoque(): number {
		return this._estoque;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set valor(value: number) {
		this._valor = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set estoque(value: number) {
		this._estoque = value;
	}

    public visualizar(){
        let tipo: string;

        switch(this.tipo){
            case 1:
                tipo = "Medicamento";
                break;
                
            case 2:
                tipo = "Consmetico";
                break;
                
            default:
                tipo = "Categoria nao encontrada!";
                break;
        }

        console.log(colors.fg.green)
        console.log('')
        console.log("==============================================");
        console.log(`============  Dados do produto  ==============`);
        console.log("==============================================");
        console.log(colors.reset)
        console.log(`  Id do produto: ${this._id}`);
        console.log(`  Nome do produto: ${this._nome}`);
        console.log(`  Valor do produto: ${this._valor}`);
        console.log(`  Categoria: ${tipo}`);
        console.log(`  Quantidade em estoque: ${this._estoque}`);
    }

}