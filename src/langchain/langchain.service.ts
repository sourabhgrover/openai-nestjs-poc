import { Injectable } from '@nestjs/common';
import { CreateLangchainDto } from './dto/create-langchain.dto';
import { UpdateLangchainDto } from './dto/update-langchain.dto';

@Injectable()
export class LangchainService {
  create(createLangchainDto: CreateLangchainDto) {
    return 'This action adds a new langchain';
  }

  findAll() {
    return `This action returns all langchain`;
  }

  findOne(id: number) {
    return `This action returns a #${id} langchain`;
  }

  update(id: number, updateLangchainDto: UpdateLangchainDto) {
    return `This action updates a #${id} langchain`;
  }

  remove(id: number) {
    return `This action removes a #${id} langchain`;
  }
}
