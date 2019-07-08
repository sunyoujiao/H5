$(function(){
    $.ajax({
        url:"http://localhost:3000/index",
        type:"get",
        dataType:"json",
        success: function(result) {
          var p1=result[0];
        var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="d-inline-block mb-2">${p1.title}</h5>
          <h6 class="mb-5">
            <a class="text-dark" href="javascript:;">${p1.details}</a>
          </h6>
          <span class="text-primary">¥${p1.price.toFixed(2)}</span>
          <a class="btn btn-primary" href="${p1.href}">查看详情</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
      </div> `
      document.getElementById("p1").innerHTML=html;
      var p2=result[1];
      var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-2">${p2.title}</h5>
        <h6 class="mb-5">
          <a class="text-dark" href="javascript:;">${p2.details}</a>
        </h6>
        <span class="text-primary">¥${p2.price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${p2.href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p2.pic}" data-holder-rendered="true">
    </div>`
    document.getElementById("p2").innerHTML=html;
    var p3=result[2];
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
      <h5 class="d-inline-block mb-3">${p3.title}</h5>
      <span class="text-primary">¥${p3.price.toFixed(2)}</span>
      <a class="btn btn-primary" href="${p3.href}">查看详情</a>
    </div>
    <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"src="${p3.pic}" data-holder-rendered="true">
  </div>`
  document.getElementById("p3").innerHTML=html;
  for (var i=3;i<6;i++){
      var p=result[i];
      var html=`<div class="col-md-4 p-0 pl-2">
      <div class="card border-0 text-center">
        <img class="card-img-top" src="${p.pic}" alt="Card image cap">
        <div class="card-body p-0 pr-1 pl-1">
          <span class="d-inline-block">${p.title}</span>
          <span class="text-primary small">¥${p.price.toFixed(2)}</span>
          <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
        </div>
      </div>
    </div>`
    document.getElementById("p").innerHTML+=html;
        }
      }
    })
})