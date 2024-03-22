import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LangchainService } from './langchain.service';
import { CreateLangchainDto } from './dto/create-langchain.dto';
import { UpdateLangchainDto } from './dto/update-langchain.dto';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

@Controller('langchain')
export class LangchainController {
  constructor(private readonly langchainService: LangchainService) {}

  @Post()
  create(@Body() createLangchainDto: CreateLangchainDto) {
    return this.langchainService.create(createLangchainDto);
  }

  @Get()
  findAll() {
    return this.langchainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langchainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLangchainDto: UpdateLangchainDto) {
    return this.langchainService.update(+id, updateLangchainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.langchainService.remove(+id);
  }

  @Post("splitter")
  async splitter() {
    const result = await fetch('http://localhost:3000/scrimba-info.txt')
    const text = await result.text();
    // const splitter = new RecursiveCharacterTextSplitter()
    // OVERRIDE Default  Settings
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 50,
      separators: ['\n\n', '\n', ' ', ''] // default setting
  })
  const output = await splitter.createDocuments([text])
    // console.log(text);
    return {
      success : true,
      // text: text,
      output
    };
  }
}
