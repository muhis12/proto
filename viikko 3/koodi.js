function tulostaParilliset()
{
  var karvo = parseInt(document.getElementById('pluku').value);
  var jono = "<p>";
  for(var i = 2; i <= karvo; i= i+2)
  {




    jono+=i;
    jono+=" ";
  }
    jono+="</p>";
    document.getElementById('parilliset').innerHTML = jono;
}
function muutaSalasanaksi()
{
  var ksana = document.getElementById('ksana').value;
  var salasana = "<p>";
  for(var j = 0; j < ksana.length; j++)
  {





    salasana += "</p>";
    document.getElementById('salasana').innerHTML = salasana;
  }
  function tarkistaKirjain()
  {
    var annettuSana = document.getElementById('tsana').value;
    var vastaus = 'ei ole';
    for(var k = 0; k < annettuSana.length; k++)
    {
      if(annettuSana[k] == 'Ã¶' || annettuSana[k] == 'Ã–')
      {
      vastaus= ('on');
      }



    }
}
document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}
function laskeKertoma()
{
var kerLuku = document.getElementById('kertoma').value;
var laskettu = 1;
for(var z = 1; z <= kerLuku; z++)
{
  laskettu*=z;
}
