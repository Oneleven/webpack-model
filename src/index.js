import $ from 'jquery'
import './style.css'
import Img from './pic.jpeg'
import Print from './print.js'

function component() {
  var $div = $('<div/>')
  var $img = $('<img/>')
  var $button = $('.click')
  $div.html('heihei')
  $img.attr('src', Img)
  $div.append($img)
  $div.append($button)
  $button.on('click', Print)
  return $div
}

$(document.body).append(component())