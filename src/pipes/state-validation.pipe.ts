// Node Modules ----------------------------------------------------------------
import { PipeTransform, BadRequestException } from '@nestjs/common';

// My Modules ------------------------------------------------------------------
import { States } from '../enums/state.enum';

export class StateValidationPipe implements PipeTransform {
  transform(value: any) {
    value = value.toUpperCase();

    if (!Object.values(States).includes(value)) {
      throw new BadRequestException(`${value} is an invalid state`);
    }

    return value;
  }
}
