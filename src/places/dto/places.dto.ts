import { ApiProperty } from "@nestjs/swagger";
import { ContextualPictures } from "./places.contextualPictures";
import { Info } from "./places.info";
import { PricingQuote } from "./places.pricingQuote";

export class PlaceDto {
  @ApiProperty({
    example: [
      'https://a0.muscache.com/im/pictures/74114f9a-36f8-4907-9e7d-c72e180b2721.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/d7857ece-8ba7-4a9a-b604-e0bb5a663080.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/58137382-67e1-428f-b84e-0ebd91cf52a8.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/7112f3b2-4eff-4b43-8577-1b16eca08ada.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/1ba6fde0-2048-4cae-8195-923070f69139.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/5ac9c32e-83c5-4133-8989-b3505bc69bbf.jpg?im_w=720',
    ],
    description: '장소 이미지 URLs',
    required: true,
  })
  public pictures: [ContextualPictures];
  @ApiProperty({
    example: {
      avgRating: 4.7,
      reviewsCount: 20,
      name: '[집전체 단독사용]Me-집전체-#장기출장-방3개,욕실2개-생수없음.조용히 지내실분만 가능',
      lat: 36.33883,
      lng: 127.40852,
    },
    description: '장소에 대한 정보',
    required: true,
  })
  public info: Info;
  @ApiProperty({
    example: {
      price: 51988,
      priceString: '51,988',
    },
    description: '장소에 대한 가격 정보',
    required: true,
  })
  public pricingQuote: PricingQuote;
  @ApiProperty({
    example: '74114f9a-36f8-4907-9e7d-c72e180b2721',
    description: '장소 고유번호',
    required: true,
  })
  public placeId: string;
}