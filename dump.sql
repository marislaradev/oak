create table products (
	id serial primary key,
    name varchar(255) not null, 
    description text not null, 
    value numeric(10, 2) not null,
    available boolean not null
);
