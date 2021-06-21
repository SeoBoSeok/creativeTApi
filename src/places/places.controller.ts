import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { PlaceDto } from './dto/places.dto';

@ApiTags('PLACES')
@Controller('places')
export class PlacesController {
  @ApiResponse({
    type: PlaceDto,
    status: 200,
    description: '특정 장소 불러오기',
  })
  @ApiOperation({ summary: 'ID값으로 특정 장소 가져오기' })
  @Get(':id')
  getPlace() {

  }

  @ApiResponse({
    type: [PlaceDto],
    status: 200,
    description: '모든 장소 불러오기',
  })
  @ApiOperation({ summary: '장소 정보 모두 가져오기' })
  @Get()
  getAllPlaces() {

  }

  @ApiResponse({
    type: PlaceDto,
    status: 200,
    description: '장소 추가 성공',
  })
  @ApiOperation({ summary: '장소 새로 추가하기' })
  @Post()
  createPlace(@Body() data: PlaceDto) {

  }

  @ApiResponse({
    type: Number,
    status: 200,
    description: '특정 장소 삭제하기',
  })
  @ApiOperation({ summary: 'ID값으로 특정 장소 삭제하기' })
  @Delete(':id')
  deletePlace() {

  }
}
