import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { doctor } from './doctor.js';

$(document).ready(function() {
  $('#searchDoctor').submit(function(event) {
    event.preventDefault();
    let doctorName = $('#doctorName').val();
    let medicalIssue = $('#medicalIssue').val();
    $('#doctorName').val("")
    $('#medicalIssue').val("");

    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=a500deefc1fd833abe1de4b374a51e23`;
     request.onreadystatechange = function() {
       if (this.readyState === 4 && this.status === 200) {
         let response = JSON.parse(this.responseText);
         getElements(response);
       }
     }

    request.open("GET", url, true);
    request.send();

    let getElements = function(response) {
      $('.showOutput').append('<p>' + `Doctor List: ${response.data[0].name}.` + '</p>');
      $('.showOutput').append('<p>' + `The serial number is ${response.data[0].visit_address}.` + '</p>');
      $('.showOutput').append('<p>' + `The serial number is ${response.data[0].accepts_new_patients}.` + '</p>');
      }

    });
 });
