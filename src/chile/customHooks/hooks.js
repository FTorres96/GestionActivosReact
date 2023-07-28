export const addAttachment = (file, data, token) => {
  let formData = new FormData()
  let filesRespaldos = []
  let archivos = Array.prototype.slice.call(file);
  Promise.all(archivos.map((file) => {
    return new Promise((prom_res, prom_rej) => {
      var fileReader = new FileReader();
      fileReader.onloadend = (e) => {
        file.content = e.target.result;
        filesRespaldos.push(file)
        prom_res(file);
      }
      fileReader.onerror = (e) => {
        prom_rej(e.target.error)
      }
      fileReader.readAsArrayBuffer(file);
    })
  })).then((archivos) => {
    console.log('archivos listos');
  });
  setTimeout(() => {
    formData.append("inputData", JSON.stringify(data))
    for (let i = 0; i < filesRespaldos.length; i++) {
       formData.append("inputFile" + i.toString(), filesRespaldos[i]);
    }
    var xmlhttp = new XMLHttpRequest()

    var url = 'https://localhost:44340/Home/Guardar'

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var response = JSON.parse(this.responseText);
        console.log(response)
      }
    }



    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJJZENvbGFiIjoiMjUxNiIsIm5iZiI6MTY4MzIxMzI5NSwiZXhwIjoxNjgzODE4MDk1LCJpYXQiOjE2ODMyMTMyOTUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDQzNDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQ0MzQwIn0.Vw6JJ5OuIa14w6CJiWU_AA9f_2GlFkq_RicFKumVFEo");
    xmlhttp.send(formData);
  }, 1000);

};
