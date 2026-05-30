import { LlmAgent } from "@google/adk";

export default new LlmAgent({
    name: "hello-agent",
    model: "gemini-1.5-flash-latest",
    instruction: "You are a helpful assistant.",
});