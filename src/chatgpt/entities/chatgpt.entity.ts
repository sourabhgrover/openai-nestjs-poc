import { IsString, Length } from "class-validator";
export class Chatgpt {
    @IsString()
    @Length(5, 512)
    readonly question!: string;
  
}
