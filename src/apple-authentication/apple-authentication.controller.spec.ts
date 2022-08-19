import { Test, TestingModule } from '@nestjs/testing';
import { AppleAuthenticationController } from './apple-authentication.controller';

describe('AppleAuthenticationController', () => {
  let controller: AppleAuthenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppleAuthenticationController],
    }).compile();

    controller = module.get<AppleAuthenticationController>(AppleAuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
