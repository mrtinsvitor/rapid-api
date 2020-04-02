create schema evt;

create table evt.tb_term (
	id_term					smallserial			not null,
	cd_term					varchar(2)			not null,
	nm_term					varchar(20)			not NULL,
	dh_insertion			timestamp			NOT NULL,
	dh_update				timestamp			null
);

alter table evt.tb_term add constraint pk_term primary key (id_term);
--

create table evt.tb_professor (
	id_professor			serial			not null,
	nm_first_name			varchar(20)		not null,
	nm_last_name			varchar(80)		null,
	cd_enrollment			serial			not null,
	tx_email				varchar(254)	not null,
	ph_photo				text			null,
	dh_insertion			timestamp		NOT NULL,
	dh_update				timestamp		null
);

alter sequence evt.tb_professor_cd_enrollment_seq restart with 111111 increment by 7;
alter table evt.tb_professor add constraint pk_professor primary key (id_professor);


create table evt.tb_study_field (
	id_study_field					serial			not null,
	nm_study_field					varchar(60)		NOT NULL,
	dh_insertion					timestamp		not NULL,
	dh_update						timestamp		null
);

alter table evt.tb_study_field add constraint pk_study_field primary key (id_study_field);


create table evt.tb_course (
	id_course 						serial			not null,
	id_professor_coordinator		int				not null,
	id_study_field					int				not null,
	nm_course						varchar(80) 	not null,
	dh_insertion					timestamp		not NULL,
	dh_update						timestamp		null
);

alter table evt.tb_course add constraint pk_course primary key (id_course);
alter table evt.tb_course add constraint fk_course_coordinator foreign key (id_professor_coordinator) references evt.tb_professor(id_professor);
alter table evt.tb_course add constraint fk_course_study_field foreign key (id_study_field) references evt.tb_study_field(id_study_field);
create table evt.tb_student (
	id_student 					serial 			not null,
	id_course 					int				not null,
	id_term						smallint		null,
	nm_first_name				varchar(20)		not null,
	nm_last_name				varchar(80)		null,
	cd_enrollment				serial			not null,
	tx_email					varchar(254)	not null,
	qt_complementary_hours		int				NULL,
	ph_photo					text			null,
	dh_insertion				timestamp		NOT NULL,
	dh_update					timestamp		null
);

alter sequence evt.tb_student_cd_enrollment_seq restart with 222222 increment by 3;
alter table evt.tb_student add constraint pk_student primary key (id_student);
alter table evt.tb_student add constraint fk_student_course foreign key (id_course) references evt.tb_course(id_course);
alter table evt.tb_student add constraint fk_student_term foreign key (id_term) references evt.tb_term(id_term);

create table evt.tb_local (
	id_local						serial			not null,
	nm_local						varchar(120)	not null,
	cd_room							varchar(10)		null,
	cd_floor						char(1)			null,
	cd_zip_code						varchar(20)		null,
	cd_location_number				varchar(6)		null,
	tx_complement					varchar(220)	null,
	dh_insertion					timestamp		not null,
	dh_update						timestamp		null
);

alter table evt.tb_local add constraint pk_local primary key (id_local);


create table evt.tb_professor_course (
	id_professor_course		serial			not null,
	id_professor			int				not null,
	id_course				int				not null,
	dh_insertion			timestamp		not NULL,
	dh_update				timestamp		null
);

alter table evt.tb_professor_course add constraint pk_professor_course primary key (id_professor_course);
alter table evt.tb_professor_course add constraint fk_professor_course_professor foreign key (id_professor) references evt.tb_professor(id_professor);
alter table evt.tb_professor_course add constraint fk_professor_course_course foreign key (id_course) references evt.tb_course(id_course);

create table evt.tb_event (
	id_event					bigserial 		not null,
	id_local					int				not null,
	id_host_professor			int				NOT null,
	id_study_field				int				NOT NULL,
	nm_event					varchar(120)	not null,
	tx_description				text			NOT null,
	tx_target_audience			varchar(220)	null,
	qt_vacancy					int				null,
	qt_hours					int				null,
	vl_enrollment				decimal(12, 2)	null,
	ph_cover					bytea			null,
	dt_event					date			not null,
	dt_enrollment_ending		timestamp		null,
	hr_opening					time			not null,
	hr_ending					time			not null,
	dh_insertion				timestamp		not NULL,
	dh_update					timestamp		null
);

alter table evt.tb_event add constraint pk_event primary key (id_event);
alter table evt.tb_event add constraint fk_event_local foreign key (id_local) references evt.tb_local(id_local);
alter table evt.tb_event add constraint fk_event_host_professor foreign key (id_host_professor) references evt.tb_professor(id_professor);
alter table evt.tb_event add constraint fk_event_study_field foreign key (id_study_field) references evt.tb_study_field(id_study_field);

/*
create table evt.tb_event_course (
	id_event_course					bigserial		not null,
	id_event						bigint			not null,
	id_course						int				null,
	dh_insertion					timestamp		not NULL,
	dh_update						timestamp		null
);

alter table evt.tb_event_course add constraint pk_event_course primary key (id_event_course);
alter table evt.tb_event_course add constraint fk_event_course_event foreign key (id_event) references evt.tb_event (id_event);
alter table evt.tb_event_course add constraint fk_event_course_course foreign key (id_course) references evt.tb_course (id_course);*/


create table evt.tb_student_event_enrollment (
	id_student_event_enrollment		bigserial		not null,
	id_student						int				not null,
	id_event						bigint			not null,
	dh_enrollment					timestamp		not null,
	dh_participation				timestamp		null,
	dh_insertion					timestamp		not NULL,
	dh_update						timestamp		null
);

alter table evt.tb_student_event_enrollment add constraint pk_student_event_enrollment primary key (id_student_event_enrollment);
alter table evt.tb_student_event_enrollment add constraint fk_student_event_enrollment_student foreign key (id_student) references evt.tb_student (id_student);
alter table evt.tb_student_event_enrollment add constraint fk_student_event_enrollment_event foreign key (id_event) references evt.tb_event (id_event);

