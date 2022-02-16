-- SQLite3 university.db
CREATE TABLE jurusan(
    kodejurusan VARCHAR PRIMARY KEY NOT NULL,
    namajurusan VARCHAR NOT NULL
);

INSERT INTO
    jurusan(kodejurusan, namajurusan)
VALUES
    ('93402', 'parawisata');

INSERT INTO
    jurusan(kodejurusan, namajurusan)
VALUES
    ('61201', 'manajemen');

INSERT INTO
    jurusan(kodejurusan, namajurusan)
VALUES
    ('61405', 'penerbangan');

INSERT INTO
    jurusan(kodejurusan, namajurusan)
VALUES
    ('55201', 'ilmu komputer');

CREATE TABLE mahasiswa(
    nim VARCHAR PRIMARY KEY NOT NULL,
    nama VARCHAR,
    alamat VARCHAR,
    jurusan VARCHAR,
    tanggal_lahir DATE,
    FOREIGN KEY(jurusan) REFERENCES jurusan(kodejurusan)
);

INSERT INTO
    mahasiswa(nim, nama, alamat, jurusan, tanggal_lahir)
VALUES
    (
        '201812022',
        'eza',
        'bandung',
        '93402',
        '2000-12-03'
    ),
    (
        '143402182',
        'herlan',
        'tasik',
        '61201',
        '2001-12-02'
    ),
    (
        '201804012',
        'acep',
        'karawang',
        '59201',
        '2002-12-04'
    ),
    (
        '201412020',
        'faiz',
        'tangerang',
        '61405',
        '2003-12-01'
    );

CREATE TABLE dosen(
    kodedosen VARCHAR PRIMARY KEY NOT NULL,
    nama VARCHAR
);

INSERT INTO
    dosen(kodedosen, nama)
VALUES
    ('d1', 'rubi');

INSERT INTO
    dosen(kodedosen, nama)
VALUES
    ('d2', 'yudi');

CREATE TABLE matakuliah(
    kodematkul VARCHAR PRIMARY KEY NOT NULL,
    nama VARCHAR,
    sks INTEGER
);

INSERT INTO
    matakuliah(kodematkul, nama, sks)
VALUES
    ('mk1', 'jaringan komputer', '3');

INSERT INTO
    matakuliah(kodematkul, nama, sks)
VALUES
    ('mk2', 'komunikasi bisnis', '3');

INSERT INTO
    matakuliah(kodematkul, nama, sks)
VALUES
    ('mk3', 'kewirausahaan', '3');

INSERT INTO
    matakuliah(kodematkul, nama, sks)
VALUES
    ('mk4', 'data mining', '3');

-- foreign KEY ada KEY yang ada di SETiap tabel
CREATE TABLE kontrak(
    id INTEGER PRIMARY KEY autoincrement,
    nim VARCHAR NOT NULL,
    kodematkul VARCHAR NOT NULL,
    kodedosen VARCHAR NOT NULL,
    nilai VARCHAR,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim) 
    FOREIGN KEY(kodematkul) REFERENCES matakuliah(kodematkul) 
    FOREIGN KEY(kodedosen) REFERENCES dosen(kodedosen)
);

INSERT INTO
    kontrak(nim, kodematkul, kodedosen, nilai)
VALUES
    ('143402182', 'mk4', 'd1', 'A'),
    ('143402182', 'mk2', 'd2', 'B'),
    ('143402182', 'mk3', 'd1', 'D'),
    ('143402182', 'mk1', 'd1', 'B'),
    ('201812022', 'mk1', 'd2', 'E'),
    ('201812022', 'mk4', 'd1', 'A'),
    ('201804012', 'mk3', 'd2', 'B'),
    ('201804012', 'mk1', 'd2', 'D');

-- no.1
SELECT
    mahasiswa.nim,
    mahasiswa.nama,
    mahasiswa.alamat,
    jurusan.namajurusan
FROM
    mahasiswa
    INNER JOIN jurusan ON mahasiswa.jurusan = jurusan.kodejurusan;

-- no.2
AFTER
    TABLE mahasiswa
ADD
    tanggal_lahir DATE;

UPDATE
    mahasiswa
