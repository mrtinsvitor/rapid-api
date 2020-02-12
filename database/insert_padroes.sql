
INSERT INTO evt.tb_professor
(nm_first_name, nm_last_name, tx_email, tx_password, dh_insertion)
VALUES('Admin', 'Admin', 'admin@admin.com', null, now());

INSERT INTO evt.tb_professor
(nm_first_name, nm_last_name, tx_email, tx_password, dh_insertion)
VALUES('Daniel', 'De Oliveira', 'daniel@gmail.com', null, now());

INSERT INTO evt.tb_professor
(nm_first_name, nm_last_name, tx_email, tx_password, dh_insertion)
VALUES('Anderson', 'Nascimento', 'anderson@gmail.com', null, now());

-- TB_Term
INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('1', '1º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('2', '2º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('3', '3º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('4', '4º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('5', '5º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('6', '6º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('7', '7º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('8', '8º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('9', '9º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('10', '10º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('11', '11º Período', '2020-02-12 17:17:05');

INSERT INTO evt.tb_term
(cd_term, nm_term, dh_insertion)
VALUES('12', '12º Período', '2020-02-12 17:17:05');

-- TB_Local
INSERT INTO evt.tb_local
(nm_local, cd_room, cd_floor, cd_zip_code, cd_location_number, tx_complement, dh_insertion)
VALUES('Cinema 2 Shopping Unigranrio', '2', '3', '25071-202', '1160', 'Cinema 2', now());


-- TB_Study_Field
INSERT into evt.tb_study_field (nm_study_field, dh_insertion) VALUES('Ciências Agrárias', now());
INSERT INTO evt.tb_study_field (nm_study_field, dh_insertion) VALUES('Ciências Biológicas', now());
INSERT INTO evt.tb_study_field (nm_study_field, dh_insertion) VALUES('Ciências da Saúde', now());
INSERT INTO evt.tb_study_field (nm_study_field, dh_insertion) VALUES('Ciências Exatas e da Terra', now());
INSERT INTO evt.tb_study_field (nm_study_field, dh_insertion) VALUES('Ciências Humanas', now());
INSERT INTO evt.tb_study_field (nm_study_field, dh_insertion) VALUES('Ciências Sociais Aplicadas', now());
INSERT INTO evt.tb_study_field (nm_study_field, dh_insertion) VALUES('Engenharias', now());
INSERT INTO evt.tb_study_field (nm_study_field, dh_insertion) VALUES('Linguística, Letras E Artes', now());


-- TB_Professor
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Pablo', 'O''Lehane', 'polehane0@drupal.org', '2020-01-15');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Shaw', 'Geistbeck', 'sgeistbeck1@tamu.edu', '2019-06-10');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Hester', 'Kiddey', 'hkiddey2@whitehouse.gov', '2019-12-08');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Waldon', 'Kynoch', 'wkynoch3@yandex.ru', '2019-12-07');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Eldredge', 'Lamburne', 'elamburne4@cisco.com', '2019-07-29');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Merry', 'Farndell', 'mfarndell5@admin.ch', '2020-01-26');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Ariana', 'Bruyntjes', 'abruyntjes6@dyndns.org', '2019-03-29');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Pam', 'Farguhar', 'pfarguhar7@flavors.me', '2019-08-15');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Jerry', 'Casoni', 'jcasoni8@tinypic.com', '2019-09-13');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Maurine', 'Vanne', 'mvanne9@mayoclinic.com', '2019-05-07');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Putnam', 'MacGray', 'pmacgraya@amazon.co.jp', '2020-01-23');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Iolande', 'Giacaponi', 'igiacaponib@baidu.com', '2019-08-21');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Arielle', 'Ziehms', 'aziehmsc@webmd.com', '2019-12-10');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Laney', 'Carmont', 'lcarmontd@desdev.cn', '2020-01-26');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Candida', 'Dockrell', 'cdockrelle@ihg.com', '2019-11-23');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Abel', 'Ryrie', 'aryrief@sfgate.com', '2019-03-02');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Jackson', 'Durnall', 'jdurnallg@si.edu', '2019-06-22');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Kimberlee', 'Aucutt', 'kaucutth@sbwire.com', '2019-06-20');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Carlye', 'Wurst', 'cwursti@irs.gov', '2019-05-23');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Janna', 'Gyngyll', 'jgyngyllj@rakuten.co.jp', '2019-09-22');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Ursola', 'Caisley', 'ucaisleyk@ovh.net', '2019-04-04');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Mabel', 'Sweetman', 'msweetmanl@imageshack.us', '2019-08-09');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Auria', 'MacEntee', 'amacenteem@google.es', '2019-12-26');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Gladi', 'Twidle', 'gtwidlen@umn.edu', '2019-07-28');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Beatrice', 'Scading', 'bscadingo@smh.com.au', '2019-12-28');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Brnaby', 'Grimsdike', 'bgrimsdikep@geocities.jp', '2019-12-18');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Hyatt', 'Claire', 'hclaireq@cbsnews.com', '2019-04-09');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Ase', 'McElvogue', 'amcelvoguer@reddit.com', '2019-06-05');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Clemente', 'McQuilkin', 'cmcquilkins@elegantthemes.com', '2019-11-10');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Niel', 'Wakeham', 'nwakehamt@hibu.com', '2019-09-23');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Syman', 'Lummasana', 'slummasanau@instagram.com', '2019-05-24');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Doy', 'Greiswood', 'dgreiswoodv@state.tx.us', '2019-05-03');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Ronalda', 'Broadbent', 'rbroadbentw@walmart.com', '2019-06-11');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Des', 'Colquhoun', 'dcolquhounx@tiny.cc', '2019-02-15');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Nicholas', 'Claringbold', 'nclaringboldy@bloglines.com', '2019-09-01');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Merilyn', 'Michurin', 'mmichurinz@tuttocitta.it', '2019-12-09');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Tonnie', 'Halleday', 'thalleday10@zimbio.com', '2019-03-20');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Iona', 'Swanton', 'iswanton11@bravesites.com', '2019-09-01');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Laverna', 'Cheatle', 'lcheatle12@hhs.gov', '2019-02-16');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Rees', 'Mohun', 'rmohun13@prweb.com', '2020-02-09');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Zita', 'Jefferys', 'zjefferys14@multiply.com', '2019-04-27');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Sena', 'Cundict', 'scundict15@google.fr', '2020-01-15');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Luz', 'Willisch', 'lwillisch16@desdev.cn', '2019-10-01');
insert into evt.tb_professor (nm_first_name, nm_last_name, tx_email, dh_insertion) values ('Stanley', 'Morstatt', 'smorstatt17@woothemes.com', '2020-01-19');


