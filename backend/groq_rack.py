import os, json, groq
from groq import Groq
from dotenv import load_dotenv
load_dotenv()

client = Groq(api_key=os.getenv("GROQ_KEY"))

prompt = """
You are a streetwear stylist. Answer ONLY in valid JSON, no markdown code fences.
Return exactly:
{
  "top":       [ { "id":int, "layer":int, "name":str, "owned":bool } ],
  "bottom":    [ { "id":int, "layer":int, "name":str, "owned":bool } ],
  "footwear":  [ { "id":int, "layer":int, "name":str, "owned":bool } ],
  "accessories":[],
  "meta":      { "confidence":float, "reasoning":str }
}
"""

resp = client.chat.completions.create(
    model= "llama-3.3-70b-versatile",
    messages=[{"role":"system","content":"You are a streetwear stylist."},
              {"role":"user", "content":prompt}],
    temperature=0.4,
    max_tokens=600
)

def try_outfit(style_desc:str, closet:list) -> dict:
    for attempt in range(10):
        try:
            msg = client.chat.completions.create(
                model="llama-3.3-70b-versatile",
                messages=[{"role":"system","content":prompt},
                          {"role":"user","content":f"Style: {style_desc}\nCloset: {json.dumps(closet)}"}],
                temperature=0.4,
                max_tokens=600
            )
            return json.loads(msg.choices[0].message.content)
        except Exception:
            continue
    raise RuntimeError("10 retries failed")

# quick test
closet = [{ "id":42, "type":"shirt",   "colour":"beige", "material":"wool", "fit":"regular", "pattern":"plain" },
  { "id":7,  "type":"trousers", "colour":"navy",  "material":"cotton", "fit":"slim" },
  { "id":12, "type":"shoes",    "colour":"white", "material":"leather", "style":"minimalist-sneaker" }, 
  { "id":22, "type":" collared shirt",   "colour":"white", "material":"twill", "fit":"muscle", "pattern":"plaid" }, 
  { "id":43, "type":"overcoat",   "colour":"black with gold accents", "material":"tweed", "fit":"regular", "pattern":"plain" },
  { "id":99, "type":"t-shirt",   "colour":"orange", "material":"cotton", "fit":"oversized", "pattern":"graphic with pizza icon" },
  { "id":92, "type":"shorts",   "colour":"grey", "material":"dry-fit", "fit":"oversized", "pattern":"nike swoosh" }, 
  { "id":72, "type":"sandals",   "colour":"beige", "material":"polyurethane", "fit":"regular", "pattern":"crocs" }]

print(try_outfit("I do not care what i wear. it is hot outside and I just need to walk my dog", closet))