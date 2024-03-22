import { Injectable } from '@nestjs/common';
import { CreateChatgptDto } from './dto/create-chatgpt.dto';
import { UpdateChatgptDto } from './dto/update-chatgpt.dto';
import { Chatgpt } from './entities/chatgpt.entity';
import OpenAI from 'openai';


@Injectable()
export class ChatgptService {
  private openai: OpenAI;
  constructor() {
    this.openai = new OpenAI({
      // apiKey: process.env.OPENAI_API_KEY,
      apiKey: "process.env.OPENAI_API_KEY",
    });
  }
  create(createChatgptDto: CreateChatgptDto) {
    return 'This action adds a new chatgpt';
  }

  findAll() {
    return `This action returns all chatgpt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatgpt`;
  }

  update(id: number, updateChatgptDto: UpdateChatgptDto) {
    return `This action updates a #${id} chatgpt`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatgpt`;
  }

  async askQuestion({ question }: Chatgpt): Promise<{ response: string }> {
    const chatCompletion = await this.openai.chat.completions.create({
      messages: [{ role: 'user', content: question }],
      model: 'gpt-3.5-turbo',
    });
    const choices = chatCompletion.choices;
    const response = choices.length > 0 && choices[0].message.content ? choices[0].message.content : "";
    return { response };
  }
}
