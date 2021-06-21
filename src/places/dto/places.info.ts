import { ApiProperty } from "@nestjs/swagger";

export class Info {
  @ApiProperty({
    example: `[집전체 단독사용]Me-집전체-#장기출장-방3개,욕실2개-생수없음.조용히 지내실분만 가능`,
    description: '장소에 대한 이름 정보',
    required: true,
  })
  public name: string;
  @ApiProperty({
    example: 4.7,
    description: '장소에 대한 평균 평점 정보',
    required: true,
  })
  public avgRating: number;
  @ApiProperty({
    example: 20,
    description: '장소에 대한 총 리뷰 수',
    required: true,
  })
  public reviewsCount: number;
  @ApiProperty({
    example: 36.33883,
    description: '장소에 대한 위치 정보(위도)',
    required: true,
  })
  public lat: string;
  @ApiProperty({
    example: 127.40852,
    description: '장소에 대한 위치 정보(경도)',
    required: true,
  })
  public lng: string;
}