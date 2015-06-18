/*!
 *
 *  Static Website Starter Kit
 *  Copyright 2015 Konstantin Tarkus, Kriasoft LLC. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

(function () {
  'use strict';

  console.log('%cHej Harald och Jesper! Happy inspecting!', 'color: green; font-size: 12px');

  var input = document.getElementById('searchTextField');

  function initialize(element) {
    var input = element;
    var options = {
      types: ['geocode'],
      componentRestrictions: {country: 'se'}
    };

    var autocomplete = new google.maps.places.Autocomplete(input, options);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      prepareBox(autocomplete);
      input.value = '';
    });
  }

  function prepareBox(autocomplete) {
    if(place === 'undefined')
      return;

    var place = autocomplete.getPlace();
    var val = place.address_components[0].short_name;

    addBox(val);
  }

  function getDateTime() {
    /* Stolen from the internet */
    var d = new Date();
    return (
    d.getFullYear() + '-' +
    ('00' + d.getDate()).slice(-2) + '-' +
    ('00' + (d.getMonth() + 1)).slice(-2) + ' ' +
    ('00' + d.getHours()).slice(-2) + ':' +
    ('00' + d.getMinutes()).slice(-2)
    );
  }

  function addBox(string) {
    var $resultContainer = $('#result');
    var $newElement = $('<article class="media">');
    var date = getDateTime();

    $resultContainer.find('.byebye').remove();

    $newElement.append('<h2 class="h4"><i class="icon-heart"></i> <address>' + string + ' </address><small><date>' + date + '</date></small></h2>');

    $resultContainer.append($newElement);

    ga('send', {
      'hitType': 'event',          // Required.
      'eventCategory': 'search',   // Required.
      'eventAction': 'itemadded'      // Required.
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize(input));

  $(document).ready(function(){

    // What is this you may ask...
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {

      var i = document.createElement('iframe');
      i.setAttribute('src', '//embed.spotify.com/?uri=spotify:track:7ruOxrjDX8TOtnBVh0i43b');
      i.setAttribute('frameborder', '0');
      i.setAttribute('allowtransparency', true)
      i.style.width = 300+'px';
      i.style.height = 80+'px';

      var el = document.getElementById('main');
      el.parentNode.appendChild(i, el);

      ga('send', {
        'hitType': 'event',          // Required.
        'eventCategory': 'cheet',   // Required.
        'eventAction': '1337'      // Required.
      });

      alert("1337");
    });
  });

})();
