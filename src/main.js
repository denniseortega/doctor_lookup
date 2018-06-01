import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { doctor } from './doctor.js';

var Promise = require('es6-promise').Promise;


$(document).ready(function() {
  $('#searchDoctor').submit(function(event) {
    event.preventDefault();
    let medicalIssue = $('#medicalIssue').val();
    let doctorName = $('#doctorName').val();
    $('#medicalIssue').val("");
    $('#doctorName').val("");

  });
});
