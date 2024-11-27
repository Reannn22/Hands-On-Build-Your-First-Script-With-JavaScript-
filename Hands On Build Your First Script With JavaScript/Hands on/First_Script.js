const prompt = require('prompt-sync')();

// Array untuk menyimpan daftar tugas
let toDoList = [];

function showMenu() {
  console.log('\n--- Menu Utama ---');
  console.log('1. Tambah Tugas');
  console.log('2. Lihat Tugas');
  console.log('3. Update Tugas');
  console.log('4. Hapus Tugas');
  console.log('5. Keluar');
}

function addTask() {
  const task = prompt('Masukkan tugas baru: ');
  toDoList.push(task);
  console.log(`Tugas "${task}" berhasil ditambahkan.`);
}

function viewTasks() {
  if (toDoList.length === 0) {
    console.log('Belum ada tugas.');
  } else {
    console.log('\n--- Daftar Tugas ---');
    toDoList.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

function updateTask() {
  viewTasks();
  const index = parseInt(prompt('Masukkan nomor tugas yang ingin diupdate: '), 10);
  if (index > 0 && index <= toDoList.length) {
    const newTask = prompt('Masukkan tugas baru: ');
    toDoList[index - 1] = newTask;
    console.log('Tugas berhasil diupdate.');
  } else {
    console.log('Nomor tugas tidak valid.');
  }
}

function deleteTask() {
  viewTasks();
  const index = parseInt(prompt('Masukkan nomor tugas yang ingin dihapus: '), 10);
  if (index > 0 && index <= toDoList.length) {
    const removedTask = toDoList.splice(index - 1, 1);
    console.log(`Tugas "${removedTask}" berhasil dihapus.`);
  } else {
    console.log('Nomor tugas tidak valid.');
  }
}

// Program Utama
let running = true;
while (running) {
  showMenu();
  const choice = prompt('Pilih menu: ');

  switch (choice) {
    case '1':
      addTask();
      break;
    case '2':
      viewTasks();
      break;
    case '3':
      updateTask();
      break;
    case '4':
      deleteTask();
      break;
    case '5':
      running = false;
      console.log('Program selesai.');
      break;
    default:
      console.log('Pilihan tidak valid, coba lagi.');
  }
}
