export class CreatePersonDTO{
    //Campos para Persona
    readonly firstName1: string;
    readonly firstName2: string;
    readonly lastName1: string;
    readonly lastName2: string;
    readonly dni: string;
    readonly birthdate: Date;
    readonly personalEmail: string;
    readonly address: string;
    readonly cellphone: string;
    readonly maritalStatus: string;
    readonly image:string;

    readonly type:string;

    //Campos para cuenta
    readonly institutionalEmail: string;
    readonly password: string;
    readonly person: number;

    //Campos para estudiante
    readonly degreeFileS: string;
    readonly degreeCertificateFile: string;
    readonly cycle: number;

    //Campos para Administrativo
    readonly degree: string;
    readonly degreeFileA: string;
    readonly degreeFourthLevel: string;
    readonly degreeFourthLevelFile: string;
}