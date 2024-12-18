import { Produtos } from "./Produtos";

export class Medicamentos extends Produtos{

    private _generico: string;


	constructor(id: number, nome: string, valor: number, tipo: number, estoque: number, generico: string) {
		super(id, nome, valor, tipo, estoque)
        this._generico = generico;
	}

	public get generico(): string {
		return this._generico;
	}

	public set generico(value: string) {
		this._generico = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`  Seguimento do medicamento: ${this._generico}`);
    }
}