import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';
import { CreateChatgptDto } from './dto/create-chatgpt.dto';
import { UpdateChatgptDto } from './dto/update-chatgpt.dto';
import { Chatgpt } from './entities/chatgpt.entity';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Post()
  create(@Body() createChatgptDto: CreateChatgptDto) {
    return this.chatgptService.create(createChatgptDto);
  }

  @Post("askQuestion")
  openai(@Body() Chatgpt: Chatgpt) {
    return this.chatgptService.askQuestion(Chatgpt);
  }

  @Get()
  findAll() {
    return this.chatgptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatgptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatgptDto: UpdateChatgptDto) {
    return this.chatgptService.update(+id, updateChatgptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatgptService.remove(+id);
  }
}
