drop table if exists suggestions;
drop table if exists drugs;
drop table if exists mechanisms;
drop table if exists mechanismof;
drop table if exists suggestions;
drop table if exists developmentstatus;

CREATE TABLE drugs (
        d_id int not null primary key,
        name VARCHAR(30),
        name_code VARCHAR(30),
        name_generic VARCHAR(30),
        name_brand VARCHAR(30)
);

CREATE TABLE mechanisms(
        m_id int not null primary key,
        name VARCHAR(30)
);

CREATE TABLE mechanismof(
        m_id int references mechanisms,
        d_id int references drugs,
        primary key(m_id, d_id)
);


CREATE TABLE suggestions (
  suggestion_id int not null primary key,
  name VARCHAR(30),
  type VARCHAR(30)
);

CREATE TABLE developmentstatus(
        c_id int not null primary key,
        p_id int,
        condition VARCHAR(30),
        year date,
        organization VARCHAR(30),
        administration VARCHAR(30),
        d_id int not null references drugs
);