import { Test, TestingModule } from '@nestjs/testing';
import { LangchainController } from './langchain.controller';
import { LangchainService } from './langchain.service';

describe('LangchainController', () => {
  let controller: LangchainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LangchainController],
      providers: [LangchainService],
    }).compile();

    controller = module.get<LangchainController>(LangchainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
