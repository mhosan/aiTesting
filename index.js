import { HfInference } from "@huggingface/inference";
import { config } from 'dotenv';

config();

const hf = new HfInference(process.env.HF_TOKEN);
const imageURL1="https://media.ambito.com/p/67e1cdc69057c1863724eddcd8269faa/adjuntos/239/imagenes/040/456/0040456799/gatos-portadajpg.jpg";
const imageURL2="https://p1.pxfuel.com/preview/721/440/835/city-woman-fashion-model-female-sunglasses.jpg";
const imageURL3="https://p1.pxfuel.com/preview/318/628/974/homemade-bread-dough-baking-flour-cooking.jpg";
const imageURL4="https://p1.pxfuel.com/preview/345/4/1023/clipboard-desk-top-view-workspace-plants.jpg";
const imageURL5="https://p1.pxfuel.com/preview/190/684/53/office-graph-drawing-business-marker-presentation.jpg"

const response = await fetch(imageURL1);
const miBlob = await response.blob();

const model1 = "Salesforce/blip-image-captioning-large";
const model2 = "nlpconnect/vit-gpt2-image-captioning";
const model3 = "microsoft/git-base";

const result =await hf.imageToText({
    //data: readFileSync('test/cats.png'),
    data: miBlob,
    model: model3
  })

  console.log(result);