// Node Modules ----------------------------------------------------------------
import { PipeTransform, BadRequestException } from '@nestjs/common';

// My Modules ------------------------------------------------------------------
import { Experiences } from '../enums/experience.enum';

export class ExperienceValidationPipe implements PipeTransform {
  transform(value: any) {
    value = value.toUpperCase();

    if (!Object.values(Experiences).includes(value)) {
      throw new BadRequestException(
        `${value} is an invalid value.The Pet Experience should be either Y or N`,
      );
    }

    return value;
  }
}
