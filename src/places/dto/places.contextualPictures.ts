import { ApiProperty } from "@nestjs/swagger";

export class ContextualPictures {
  // picture url
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
  public picture: [string];
}