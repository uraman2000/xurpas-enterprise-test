import { ApiProperty } from '@nestjs/swagger';

export class BulkDeleteUser {
  @ApiProperty({
    type: Number,
    description: 'array of ID that want to delete',
    isArray: true,
  })
  public id: number[];
}
