import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { doctor } from './doctor.js';
const apiKey = process.env.exports.apiKey;

$(document).ready(function() {
  $('#searchDoctor').submit(function(event) {
    event.preventDefault();
    let doctorName = $('#doctorName').val();
    let medicalIssue = $('#medicalIssue').val();
    $('#doctorName').val("")
    $('#medicalIssue').val("");

    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&query=${medicalIssue}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=a500deefc1fd833abe1de4b374a51e23`;
     request.onreadystatechange = function() {
       if (this.readyState === 4 && this.status === 200) {
         let response = JSON.parse(this.responseText);
         getElements(response);
       }
     }

    request.open("GET", url, true);
    request.send();

    let getElements = function(response) {
      $('.showOutput').empty();
      response.data.forEach(function() {
      $('.showOutput').append('<p>' + `Doctor Name: ${response.data[0].profile.first_name} ${response.data[0].profile.middle_name} ${response.data[0].profile.last_name}.` + '</p>');
      $('.showOutput').append('<p>' + `The address is <br><div id="address">${response.data[0].practices[0].visit_address.street}<br> ${response.data[0].practices[0].visit_address.city}<br> ${response.data[0].practices[0].visit_address.state}${response.data[0].practices[0].visit_address.zip}.` + '</p>');
      $('.showOutput').append('<p>' + `Is the doctor accepting new patients: ${response.data[0].practices[0].accepts_new_patients}.` + '</p>');
    })
    $("#ouput").show();


    }
 });
});
