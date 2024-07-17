CREATE TABLE IF NOT EXISTS Personajes (
    id INT NOT NULL AUTO_INCREMENT,
    name text,
    age int,
    gender text,
    species text,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    PRIMARY KEY (id)
);

insert into Personajes (name, age, gender, species) values 
    ('Yuji Itadori','16','masculino','humano'),
    ('Megumi Fushiguro','15','masculino', 'humano' ),
    ('Nobara Kugisaki','15','Femenino', 'humano' ),
    ('Satoru Gojo','15','masculino', 'humano' ),
    ('Sukuna','28','masculino', 'Rey Demonio' ),
    ('Junpei Yoshino','2000','masculino', 'humano' ),
    ('Maki Zenin','15','Femenino', 'Homano' ),
    ('Toge Inumaki','15','masculino', 'humano' ),
    ('Panda','1000','Indefinodo', 'Oso Panda' ),
    ('jogo','1000','masculino', 'Rey Demonio');