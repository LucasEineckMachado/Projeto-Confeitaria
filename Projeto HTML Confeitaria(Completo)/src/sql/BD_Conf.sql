Create Database Confeitaria
default character set utf8
default collate utf8_general_ci;

Use Confeitaria;

Create Table Cadastro(
Id_Cadastro int unsigned not null auto_increment,
Nome varchar(30) not null unique,
Sexo enum('M','F'),
Data_Nasc date,
CPF varchar(20),
Num_tel varchar(20),
Primary Key (Id_Cadastro)
)default charset = utf8;

Desc Cadastro;
Select* from Cadastro;

Create Table Cardapio(
Id_Card int unsigned not null  auto_increment,
Bolos set('Chocolate','Morango','Prestígio', 'Churros'),
Preço_Uni decimal(5,2) unsigned not null,
Primary Key(Id_Card)
)default charset = utf8;

Desc Cardapio;
Select* from Cardapio;

Create Table Pedido(
Id_Pedido int unsigned not null auto_increment,
Num_Pedido int unsigned,
Quantidade int unsigned not null,
Preço_Pago decimal(5,2) unsigned not null,
Endereco varchar(20),
Cod_Pedido int unsigned,
Tempo_Entrega Varchar(10) not null,
Primary Key (Id_Pedido),
Foreign Key (Cod_Pedido) references Cadastro (Id_Cadastro)
)default charset = utf8;

Desc Pedido;
Select* from Pedido;

Drop Database Confeitaria;