function cekkode() {
    const kodebenar = "2025"
    const input = document.getElementById("kode").value.trim()
    const pesan = document.getElementById("pesan")


    if (input === kodebenar) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    } else {
        pesan.textContent = "kode salah masukan kode yang benar!!"
    }
}