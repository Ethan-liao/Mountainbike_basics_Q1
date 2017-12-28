$(document).ready(()=> {
  let search = '';
  let $modal = $('#myModal');
  let $button = $('.btn');
  let $closeM = $('.close');
  let $txt = $(".pgraph-popups");
  let $gPopUps = $('div-popups');
  let $searchBar = $('.controls');
  let $actualMap = $('#map');

  //button popups
  $button.click(function() {
    $modal.show("block");
    let $buttonId = $(this).attr('id');

    if ($buttonId == 'frame'){
        search = "Bicycle frame";
        $('.popup-txt').text('Frame');
        $('.popup-img').attr('src','')
        $('.popup-img').attr('src','');
        wiki()
    } else if ($buttonId =='derail'){
        search = "Derailleur gears";
        $('.popup-txt').text('Derailleur');
        $('.popup-img').attr('src','');
        $('.popup-img').attr('src','Bike_images/derailleurDescription.jpg')
        wiki()
    } else if ($buttonId =='cassettes'){
        search = "Cogset";
        $('.popup-txt').text('Cogset');
        $('.popup-img').attr('src','');
        $('.popup-img').attr('src','Bike_images/cassettesType.png')
        wiki()
    }  else if ($buttonId =='suspension'){
        search ='Shock absorber';
        $('.popup-txt').text('Suspension');
        $('.popup-img').attr('src','');
        $('.popup-img').attr('src','Bike_images/SuspensionType.jpg')
        wiki()
    }  else if ($buttonId =='wheel'){
        search ='Bicycle wheel';
        $('.popup-txt').text('Wheel');
        $('.popup-img').attr('src','Bike_images/originals/wheelComparison copy.png')
        wiki()
    } else if ($buttonId =='pedals'){
       search = 'Bicycle pedals';
       $('.popup-txt').text('Pedals');
       $('.popup-img').attr('src','');
       $('.popup-img').attr('src','Bike_images/pedal-types.jpg')
       wiki()
    } else if($buttonId == 'google'){
      $('.popup-txt').text('');
      $('.popup-img').attr('src','')
      $txt.text("");
      $searchBar.show();
      $actualMap.show();

    }
      })

      $closeM.click(()=>{
        $modal.hide("slow");
        $('.popup-txt').text('');
        $('.popup-img').attr('src','')
        $searchBar.hide();
        $actualMap.hide();
      })



let wiki = () => {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load',() => {
    if (xhr.status !== 200) {
      return;
    }


    var data = JSON.parse(xhr.responseText);
    let layer3 = Object.keys(data['query']['pages']);
    let layer2 = data['query']['pages'];


    $txt.text(layer2[layer3]['extract']);
    console.log(layer2[layer3]['extract']);

  });

  xhr.open('GET', 'http://galvanize-cors-proxy.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + search);

  xhr.send();
}


  // calling images
  $("#mySpriteSpin").spritespin({
    // path to the source images.
    source: [
      "Bike_images/01.jpg",
      "Bike_images/02.jpg",
      "Bike_images/03.jpg",
      "Bike_images/04.jpg",
      "Bike_images/05.jpg",
      "Bike_images/06.jpg",
      "Bike_images/07.jpg",
      "Bike_images/08.jpg",
      "Bike_images/09.jpg",
      "Bike_images/10.jpg",
      "Bike_images/11.jpg",
      "Bike_images/12.jpg",
      "Bike_images/13.jpg",
      "Bike_images/14.jpg",
      "Bike_images/15.jpg",
      "Bike_images/16.jpg",
      "Bike_images/17.jpg",
      "Bike_images/18.jpg",
      "Bike_images/19.jpg",
      "Bike_images/20.jpg",
      "Bike_images/21.jpg",
      "Bike_images/22.jpg",
      "Bike_images/23.jpg",
      "Bike_images/24.jpg",
      "Bike_images/25.jpg",
      "Bike_images/26.jpg",
      "Bike_images/27.jpg",
      "Bike_images/28.jpg",
      "Bike_images/29.jpg",
      "Bike_images/30.jpg",
      "Bike_images/31.jpg",
      "Bike_images/32.jpg",
      "Bike_images/33.jpg",
      "Bike_images/34.jpg",
      "Bike_images/35.jpg",
      "Bike_images/36.jpg"

    ],
    width: 1000, // width in pixels of the window/frame
    height: 770, // height in pixels of the window/frame

  });
  $('#my_hotspot').dopelesshotspots({

  });
});
