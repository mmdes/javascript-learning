/* LEMBRANDO QUE ISSO AQUI NÃO É MAIS TÃO UTILIZADO */



//const request = obj => {
//  const xhr = new XMLHttpRequest();
//  xhr.open(obj.method, obj.url, true);
//  xhr.send()
//  xhr.addEventListener('load', () => {
//    if (xhr.status >= 200 && xhr.status < 300) {
//      obj.success(xhr.responseText);
//    } else {
//      obj.error(xhr.statusText);
//    }
//  });
//};
//
//document.addEventListener('click', e => {
//  const el = e.target;
//  const tag = el.tagName.toLowerCase();
//
//  if (tag === 'a') {
//    e.preventDefault();
//    carregaPagina(el);
//  }
//
//});
//
//function carregaPagina(el) {
//  const href = el.getAttribute('href');
//  console.log(href);
//  request({
//    method: 'GET',
//    url: href,
//    success(response) {
//      carregaResultado(response);
//    },
//    error(errorText) {
//      console.log(errorText);
//    }
//  })
//}
//
//
//function carregaResultado(response) {
//  const resultado = document.querySelector('.resultado');
//  resultado.innerHTML = response;
//}
//




//agora desenvolvendo tudo isso mas usando promises

function request(obj) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send()
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  })
}

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
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