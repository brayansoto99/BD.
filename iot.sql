drop database if exists iot;
create database if not exists iot;
use iot;
create table if not exists usuario(
usuario varchar(30) not null,
pass varchar(13)not null,
correo varchar(50) not null)
engine=InnoDB;
desc usuario;

insert into usuario value("brayan","1234","brayan.soto@gmail.com");
select * from usuario;