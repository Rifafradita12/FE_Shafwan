import { useEffect, useState } from "react";

function Counter() {
  // Membuat state angka
  const [angka, setAngka] = useState(0);

  // Fungsi untuk menambahkan angka
  function addAngka() {
    setAngka(angka + 1);
  }

  useEffect(() => {
    // Menjalankan side effect: update DOM
    function manipulateDOM() {
      console.log("Lifecycle: Component mount/update");
      document.title = `Result: ${angka}`;
    }

    manipulateDOM();
  }, [angka]); // hanya dijalankan ketika angka berubah

  console.log("Lifecycle: Component render");

  return (
    <div>
      <p>Result: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
