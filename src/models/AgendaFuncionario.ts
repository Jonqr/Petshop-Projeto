import { FuncionarioDTO } from "./Funcionario";
import { TipoServicoDTO } from "./TipoServico";
import { PetshopDTO } from "./Petshop";

export interface AgendaFuncionarioDTO {

    
    Data: string;
    data: string;
    duracao :string;
    funcionario : FuncionarioDTO; 
    tipoServico : TipoServicoDTO;
    id : string;
    petshop : PetshopDTO;
}
