const mensagens = [
"vocẽ e mais forte do que imagina 💛"
"nunca se esqueça: sua vida importa 🌻"
"vocẽ não ésta sozinho, estamos juntos 🤝🏿"
"acredite:dias melhores virão ☀️"
"sempre existe  esperança 🏳️‍🌈"
];

document.getElementById("btnMensagem").addEventListener("click", () =>{
  const aleatoria = mensagem[Math.floor(Math.random() *  mensagem.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
