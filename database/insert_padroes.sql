-- TB_Profile
INSERT INTO evt.tb_profile
(nm_profile)
VALUES('Administrador');

INSERT INTO evt.tb_profile
(nm_profile)
VALUES('Coordenador');

INSERT INTO evt.tb_profile
(nm_profile)
VALUES('Professor');

INSERT INTO evt.tb_profile
(nm_profile)
VALUES('Aluno');

-- TB_User
INSERT INTO evt.tb_user
(
	id_profile
	, nm_first_name
	, nm_last_name
	, cd_enrollment
	, tx_email
	, tx_senha
)
values
(
	1,
	'Admin', 
	'Admin', 
	'001', 
	'vitorfigmartins@gmail.com', 
	'admin123'
);

INSERT INTO evt.tb_user
(
	id_profile
	, nm_first_name
	, nm_last_name
	, cd_enrollment
	, tx_email
	, tx_senha
)
values
(
	2,
	'Daniel', 
	'De Oliveira', 
	'002', 
	'daniel@gmail.com', 
	'daniel123'
);

INSERT INTO evt.tb_user
(
	id_profile
	, nm_first_name
	, nm_last_name
	, cd_enrollment
	, tx_email
	, tx_senha
)
values
(
	3,
	'Anderson', 
	'Nascimento', 
	'003', 
	'anderson@gmail.com', 
	'anderson123'
);

INSERT INTO evt.tb_user
(
	id_profile
	, nm_first_name
	, nm_last_name
	, cd_enrollment
	, tx_email
	, tx_senha
)
values
(
	4,
	'Vitor', 
	'Martins', 
	'5306323', 
	'vitorfigmartins@gmail.com', 
	'vitor123'
);

-- TB_Professor
INSERT INTO evt.tb_professor
(id_user, id_insertion_user, dh_insertion)
VALUES(2, 1, '2020-01-20 11:03:32');

INSERT INTO evt.tb_professor
(id_user, id_insertion_user, dh_insertion)
VALUES(3, 1, '2020-01-20 11:03:33');

-- TB_Term
INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('1', '1º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('2', '2º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('3', '3º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('4', '4º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('5', '5º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('6', '6º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('7', '7º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('8', '8º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('9', '9º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('10', '10º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('11', '11º Período');

INSERT INTO evt.tb_term
(cd_term, nm_term)
VALUES('12', '12º Período');

-- TB_Local
INSERT INTO evt.tb_local
(nm_local, cd_room, cd_floor, cd_zip_code, cd_location_number, tx_complement, id_insertion_user, dh_insertion)
VALUES('Cinema 2 Shopping Unigranrio', '2', '3', '25071-202', '1160', 'Cinema 2', 1, now());









