import React, { useEffect, useState } from "react";
import {
    addInovasi,
    getInovasiById,
    updateInovasi,
} from "../../services/InovasiService";
import { Link, useParams } from "react-router-dom";

function AddInovasiComponent() {
    const [judulInovasi, setJudulInovasi] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [kategori, setKategori] = useState("");
    const [tanggalSubmit, setTanggalSubmit] = useState("");
    const [pengusul, setPengusul] = useState("");
    const [unit, setUnit] = useState("");
    const [manfaat, setManfaat] = useState("");
    const [potensiSaving, setPotensiSaving] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const { ino_id } = useParams();

    useEffect(() => {
        if (ino_id) {
            const fetchInovasi = async () => {
                try {
                    const response = await getInovasiById(ino_id);
                    const data = response.data;

                    setJudulInovasi(data.judul_inovasi);
                    setDeskripsi(data.deskripsi);
                    setKategori(data.kategori);
                    setTanggalSubmit(data.tanggal_submit);
                    setPengusul(data.pengusul);
                    setUnit(data.unit);
                    setManfaat(data.manfaat);
                    setPotensiSaving(data.potensi_savings);
                } catch (error) {
                    console.error("Error fetching inovasi data: ", error);
                    setError("Gagal mengambil data inovasi.");
                }
            };

            fetchInovasi();
        }
    }, [ino_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            if (ino_id) {
                const newInovasi = {
                    ino_id: ino_id,
                    ino_judul: judulInovasi,
                    ino_deskripsi: deskripsi,
                    ino_kategori: kategori,
                    ino_tanggalsubmit: tanggalSubmit,
                    ino_pengusul: pengusul,
                    ino_unit: unit,
                    ino_manfaat: manfaat,
                    ino_potensi_savings: potensiSaving,
                };

                await updateInovasi(newInovasi);
                setSuccessMessage("Inovasi berhasil diubah!");
                setDeskripsi("");
                setKategori("");
                setTanggalSubmit("");
                setPengusul("");
                setUnit("");
                setManfaat("");
                setPotensiSaving("");
            }
            else {
                const newInovasi = {
                    ino_judul: judulInovasi,
                    ino_deskripsi: deskripsi,
                    ino_kategori: kategori,
                    ino_tanggalsubmit: tanggalSubmit,
                    ino_pengusul: pengusul,
                    ino_unit: unit,
                    ino_manfaat: manfaat,
                    ino_potensi_savings: potensiSaving,
                };

                await addInovasi(newInovasi);
                setSuccessMessage("Inovasi berhasil ditambahkan!");
                setDeskripsi("");
                setKategori("");
                setTanggalSubmit("");
                setPengusul("");
                setUnit("");
                setManfaat("");
                setPotensiSaving("");
            }
            
        } catch (error) {
            console.error("Error adding inovasi:", error);
            setError("Gagal menyimpan inovasi. Silahkan coba lagi.");
        }
    };

    return (
        <div className="container mt-4">
            {ino_id ? <h2>Ubah Inovasi</h2> : <h2>Tambah Inovasi</h2>}
            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="judulInovasi" className="form-label">
                        Judul
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="judulInovasi"
                        value={judulInovasi}
                        onChange={(e) => setJudulInovasi(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="deskripsi" className="form-label">
                        Deskripsi
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="deskripsi"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="kategori" class="form-label">Kategori</label>
                    <select id="kategori" class="form-select">
                        <option>- Pilih Kategori -</option>
                        <option>SS</option>
                        <option>Non-SS</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="tanggalSubmit" className="form-label">
                        Tanggal Submit
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="tanggalSubmit"
                        value={tanggalSubmit}
                        onChange={(e) => setTanggalSubmit(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pengusul" className="form-label">
                        Pengusul
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="pengusul"
                        value={pengusul}
                        onChange={(e) => setPengusul(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="unit" className="form-label">
                        Unit
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="unit"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="manfaat" className="form-label">
                        Manfaat
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="manfaat"
                        value={manfaat}
                        onChange={(e) => setManfaat(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="potensiSaving" className="form-label">
                        Potensi Saving
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="potensiSaving"
                        value={potensiSaving}
                        onChange={(e) => setPotensiSaving(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    {ino_id ? "Ubah Inovasi" : "Tambah Inovasi"}
                </button>
                <Link to="/list-inovasi" className="btn btn-secondary ms-2">
                    Kembali ke List Inovasi
                </Link>
            </form>
        </div>
    );
}

export default AddInovasiComponent;
