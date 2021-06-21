import { ApiProperty } from "@nestjs/swagger";

export class PricingQuote {
  @ApiProperty({
    example: '51,988',
    description: '장소에 대한 가격 정보',
    required: true,
  })
  public priceString: string;
  @ApiProperty({
    example: 51988,
    description: '장소에 대한 가격 정보',
    required: true,
  })
  public price: number;
}