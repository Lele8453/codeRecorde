from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sys
import io

app = FastAPI()

# Permitir o frontend acessar a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use "*" só para testes. Em produção, restrinja.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodigoRequest(BaseModel):
    codigo: str

@app.post("/api/exec")
def executar_codigo(req: CodigoRequest):
    old_stdout = sys.stdout
    sys.stdout = mystdout = io.StringIO()
    try:
        exec(req.codigo, {})
        output = mystdout.getvalue()
    except Exception as e:
        output = f"Erro: {str(e)}"
    finally:
        sys.stdout = old_stdout
    return {"resultado": output}
