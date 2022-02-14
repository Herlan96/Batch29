-- SQLite3 university.db
create table jurusan(
kodejurusan varchar primary key not null, 
namajurusan varchar not null
);

insert into jurusan(kodejurusan, namajurusan) values ('93402', 'parawisata');
insert into jurusan(kodejurusan, namajurusan) values ('61201', 'manajemen');
insert into jurusan(kodejurusan, namajurusan) values ('61405', 'penerbangan');
insert into jurusan(kodejurusan, namajurusan) values ('55201', 'ilmu komputer');

create table mahasiswa(
nim varchar primary key not null, 
nama varchar,
alamat varchar, 
jurusan varchar,
tanggal_lahir date, 
FOREIGN KEY(jurusan) REFERENCES jurusan(kodejurusan)
);

insert into mahasiswa(nim, nama, alamat, jurusan, tanggal_lahir) 
values ('201812022', 'eza', 'bandung', '93402', '2000-12-03'),
('143402182', 'herlan', 'tasik', '61201', '2001-12-02'),
('201804012', 'acep', 'karawang', '59201', '2002-12-02'),
('201412020', 'faiz', 'tangerang', '61405', '2003-12-01');

create table dosen(
kodedosen varchar primary key not null,
nama varchar
);

insert into dosen(kodedosen, nama) values ('d1', 'rubi');
insert into dosen(kodedosen, nama) values ('d2', 'yudi');

create table matakuliah(
kodematkul varchar primary key not null, 
nama varchar, 
sks integer
);

insert into matakuliah(kodematkul, nama, sks) values ('m1', 'jaringan komputer', '3');
insert into matakuliah(kodematkul, nama, sks) values ('m2', 'komunikasi bisnis', '3');
insert into matakuliah(kodematkul, nama, sks) values ('m3', 'kewirausahaan', '3');
insert into matakuliah(kodematkul, nama, sks) values ('m4', 'data mining', '3');

-- foreign key ada key yang ada di setiap tabel

create table kontrak(
id integer primary key autoincrement, 
nim varchar not null, 
kodematkul varchar not null, 
kodedosen varchar not null,
nilai varchar,
FOREIGN KEY(nim) REFERENCES mahasiswa(nim)--key nim yang terdapat pada tabel mahasiswa
FOREIGN KEY(kodematkul) REFERENCES matakuliah(kodematkul)
FOREIGN KEY(kodedosen) REFERENCES dosen(kodedosen)
);

insert into kontrak(nim, kodematkul, kodedosen, nilai) 
values ('143402182', 'm1', 'd1', '75'),
('143402182', 'm2', 'd1', '85'),
('143402182', 'm3', 'd1', '95');

-- menampilkan data mahasiswa beserta nama jurusan
SELECT mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat, jurusan.namajurusan
FROM mahasiswa
INNER JOIN jurusan ON jurusan.kodejurusan=mahasiswa.jurusan;

UPDATE kontrak
SET nilai = 'A'
WHERE id=1
;
UPDATE kontrak
SET nilai = 'B'
WHERE id=2
;
UPDATE kontrak
SET nilai = 'D'
WHERE id=3
;
UPDATE kontrak
SET nilai = 'E'
WHERE id=4
;


SELECT * FROM matakuliah WHERE sks > 10

select nama_kolom1, nama_kolom2,... FROM nama_tabel WHERE kondisi


