import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurações iniciais
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para interpretar dados URL-encoded
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para lidar com a requisição POST
app.post('/submit', (req, res) => {
    const nome = req.body.nome;
    const apt = req.body.apt;
    const responsavel = req.body.responsavel;
    const cpf = req.body.cpf;
    const dtn = req.body.dtn;
    const telefone = req.body.telefone;
    const grau = req.body.grau;
    res.send(`
        <div style="font-family: Arial, sans-serif; margin: 20px;">
        <h1>Dados do Apartamento ${apt}</h1>
                <p><strong>Responsável:</strong> ${responsavel}</p>
                <hr>
                </h2><strong>Dados Do Morador</strong></h2>

                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>CPF:</strong> ${cpf}</p>
                <p><strong>Data de Nascimento:</strong> ${dtn}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Grau de Parentesco:</strong> ${grau}</p>


        </div>
              `);
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});