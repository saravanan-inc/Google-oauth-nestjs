import { Test, TestingModule } from '@nestjs/testing';
import { AppleAuthenticationService } from './apple-authentication.service';

describe('AppleAuthenticationService', () => {
  let service: AppleAuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppleAuthenticationService],
    }).compile();

    service = module.get<AppleAuthenticationService>(AppleAuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
