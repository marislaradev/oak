CREATE TABLE controle_entregas (
    id SERIAL PRIMARY KEY,
    data_entrega DATE NOT NULL,
    tipo_entrega VARCHAR(20) NOT NULL CHECK (tipo_entrega IN ('rápida', 'programada', 'manual', 'transferencia')),
    numero_pedido NUMERIC(9, 0),
    entregador_id INT NOT NULL REFERENCES entregadores(id),
    nome_atendente VARCHAR(20) NOT NULL
);

