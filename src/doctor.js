import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './main.js';


$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

  });
});
