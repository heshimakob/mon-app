import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import lifti from "./img/lifti.png";


class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
      <div class="container">
          <ul class="nav__menu">
          <div class="logo"><img src={lifti}></img>LIFTI</div>
          
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/taxis">Gestion de taxis</Link>
            </li>
            <li>
              <Link to="/clients">Gestion de clients</Link>
            </li>
          </ul>
 
          <div className="main-route-place">
            <Route exact path="/" component={Dashboard} />
            <Route path="/booking" component={Booking} />
            <Route path="/taxis" component={Gestion_de_taxis} />
            <Route path="/clients" component={Gestion_de_clients} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
 
}
 
class Dashboard extends React.Component {
 
  render()  {
    return (
      <div class="section">
        <h2>Dashboard</h2>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="600" height="500" id="gmap_canvas"
            src="https://maps.google.com/maps?q=goma&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}
 
class  Booking  extends React.Component {
  render() {
    return (
      <div class="section">
      <div class="top">
        <h2>Booking</h2>
        <p><i class="fas fa-user"></i>Heshima</p>
      </div>
      <div class="date">
        <div class="date__content">Date <span>22-10-2020</span></div>
        <div class="total">Total : 58</div>
      </div>
      <div class="table">
            <h2 class="caption">Booking du  <span> 22-10-2020</span></h2>
        <div class="table__content">
          <table>
              <thead>
              <tr>
                <th>Client</th>
                <th>Taxi ID</th>
                <th>Montant</th>
                <th>Origine</th>
                <th>Destination</th>
                <th class="end">Datetime</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>Heshima</td>
                <td>1057863</td>
                <td>5000 <span>Fc</span></td>
                <td>Port</td>
                <td>Himbi 1</td>
                <td ><span>22-10-2020</span> <span>15:43</span></td>
              </tr>
              <tr>
                <td>Heshima</td>
                <td>1057863</td>
                <td>5000 <span>Fc</span></td>
                <td>Port</td>
                <td>Himbi 1</td>
                <td><span>22-10-2020</span> <span>15:43</span></td>
              </tr>
              <tr>
                <td>Heshima</td>
                <td>1057863</td>
                <td>5000 <span>Fc</span></td>
                <td>Port</td>
                <td>Himbi 1</td>
                <td><span>22-10-2020</span> <span>15:43</span></td>
              </tr>
              <tr>
                <td>Heshima</td>
                <td>1057863</td>
                <td>5000 <span>Fc</span></td>
                <td>Port</td>
                <td>Himbi 1</td>
                <td><span>22-10-2020</span> <span>15:43</span></td>
              </tr>
              <tr>
                <td>Heshima</td>
                <td>1057863</td>
                <td>5000 <span>Fc</span></td>
                <td>Port</td>
                <td>Himbi 1</td>
                <td><span>22-10-2020</span> <span>15:43</span></td>
              </tr>
              <tr>
                <td>Heshima</td>
                <td>1057863</td>
                <td>5000 <span>Fc</span></td>
                <td>Port</td>
                <td>Himbi 1</td>
                <td><span>22-10-2020</span> <span>15:43</span></td>
              </tr>

              </tbody>
          </table>
              <div class="navigation">
                <button>Precedent</button>
                <div class="navigation__state">Page <span>1</span> sur <span>5</span> <span class="line">lines : <span>10</span></span></div>
                <button>Suivant</button>
              </div> 
          
        </div>
      </div>

      </div>
    );
  }
}
 
class Gestion_de_taxis extends React.Component {
  render( ) {
    return (
      <div class="section">
        <h2>Gestion de Taxis</h2>
      </div>
    );
  }
}

class Gestion_de_clients extends React.Component {
  render( ) {
    return (
      <div class="section">
        <h2>Gestion de clients</h2>
      </div>
    );
  }
}
export default App;

