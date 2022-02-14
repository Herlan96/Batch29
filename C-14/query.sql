--SQLite3 university.db
create table jurusan(
kodejurusan varchar primary key not null, 
namajurusan varchar not null
);

insert into jurusan(kodejurusan, namajurusan) values ('61201', 'manajemen');--menambahkan

create table mahasiswa(
nim varchar primary key not null, 
nama varchar,
alamat varchar, 
jurusan varchar, 
FOREIGN KEY(jurusan) REFERENCES jurusan(kodejurusan)
);

insert into mahasiswa(nim, nama, alamat, jurusan) values ('143402182', 'herlan', 'tasik', '61201');

create table dosen(
kodedosen varchar primary key not null,
nama varchar
);

insert into dosen(kodedosen, nama) values ('d1', 'rubi');

create table matakuliah(
kodematkul varchar primary key not null, 
nama varchar, 
sks integer
);

insert into matakuliah(kodematkul, nama, sks) values ('m1', 'teknik komunikasi data', '3');

-- foreign key ada key yang ada di setiap tabel

create table kontrak(
id integer primary key autoincrement, 
nim varchar not null, 
kodematkul varchar not null, 
kodedosen varchar not null,
nilai varchar,
FOREIGN KEY(nim) REFERENCES mahasiswa(nim)--key nim yang terdapat mahasiswa dengan nim
FOREIGN KEY(kodematkul) REFERENCES matakuliah(kodematkul)
FOREIGN KEY(kodedosen) REFERENCES dosen(kodedosen)
);

insert into kontrak(nim, kodematkul, kodedosen) values ('143402182', 'm1', 'd1');
