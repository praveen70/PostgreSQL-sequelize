import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div>
             <footer class="page-footer">
          <div class="container">
            <div class="row" style={{display: "flex", justifyContent: 'space-around', }}>
              {/* <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div> */}
              <div class="col l4 offset-l2 s12">
                <h3 class="white-text">About:</h3>
                <ol>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ol>
              </div>
              <div class="col l4 offset-l2 s12">
                <h3 class="white-text">Help:</h3>
                <ol>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ol>
              </div>
              <div class="col l4 offset-l2 s12">
                <strong><h3 class="white-text">Policy:</h3></strong>
                <ol>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ol>
              </div>
              <div class="col l4 offset-l2 s12">
                <h3 class="white-text">Social:</h3>
                <ol>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ol>
              </div>
              <div class="col l4 offset-l2 s12">
                <h3 class="white-text">Mail Us:</h3>
                <ol>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ol>
              </div>
              <div class="col l4 offset-l2 s12">
                <h3 class="white-text">Registered Office Address:</h3>
                <ol>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ol>
              </div>
            </div>
          </div>
          <div class="footer-copyright" style={{textAlign: 'center', marginTop: 10}}>
            <div class="container" >
            © 2019 Copyright Text
            {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer;