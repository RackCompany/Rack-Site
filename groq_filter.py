import os
import json
from groq import Groq
from dotenv import load_dotenv

load_dotenv()  # This loads the .env file

client = Groq(api_key=os.getenv("GROQ_KEY"))

SYS = """You convert natural language fashion queries into structured JSON.

Return JSON with these fields:
- colour: one of [black, white, beige, navy, olive, brown, grey, red, pink, purple, yellow, orange, green, blue] or null
- garment: one of [top, bottom, footwear, outerwear, headwear, accessories] or null
- condition: new, used, or null
- brand: brand name if explicitly mentioned, else null
- max_price: number if specified, else null
- style_keywords: array of descriptive terms not covered above
- website: website if explicitly mentioned, else null

Rules:
- Only use information stated or clearly implied.
- Do not invent brands or prices.
- If absent, return null.
- Output JSON only.
"""

def infer_filter(prompt: str) -> dict:
    completion = client.chat.completions.create(
        model= "llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYS},
            {"role": "user", "content": prompt}
        ],
        temperature=0.1,
        max_tokens=200,
        response_format={"type": "json_object"}
    )
    return json.loads(completion.choices[0].message.content)