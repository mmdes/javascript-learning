//function request(obj) {
//  return new Promise((resolve, reject) => {
//    const xhr = new XMLHttpRequest();
//    xhr.open(obj.method, obj.url, true);
//    xhr.send()
//    xhr.addEventListener('load', () => {
//      if (xhr.status >= 200 && xhr.status < 300) {
//        resolve(xhr.responseText);
//      } else {
//        reject(xhr.statusText);
//      }
//    });
//  })
//}

/* SEM ASYNC AWAIT */

// function carregaPagina(el) {
//   const href = el.getAttribute('href');
//   fetch(href)
//     .then(response => {
//       if (response.status !== 200) throw new Error('ERRO 404 NOSSO!')
//       return response.text()
//     })
//     .then(html => carregaResultado(html))
//     .catch(e => console.log(e));
// }
// 
// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');
//   resultado.innerHTML = response;
// }
// 
// document.addEventListener('click', e => {
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();
// 
//   if (tag === 'a') {
//     e.preventDefault();
//     carregaPagina(el);
//   }
// });


/* COM ASYNC AWAIT */


async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('MEU ERRO 404!');
    const html = await response.text();

    carregaResultado(html);
  } catch (e) {
    console.log(e)
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});