SET
    tanggal_lahir = '2000-12-03'
WHERE
    nim = '201812022'
UPDATE
    mahasiswa
SET
    tanggal_lahir = '2001-12-02'
WHERE
    nim = '143402182'
UPDATE
    mahasiswa
SET
    tanggal_lahir = '2002-12-04'
WHERE
    nim = '201804012'
UPDATE
    mahasiswa
SET
    tanggal_lahir = '2003-12-01'
WHERE
    nim = '201412020'

SELECT
    nim,
    nama,
    (strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)) - (
        strftime('%m-%d', 'now') < strftime('%m-%d', tanggal_lahir)
    ) AS umur
FROM
    mahasiswa
WHERE
    umur < 20;


SELECT (strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)) - (strftime('%m-%d', 'now') < strftime('%m-%d', tanggal_lahir)) FROM mahasiswa;

-- no.3
SELECT
    mahasiswa.nim,
    mahasiswa.nama,
    kontrak.nilai
FROM
    mahasiswa 
    JOIN kontrak ON mahasiswa.nim = kontrak.nim
WHERE
    kontrak.nilai = 'A'
    OR kontrak.nilai = 'B';

-- no.4
SELECT
    mahasiswa.nim,
    mahasiswa.nama,
    SUM(matakuliah.sks) AS jumlahsks
FROM
    mahasiswa
    JOIN kontrak ON mahasiswa.nim = kontrak.nim
    JOIN matakuliah ON kontrak.kodematkul = matakuliah.kodematkul
GROUP BY
    mahasiswa.nim
HAVING
    jumlahsks > 10;

-- no.5
SELECT
    mahasiswa.nim,
    mahasiswa.nama,
    matakuliah.nama AS matakuliah
FROM
    mahasiswa 
    JOIN kontrak ON mahasiswa.nim = kontrak.nim
    JOIN matakuliah ON kontrak.kodematkul = matakuliah.kodematkul
WHERE
    matakuliah.nama = 'data mining';

-- no.6
SELECT
    dosen.kodedosen,
    dosen.nama,
    count(DISTINCT kontrak.nim) AS jumlahmahasiswa
FROM
    dosen
    JOIN kontrak ON dosen.kodedosen = kontrak.kodedosen
GROUP BY
    dosen.kodedosen,
    dosen.nama;

-- no.7
SELECT
    nim,
    nama,
    (
        strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
    ) - (
        strftime('%m-%d', 'now') < strftime('%m-%d', tanggal_lahir)
    ) AS umur
FROM
    mahasiswa
ORDER BY
    umur ASC;

-- no.8
-- JOIN mode
SELECT
    mahasiswa.nim,
    mahasiswa.nama,
    mahasiswa.alamat,
    mahasiswa.jurusan,
    dosen.kodedosen,
    dosen.nama AS dosen,
    matakuliah.kodematkul,
    matakuliah.nama,
    matakuliah.sks,
    kontrak.nilai
FROM
    mahasiswa
    JOIN jurusan ON mahasiswa.jurusan = jurusan.kodejurusan
    JOIN kontrak ON mahasiswa.nim = kontrak.nim
    JOIN dosen ON kontrak.kodedosen = dosen.kodedosen
    JOIN matakuliah ON kontrak.kodematkul = matakuliah.kodematkul
WHERE
    kontrak.nilai = 'D'
    OR kontrak.nilai = 'E';

-- WHERE mode
SELECT
mahasiswa.nim,
mahasiswa.nama,
mahasiswa.alamat,
mahasiswa.jurusan,
dosen.kodedosen,
dosen.nama AS dosen,
matakuliah.kodematkul,
matakuliah.nama,
matakuliah.sks,
kontrak.nilai
FROM
    mahasiswa,
    jurusan,
    kontrak,
    dosen,
    matakuliah 
WHERE
    mahasiswa.jurusan = jurusan.kodejurusan
    AND mahasiswa.nim = kontrak.nim
    AND kontrak.kodedosen = dosen.kodedosen
    AND kontrak.kodematkul = matakuliah.kodematkul
    AND (
        kontrak.nilai = 'D'
        OR kontrak.nilai = 'E'
    );
