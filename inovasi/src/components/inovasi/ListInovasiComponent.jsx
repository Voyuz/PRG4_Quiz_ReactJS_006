import React, { useEffect, useState } from "react";
import { listInovasi, deleteInovasi } from "../../services/InovasiService";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ListInovasiComponent() {
    const [inovasiData, setInovasiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInovasi = async () => {
            try {
                const response = await listInovasi();
                setInovasiData(response.data);
            } catch (error) {
                console.error("Error fetching inovasi data: ", error);
                setError("Gagal mengambil data inovasi.");
            } finally {
                setLoading(false);
            }
        };

        fetchInovasi();
    }, []);

    const handleDelete = async (idInovasi) => {
        Swal.fire({
            title: "Anda yakin ingin menghapus data ini ?",
            text: "Kamu tidak bisa mengulang kembali!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteInovasi(idInovasi);
                    Swal.fire({
                        title: "Terhapus!",
                        text: "Data telah berhasil dihapus.",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    });

                    fetchInovasi();
                } catch (error) {
                    console.error("Gagal menghapus inovasi:", error);
                    Swal.fire({
                        title: "Gagal!",
                        text: "Terjadi kesalahan saat menghapus inovasi.",
                        icon: "error",
                    });
                }
            }
        });
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <h4>Loading...</h4>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">List Inovasi</h2>
            <Link to="/tambah-produk" className="btn btn-primary mb-3">
                Add Inovasi
            </Link>
            {error && <div className="alert alert-danger">{error}</div>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">No</th>
                        <th className="text-center">Judul</th>
                        {/* <th className="text-center">Deskripsi</th> */}
                        <th className="text-center">Kategori</th>
                        {/* <th className="text-center">Tanggal Submit</th> */}
                        <th className="text-center">Pengusul</th>
                        <th className="text-center">Unit</th>
                        {/* <th className="text-center">Manfaat</th> */}
                        <th className="text-center">Potensi Saving</th>
                        <th className="text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {inovasiData.length > 0 ? (
                        inovasiData.map((item) => (
                            <tr key={item.ino_id}>
                                <td className="text-end">{item.ino_id}</td>
                                <td>{item.ino_judul}</td>
                                <td>{item.ino_kategori}</td>
                                <td>{item.ino_pengusul}</td>
                                <td>{item.ino_unit}</td>
                                <td className="text-end">
                                    {Number(item.ino_potensi_savings).toLocaleString(
                                        "id-ID",
                                        { style: "currency", currency: "IDR" }
                                    )}{" "}
                                    IDR
                                </td>
                                <td className="text-center">
                                    <Link
                                        to={`/edit-produk/${item.ino_id}`}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">
                                Tidak ada inovasi yang ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListInovasiComponent;

