import { HfInference } from "@huggingface/inference";
import { config } from 'dotenv';

config();
const hf = new HfInference(process.env.HF_TOKEN);

/**este modelo fué entrenado para detectar la siguiente
 * palabra en oraciones. Tambien puede generar textos a
 * partir de ...
 * Tambien puede generar historias cortas y largas
 */
/* const gpt2Response = await hf.textGeneration({
  model: 'gpt2',
  inputs: "Google is known for",
}); 
 */
/* const gpt2Response = await hf.textGeneration({
  model: 'openai-community/gpt2',
  inputs: "Google es conocido por",
});
 */
const gpt2Response = await hf.textGeneration({
  model: 'nisten/Biggie-SmoLlm-0.15B-Base',
  inputs: "Google is known for",
});
console.log(gpt2Response.generated_text);