-- TB_Course
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(3, 8, 'Administração', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(4, 7, 'Análise e Desenvolvimento de Sistemas', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(5, 1, 'Arquitetura e Urbanismo', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(6, 6, 'Bacharelado em Direito', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(7, 3, 'Biomedicina', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(8, 7, 'Ciências Biológicas', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(9, 2, 'Ciências Contábeis', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(10, 7, 'Ciências Econômicas', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(11, 1, 'Design Gráfico', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(12, 2, 'Design de Moda', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(13, 5, 'Educação Física', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(14, 8, 'Enfermagem', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(15, 4, 'Engenharia Civil', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(16, 4, 'Engenharia Química', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(17, 4, 'Engenharia de Produção', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(18, 4, 'Estética e Cosmética', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(19, 1, 'Farmácia', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(20, 5, 'Fisioterapia', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(21, 4, 'Física', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(22, 1, 'Gestao Comercial', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(23, 4, 'Gestão Ambiental', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(24, 7, 'Gestão Financeira', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(25, 3, 'Gestão de Recursos Humanos', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(26, 7, 'História', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(27, 2, 'Jornalismo', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(28, 8, 'Letras', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(29, 5, 'Letras Português - Inglês', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(30, 5, 'Logística', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(31, 7, 'Marketing', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(32, 1, 'Matemática', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(33, 6, 'Medicina', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(34, 1, 'Medicina Veterinária', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(35, 8, 'Nutrição', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(36, 7, 'Odontologia', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(37, 8, 'Pedagogia', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(38, 5, 'Processos Gerenciais', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(39, 3, 'Psicologia', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(40, 5, 'Publicidade e Propaganda', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(41, 8, 'Química', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(42, 3, 'Radiologia', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(43, 1, 'Redes de Computadores', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(44, 3, 'Serviço Social', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(45, 8, 'Sistemas de Informação', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(46, 8, 'Teologia', now());
INSERT INTO evt.tb_course (id_professor_coordinator, id_study_field, nm_course, dh_insertion) VALUES(47, 8, 'Web Design - Sistemas para internet', now());


-- TB_Student
INSERT INTO evt.tb_student
(id_course, id_term, nm_first_name, nm_last_name, tx_email, qt_complementary_hours, dh_insertion)
VALUES(1, 1, 'Admin', 'Admin', 'admin@admin.com', 10, now());

INSERT INTO evt.tb_student
(id_course, id_term, nm_first_name, nm_last_name, tx_email, qt_complementary_hours, dh_insertion)
VALUES(45, 8, 'Vitor', 'Figueira Martins', 'vitorfigmartins@gmail.com', 200, now());

