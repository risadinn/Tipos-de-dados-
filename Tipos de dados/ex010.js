const times = ["Flamengo", "Palmeiras", "São Paulo"];
times.push("Corinthians");
times.unshift("Grêmio");
times.pop();
const posicaoPalmeiras = times.indexOf("Palmeiras");
times.reverse();
console.log("Array final:", times);
console.log("Posição do Palmeiras:", posicaoPalmeiras);
