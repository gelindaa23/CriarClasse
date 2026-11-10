export class Cliente{
    id: number;
    Nome: string;
    CPF: number;
    RG: number;
    anoNascimento: Date;
    Idade: number;

    constructor(id: number, Nome: string, CPF: number, RG: number, anoNascimento: Date){
        this.id = id;
        this.Nome = Nome;
        this.CPF = CPF;
        this.RG = RG;
        this.anoNascimento = anoNascimento;
       
        this.Idade = this.calcularIdade();
    }

    calcularIdade(){
     
       return 2026 - this.anoNascimento.getFullYear(); //pega so o ano da data p/ calculo
    }

    getNome(): string{
        return this.Nome;
    }

    getCPF(): number{
        return this.CPF;
    }

    getRG(): number{
        return this.RG;
    }

    getanoNascimento(): Date{
        return this.anoNascimento;
    }

    getIdade(): number{
        return this.Idade;
    }
}