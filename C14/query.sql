SQLite3 University.db

create table jurusan(kodejurusan varchar primary key not null, namajurusan varchar not null);
insert into jurusan(kodejurusan varchar primary key not null, namajurusan varchar) values ('61201', 'Manajemen');--menambahkan

create table Mahasiswa(Nim varchar primary key not null, Name varchar, Alamat varchar, jurusan varchar, FOREIGN KEY(jurusan) REFERENCES jurusan(kodejurusan));
insert into Mahasiswa(Nim,Nama,Alamat,Jurusan) values ('143402182', 'Herlan', 'Tasik', 'Manajemen');

create table dosen(kodedosen varchar primary key not null,nama varchar);
insert into dosen(kodedosen, nama)values('d1', 'rubi');

create table matakuliah(kodematkul varchar primary key not null, nama varchar, Sks integer);
insert into matakuliah(kodematkul, nama, Sks)values('01', 'rubi', '3');

-- foreign key ada key yang ada di setiap tabel

create table kontrak(id integer primary key autoincrement, 
    nim varchar null, 
    kodematkul varchar not null, 
    kodedosen varchar not null,
    nilai varchar,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim)--key nim yang terdapat mahasiswa dengan nim
    FOREIGN KEY(kodematkul) REFERENCES matakuliah(kodematkul)
    FOREIGN KEY(kodedosen) REFERENCES dosen(kodedosen));