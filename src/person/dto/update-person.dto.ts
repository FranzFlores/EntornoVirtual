export class UpdatePersonDTO{
    //Campos para Persona
    readonly firstName1: string;
    readonly firstName2: string;
    readonly lastName1: string;
    readonly lastName2: string;
    readonly personalEmail: string;
    readonly address: string;
    readonly cellphone: string;
    readonly maritalStatus: string;

    readonly type:string;

    //Campo para Estudiante
    readonly cycle: number;

    //Campos para Administrativo
    readonly degree: string;
    readonly degreeFourthLevel: string;
}