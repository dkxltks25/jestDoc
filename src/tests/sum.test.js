import sum from "../functions/sum"; 
import { TestScheduler } from "jest";

test('adds 1 + 2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3)
})