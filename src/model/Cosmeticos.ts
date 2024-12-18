import { Produtos } from "./produtos";

export class Consmeticos extends Produtos{

    private _fragrancia: string;


	constructor(id: number, nome: string, valor: number, tipo: number, estoque: number, fragrancia: string) {
        super(id, nome, valor, tipo, estoque)
		this._fragrancia = fragrancia;
	}

	public get fragrancia(): string {
		return this._fragrancia;
	}

	public set fragrancia(value: string) {
		this._fragrancia = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`  Seguimento do cosmetico: ${this._fragrancia}`);
    }


}