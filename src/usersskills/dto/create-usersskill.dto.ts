import { IsDefined, Max, Min } from 'class-validator';

export class CreateUserSkillDto {
  @IsDefined()
  public userId: number;

  @IsDefined()
  public skillId: number;

  @Min(1)
  @Max(6)
  public nivel: number;
}
