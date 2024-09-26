import express, { Request, Response } from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response) => {
    res.status(500).json({ error: err.message || 'Algo deu errado!' });
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
