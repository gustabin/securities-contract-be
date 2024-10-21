import { Test} from '@nestjs/testing'
import { AppModule} from '../src/app.module'

describe("appModule", () => {
    it("appModule test", async () => {
        const module = await Test.createTestingModule({
            imports : [AppModule]
        }).compile()
        expect(module).toBeDefined();
    })
})