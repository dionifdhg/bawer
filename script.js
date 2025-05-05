const usuarios = [
    { nombre: "Laura", edad: 26, ciudad: "Madrid", foto: "https://randomuser.me/api/portraits/women/65.jpg" },
    { nombre: "Carlos", edad: 30, ciudad: "Barcelona", foto: "https://randomuser.me/api/portraits/men/75.jpg" },
    { nombre: "Ana", edad: 24, ciudad: "Sevilla", foto: "https://randomuser.me/api/portraits/women/44.jpg" },
    { nombre: "Javi", edad: 28, ciudad: "Valencia", foto: "https://randomuser.me/api/portraits/men/60.jpg" },
    { nombre: "Sofía", edad: 29, ciudad: "Zaragoza", foto: "https://randomuser.me/api/portraits/women/33.jpg" },
  ];
  
  let indiceActual = 0;
  let likes = [];
  
  function mostrarUsuario() {
    const usuario = usuarios[indiceActual];
    const card = document.getElementById("perfil-card");
  
    if (!usuario) {
      card.innerHTML = "<p>No hay más personas disponibles.</p>";
      return;
    }
  
    card.innerHTML = `
      <img src="${usuario.foto}" alt="${usuario.nombre}">
      <div class="info">
        <h2>${usuario.nombre}, ${usuario.edad}</h2>
        <p>📍 ${usuario.ciudad}</p>
      </div>
    `;
  }
  
  function darLike() {
    const usuario = usuarios[indiceActual];
    if (usuario) {
      likes.push(usuario);
      actualizarLikes();
    }
    indiceActual++;
    mostrarUsuario();
  }
  
  function saltar() {
    indiceActual++;
    mostrarUsuario();
  }
  
  function actualizarLikes() {
    const container = document.getElementById("likes-container");
    container.innerHTML = "";
    likes.forEach(u => {
      const img = document.createElement("img");
      img.src = u.foto;
      img.alt = u.nombre;
      container.appendChild(img);
    });
  }
  
  mostrarUsuario();
  